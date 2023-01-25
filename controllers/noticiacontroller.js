const database = require('../models')
class NoticiasController {

  static async findAll(req, res) {
    try {
      const noticia = await database.Noticias.findAll()
      return res.status(200).json(noticia)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const json = req.body

    try {
      const noticia = await database.Noticias.create(json)
      return res.status(200).json(noticia)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params;
    try {
      const noticia = await database.Noticias.findOne({ where: { id: Number(id) } })
      return res.status(200).json(noticia)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const json = req.body;

    try {
      await database.Noticias.update(json, {
        where: { id: Number(id), id_user: req.body.id_user },
        individualHooks: true
      })
      const noticia = await database.Noticias.findOne({ where: { id: Number(id) } })
      return res.status(200).json(noticia)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async delete(req, res) {
    const { id } = req.params
    try {
      await database.Noticias.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `Noticia ${id} apagado!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}
module.exports = NoticiasController
