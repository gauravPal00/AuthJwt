import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const verifyToken = (req,res,next)=>{
    const token = req.body.token || req.query.token ||req.headers["x-access-token"]
    if(!token){
            return res.status(403).send("A Token is required for authentication")
    }
    try{
        const tokenKey = process.env.Token
        const decoded =  jwt.verify(token,tokenKey)
        req.user = decoded;
      
    }
    catch(error){
        res.status(400).send({error:error.message})
    }
    return   next()
}

