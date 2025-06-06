

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.headers['authorization']?.split(' ')[1]; // Bearer abc.def.ghi
    if(!token){
        return res.status(401).json({message: "Access denied, token not provided"});
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({message: "Invalid Token"});
    }

};

module.exports = auth;