var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var body_parser = require('body-parser')
var LocalStrategy = require('passport-local')
var passLocalMong = require('passport-local-mongoose')
var user = require('./models/user')
const { use } = require('passport')

mongoose.set('useNewUrlParser',true)
mongoose.set('useFindAndModify',false)
mongoose.set('useCreateIndex',true)
mongoose.set('useUnifiedTopology',true)
mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express()
app.set('view engine',"ejs")
app.use(body_parser.urlencoded({extended : true}))

app.use(require('express-session')({
    secret : "Rusty is a dog",
    resave : false,
    saveUninitialized : false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())

//showing home page

app.get("/",function(req,res){
    res.render("home")
})

//show secret page

app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret")
})

//register page
app.get("/register",function(req,res){
    res.render("register")
})

//handling user signup

app.post("/register",function(req,res){
    var username = req.body.username
    var password = req.body.password

    user.register(new user({ username : username}),
    password,function(err,user){
        if(err)
        {
            console.log(err);
            return res.render("register")
        }

        passport.authenticate("local")(
            req,res,function(){
            res.render("secret")
        })           
    })
})

app.get("/login",function(req,res){
    res.render("login")
})

app.post("/login",passport.authenticate("local",{
    successRedirect : "/secret",
    failureRedirect : "/login"
}),function(req,res){
})

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated()) return next()
    res.redirect("/login")
}

var port = process.env.PORT || 3000
app.listen(port,function(){
    console.log("Server has started");
})