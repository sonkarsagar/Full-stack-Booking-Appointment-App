const user=require('../models/user')

exports.getUser=(req,res,next)=>{
    user.findAll().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
}

exports.postUser=(req,res,next)=>{
    const name=req.body.name
    const email=req.body.email
    const phone=req.body.phone
    user.create({
        name: name,
        email: email,
        phone: phone
    }).then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
}

exports.deleteUser=(req,res,next)=>{

}