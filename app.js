const path = require('path')
const express = require('express');
const morgan = require('morgan'); 
const helmet = require('helmet');

const doctorRouter = require('./routes/doctorRouter');
const userRouter = require('./routes/userRouter');
const doctorsModel = require('./models/doctorModel');
const viewRouter = require('./routes/viewRouter')


const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//1. Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

// app.use(express.static('public'));

// Security HTTP headers
app.use(helmet());

//Development Logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use((req, res, next) =>{
    console.log('Hello From The Middleware 😂');
    next();
});
 
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next(); 
})


//2. route

app.post('/signup',async (req, res) => {
    const data={
        name:req.body.name,
        phone:req.body.mobile,
        email:req.body.email,
        password:req.body.password
    }
    await doctorsModel.insertMany([data]); 
    res.render('profile');
})
app.use('/', viewRouter);
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;