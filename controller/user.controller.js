const models = require('../models');

exports.addUser = async (req, res) => {
  try{
    const {
      name,
      gender, 
      age,
      role_id
    } = req.body; 


    const result = await models.users.create({
      name: name, 
      gender: gender,
      age: age, 
      role_id: role_id,
      created_at: new Date(),
      updated_at: new Date()
    })

    return res.status(201).json({
        status: 'success',
        message: 'success create account',
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

exports.editUser = async (req, res) => {
  try{
    const id = req.params.id;

    const {
      name, 
      age,
    } = req.body; 
    
    const find_id = await models.users.findOne({
      where:{
        id: id
      }
    })

    if(!find_id){
      return res.status(404).json({
        status: 'success',
        message: 'ID Not Found '
      });
    }
    const result = await models.users.update({
      name: name,
      age: age,
      updated_at: new Date()
      },{
        where:{
          id: id
        }
    })

    if(!result){
      return res.status(400).json({
        status: 'fail',
        message: 'failed to update data'
      });
    }

    return res.status(201).json({
      status: 'success',
      message: 'success update data',
    });

  }catch(error){
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  }
}

exports.deleteUser = async (req, res) => {
  try{
    const id = req.params.id;

    const find_id = await models.users.findOne({
      where:{
        id: id
      }
    })

    if(!find_id){
      return res.status(404).json({
        status: 'success',
        message: 'ID Not Found'
      });
    }
    
    const result = await models.users.destroy({
      where: {
        id: id
      }
    })

    
    if(!result){
      return res.status(400).json({
        status: 'fail',
        message: 'fail to delete user'
      })
    }
    return res.status(200).json({
      status: 'success',
      message: 'success delete users'
    })


  }catch(error){
    return res.status(400).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  }
} 