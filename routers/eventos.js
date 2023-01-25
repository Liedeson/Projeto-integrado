const EventosController = require("../controllers/eventocontroller")
const strategy = require("../libs/middlewares-strategy");
module.exports = app => {
   // app.get('/eventos/Descriçao',EventosController.Descriçao)
    app.get('/eventos', EventosController.findAll)
    app.get('/eventos/:id',strategy.bearer, EventosController.findById)
    app.post('/eventos', strategy.bearer, EventosController.create)
    app.put('/eventos/:id', strategy.bearer, EventosController.update)
    app.delete('/eventos/:id',strategy.bearer, EventosController.delete)
}
