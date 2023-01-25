const database = require('../models')
class EventosController {

  static async findAll(req, res) {
    try {
      const evento = await database.Eventos.findAll()
      return res.status(200).json(evento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const json = req.body
    json.id_user = req.user.id
    try {
      const evento = await database.Eventos.create(json)
      return res.status(200).json(evento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params;
    try {
      const evento = await database.Eventos.findOne({ where: { id: Number(id) } })
      return res.status(200).json(evento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const json = req.body;

    try {
      await database.Eventos.update(json, {
        where: { id: Number(id), id_user: req.body.id_user },
        individualHooks: true
      })
      const evento = await database.Eventos.findOne({ where: { id: Number(id) } })
      return res.status(200).json(evento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async delete(req, res) {
    const { id } = req.params
    try {
      await database.Eventos.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `Evento ${id} apagado!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}
module.exports = EventosController
