const {validator}=require("express-validator");
const resultValidator=(req, res, next) => {
    try {
        resultValidator(req).throw();
        return next();
        } catch (error) {
            res.status(403);
            res.send({ errors: error.array()});
        }
}

module.exports={resultValidator};