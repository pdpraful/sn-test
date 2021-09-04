let express = require('express')
let bodyParser = require('body-parser')
userRouter = express.Router();

const GERENRIC_MESSAGE = "Invalid Request";
const EMPTY_MESSAGE = "Canot Be Empty";
const MESSAGE_WITHOUT_SUB = "Thank you for signing up. Your account is now created";
const MESSAGE_WITH_SUB = "Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email:";


userRouter.post("/signup", (req, res) => {
    const validationResult = validateSignUpRequest(req.body);
    if (validationResult.status != 400) {
        if (!req.body.isSubscribed) {
            res.send({ error: false, status: 200, message: `Hello ${req.body.FirstName} ${req.body.LastName} ${MESSAGE_WITHOUT_SUB}` })
        }
        else {
            res.send({ error: false, status: 200, message: `Hello ${req.body.FirstName} ${req.body.LastName} ${MESSAGE_WITH_SUB} ${req.body.Email}` })
        }
    }
    else {
        res.send(validationResult);
    }
});


function validateSignUpRequest(body) {
    let message = "Valid Request";
    let status = 200;
    let error = false;
    if (!body.FirstName) {
        error = true;
        status = 400;
        message = `${GERENRIC_MESSAGE} : The First Name ${EMPTY_MESSAGE}`
    }
    else if (!body.LastName) {
        error = true;
        status = 400;
        message = `${GERENRIC_MESSAGE} : The Last Name ${EMPTY_MESSAGE}`
    }
    else if (!body.Email) {
        error = true;
        status = 400;
        message = `${GERENRIC_MESSAGE} : The Email ${EMPTY_MESSAGE}`
    }
    else if (!body.Password) {
        error = true;
        status = 400;
        message = `${GERENRIC_MESSAGE} : The Password ${EMPTY_MESSAGE}`
    }
    if (body.Password && body.Password.length < 8) {
        error = true;
        status = 400;
        message = `${GERENRIC_MESSAGE} : The Password Should be more than eight characters`
    }
    return { error: error, status: status, message: message }
}


module.exports = userRouter;