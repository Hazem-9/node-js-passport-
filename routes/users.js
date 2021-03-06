const express = require("express");
const router = express.Router();
//login page
router.get('/login', (req,res) => res.render("login"));

// register page
router.get('/register', (req,res) => res.render("register"));

//register handle 
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
  // Validation 
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    }   else{

        res.send('pass')  

    }

})

module.exports = router;