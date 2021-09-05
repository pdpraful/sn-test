let express = require('express')
var validateUser = require('./Validation/ValidateUser')
userRouter = express.Router();

const MESSAGE_WITHOUT_SUB = "Thank you for signing up. Your account is now created";
const MESSAGE_WITH_SUB = "Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email:";


userRouter.post("/signup", (req, res) => {
    console.log(req.body)
    const validationResult = validateUser(req.body);
    if (!validationResult.error) {
        let message = "";
        if (!req.body.IsSubscribed) {
            message = `Hello ${req.body.FirstName} ${req.body.LastName} ${MESSAGE_WITHOUT_SUB}`;
        }
        else {
            message = `Hello ${req.body.FirstName} ${req.body.LastName} ${MESSAGE_WITH_SUB} ${req.body.Email}`;
        }
        res.send({ error: false, status: 200, message: message })
    }
    else {
        res.send({error : true, status : 400, message : validationResult.error.details[0].message});
    }
});

module.exports = userRouter;