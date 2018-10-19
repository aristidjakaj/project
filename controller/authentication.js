const bodyParser = require(`body-parser`);
const {sequelize} = require(`./../models/index`);
const expressValidator = require(`express-validator`);
const session = require(`express-session`);
const bcrypt = require(`bcrypt`);
const saltRounds = 8;

module.exports=(app)=>{
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(expressValidator());
  app.use(session({secret: `something`, saveUninitialized: false, resave: false}));

  app.get(`/`, function(req, res){
    res.render(`home`, {success: req.session.success, logErrors: req.session.logErrors});
    req.session.logErrors = null;
  });

  app.get(`/my-account`, function(req, res){
   res.render(`my-account`, {name: req.session.name, success: req.session.success, errors: req.session.errors, counter: false, logErrors: req.session.logErrors});
   req.session.errors = null;
   req.session.success = null;
   req.session.name = null;
   });

   app.get('/logout', function(req, res){
     req.session.destroy((err) =>{
       if(err){
         console.log(err);
       }
       else{
         res.redirect('/');
       }
     });
   });

   app.post(`/login`, function (req, res){

     sequelize.query(
       `SELECT email, password FROM users WHERE email= :email`,
       {
         replacements: {
           email: req.body.loginEmail
         },
         type : sequelize.QueryTypes.SELECT
       }
     ).then( result => {

       let errors = req.validationErrors() || [];

       if (typeof result[0]===`undefined`) {

         errors.push({param: `loginEmail`, msg: `Email you entered is incorrect`});
         req.session.logErrors = errors;

         return res.redirect('back');
       }

       let comparePassword = bcrypt.compareSync(req.body.loginPassword, result[0].password);


     }).catch( err => {
       console.log(err);
     });
   });

    app.post(`/my-account`, function(req, res){

      const { username, email, password, confirmPassword } = req.body;

      req.check(`password`, `Password is invalid`).isLength({min: 6}).equals(confirmPassword);

        sequelize.query(
          `SELECT username, email FROM users WHERE username= :username OR email= :email`,
          {
            replacements:{
              username,
              email
            },
            type: sequelize.QueryTypes.SELECT
          }
        ).then(result=>{
          let userCounter=false, emailCounter=false;
          for (let i = 0; i < result.length; i++) {
            if(result[i].username === username){
              userCounter=true;
            }
            if (result[i].email === email) {
              emailCounter=true;
            }
          }

          let errors = req.validationErrors() ||  [];
          if(userCounter){
            errors.push({
              param: 'username',
              msg: 'Username has been taken'
            });
          }

          if (emailCounter) {
            errors.push({
              param: 'email',
              msg: 'Email has been taken'
            });
          }
          if(errors.length !== 0){
            let c = 0;
            for (let i = 0; i < errors.length; i++) {
              if (errors[i].param==='password') {
                c++;
              }
            }
            if (c>1) {
              for (let i = 0; i < errors.length; i++) {
                if (c>1 && errors[i].param==='password') {
                  errors.splice(i, 1);
                  c--;
                }
                if (c<=1) {
                  break;
                }
              }
            }
            req.session.errors = errors;
            req.session.success = false;
            return res.redirect('/my-account');
          }

          let hash = bcrypt.hashSync(password, saltRounds);

          req.session.success = true;
          req.session.name = req.body.username;

          sequelize.query(
            `INSERT INTO users (username, email, password) VALUES (:username, :email, :password)`,
            {
              replacements:{
                username,
                email,
                password: hash
              }
            }
          ).then(result=>{
            return res.redirect('my-account');
          }).catch(err=>{
            console.log(`${err}`);
          });
        }).catch(err=>{
          console.log(err);
        });
    });
}
