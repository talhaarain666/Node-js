
const myToken = "12345";

const checkToken = (req, res, next) => {
    if(req.query.token == undefined || req.query.token == ""){
       return res.send({
            status:0,
            msg:"Please Fill the token"
        })
    }
    if(req.query.token != myToken){
        return res.send({
            status:0,
            msg:"Please Fill the correct token"
        })
    }
    next();
}

module.exports={checkToken}