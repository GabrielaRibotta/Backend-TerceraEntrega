//Imports
import config from './config/config.js';
import express from 'express';
import { __dirname } from './utils/path.js'
import handlebars from 'express-handlebars'
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

//Import Routers
import viewsRouter from './routes/views.routes.js'
import usersRouter from './routes/users.routes.js';
import productsRouter from './routes/products.routes.js';

import './passportStrategies.js'
import './persistence/mongoDB/dbConfig.js'
import passport from 'passport';

/* --------------------------------------------------------- */

//Config

const app = express()
const PORT = config.port || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Sessions
app.use(
    session({
        store: new MongoStore({
            mongoUrl: config.mongo_uri,
            ttl: 15
        }),
        secret: 'sessionSecret',
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 60000}
    })
)

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Routers
app.use('/api/views', viewsRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)


app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})