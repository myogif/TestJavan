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
    
    // TODO Chech Name in API exist or NOT

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
    const api = apiAdapter('https://dummyjson.com')
    
    const response = await api.get('products/search?q=iPhone%209')
    return res.status(200).json({
      status: 'success',
      message: 'success get data',
      data: response.data
    })
    
  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      err_message: error.message
    })
  }
}