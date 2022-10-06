const {router} = require('../connection');
const userModel= require('../models/user.model');

router.route('/create-user').post(async(req, res)=>{
   try{ 
     const user = await userModel.create({
        name:req.body.name,
        email:req.body.email,
     });
     res.json({stats:'user created', user})
   }catch(err){
     res.json({stats:'user cannot be created, '+err});
   }
});

module.exports = router;