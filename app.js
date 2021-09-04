let express = require('express')
let path = require("path");
let bodyParser = require('body-parser')
let app = express();
const userRoute = require('./api/users-route/users');
const port = process.env.PORT || "8000";
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Setup Pug
app.set("views", path.join(__dirname, "views/user"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res)=>{
    res.render("signup", { title: "Home" });
});

//user Routes
app.use('/user', userRoute);

app.listen(port, () => {
    console.log("server started");
});

