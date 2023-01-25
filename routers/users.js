const UserController = require("../controllers/usercontroller")
const strategy = require("../libs/middlewares-strategy");
module.exports = app => {
  app.get('/users/login', strategy.basic, UserController.login)
  app.get('/users', UserController.findAll)
  app.get('/users/:id', strategy.bearer, UserController.findById)
  app.post('/users', strategy.bearer, UserController.create)
  app.put('/users/:id', strategy.bearer, UserController.update)
  app.delete('/users/:id', strategy.bearer, UserController.delete)
}
