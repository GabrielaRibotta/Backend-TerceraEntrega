import { Router } from 'express';
import { usersController } from '../controllers/users.controller.js'
import passport from 'passport';

const usersRouter = Router()

//FIND USERS
usersRouter.get('/', usersController.findAllUsers)
usersRouter.get('/:idUser', usersController.findOneUser)

//SIGNUP
//--Email
usersRouter.post('/', usersController.createOneUser)

//--Github
usersRouter.get('/api/users/githubSignup',
    passport.authenticate('githubSignup', {scope: ['user:email']})
)

usersRouter.get('/github',
    passport.authenticate('githubSignup', {failureRedirect: '/api/views'}),
    function(req, res) {
        res.redirect('/api/views/products')
    }
)


//LOGIN con Passport
usersRouter.post('/login', 
    passport.authenticate('login', {
        passReqToCallback: true,
        failureRedirect: '/api/views/errorLogin',
        successRedirect: '/api/views/products'
    })
)

//LOGOUT
usersRouter.get('/logout', (req, res)=>{
    req.session.destroy(error =>{
        if(error){
            console.log(error)
            res.send(error)
        } else{
            res.redirect('/api/views')
        }
    })
})

//DELETE
usersRouter.delete('/', usersController.deleteOneUser)

export default usersRouter