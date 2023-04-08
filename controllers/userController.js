const User = require('./../models/userModel');


exports.getAllUser = async (req, res) => {
   try{ 
    const user = await User.find();

    res.status(200).json({
        status: 'success',
        result: user.length,
        data:{
            user
        }
    });
} catch (err){
    res.status(400).json({
        status: 'fail',
        message: 'invalid data sent!'
    });
}

};

exports.getUser = async (req, res) => {
  try {
   const user = await User.findById(req.params.id);
   
   res.status(200).json({
    status: 'success',
    data:{
        user
    }
});

  }  catch (err){
    res.status(400).json({
        status: 'fail',
        message: err
    });
}
};

exports.createUser = async (req, res)=>{
    try{
        
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data:{
            newUser
        }
    });
} catch (err){
    res.status(400).json({
        status: 'fail',
        message: 'invalid data sent!'
    });
}
}; 

exports.updateUser = async (req, res) => {
    try {
      const user = await  User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true 
        });
        
        res.status(200).json({
        status: 'success',
        data: {
          user
        }
    });
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: 'invalid data sent!'
        });
    }
};

exports.deleteUser = async  (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        
    res.status(204).json({
            status: 'success',
            data: null
        });

    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: 'error'
        });
    } 
};

// login callback
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
exports.registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
