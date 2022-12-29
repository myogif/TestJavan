const models = require('../models');
const apiAdapter = require('./handler/apiAdapter')

exports.addAsset = async (req, res) => {
  try{
    const {
      name,
      user_id,
    } = req.body;

    // TODO Chech asset exist in API 

    const result = await models.asets.create({
      name: name, 
      user_id: user_id,
      created_at: new Date(),
      updated_at: new Date()
    })

    if(!result){
      return res.status(400).json({
        status: 'fail',
        message: 'fail add data'
      })
    }

    return res.status(201).json({
      status: 'success',
      message: 'success add data',
      data: result.id
    })

  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.editAsset = async (req, res) => {
  try{
    const id = req.params.id;

    const { 
      name
    } = req.body;

    const find_id = await models.asets.findOne({
      where:{
        id: id 
      }
    });

    if(!find_id){
      return res.status(404).json({
        status: 'fail',
        messege: 'ID not found '
      });
    }
    
    // TODO Check Name in API exist or NOT

    const result = await models.asets.update({
      name: name
    },{
      where: {
        id: id
      }
    })

    if(!result){
      return res.status(400).json({
        status: 'fail',
        message: 'fail to update data'
      });
    }

    return res.status(201).json({
      status: 'success',
      message: 'success update data'
    })

  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}

exports.deleteAsset = async (req, res) => {
  try{
    const id = req.params.id;

    const find_id = await models.asets.findOne({
      where:{
        id: id 
      }
    });

    if(!find_id){
      return res.status(404).json({
        status: 'fail',
        messege: 'ID not found '
      });
    }

    const result = await models.asets.destroy({
      where:{
        id: id
      }
    });

    if(!result){
      return res.status(400).json({
        status: 'fail',
        message: 'fail to delete data'
      })
    }
    return res.status(200).json({
      status: 'success',
      message: 'success delete data'
    });


  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}



exports.getTotalAsetByID = async (req, res) => {
  try{ 
    const id = req.params.id; // get user_id from params

    const aset_list = await models.asets.findAll({
      where:{
        user_id: id
      },
      attributes: ['name']
    })

    let request = aset_list.map(value => value.name);

    const api = apiAdapter('https://dummyjson.com');
    let params = [] /// array to strore new request
    let total_price = 0
    for(let i = 0; i < request.length; i++){
      params[i] = request[i].replace(/ /g, "%20");
      console.log(params[i]) 
      const response = await api.get(`products/search?q=${request[i]}`);
      const data = response.data.products;  
      const price = data.map(val => (val.price))
      total_price += parseInt(price)
    }

    return res.status(200).json({
      status: 'success',
      message: 'success get data',
      price: total_price,
      aset_list: aset_list
    })
    
  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}