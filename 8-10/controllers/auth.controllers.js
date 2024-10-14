export const Login = (req, res) => {
    console.log("inside login controller.");
    res.send("Login page from auth.controllers.js .");
  };
  
  export const Register = (req, res) => {
    console.log(req.body, "req.body");
    console.log("Inside register controller");
    res.send("register call after nodemon installtion.");
  };