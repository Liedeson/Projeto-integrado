const NoticiasController = require("../controllers/noticiacontroller")
const strategy = require("../libs/middlewares-strategy");
module.exports = app => {
   // app.get('/eventos/Descriçao',EventosController.Descriçao)
    app.get('/noticias', NoticiasController.findAll)
    app.get('/noticias/:id',strategy.bearer, NoticiasController.findById)
    app.post('/noticias', strategy.bearer, NoticiasController.create)
    app.put('/noticias/:id', strategy.bearer, NoticiasController.update)
    app.delete('/noticias/:id',strategy.bearer, NoticiasController.delete)
}