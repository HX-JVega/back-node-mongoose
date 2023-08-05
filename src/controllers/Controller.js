class Controller {
  constructor(service) {
    this.service = service;
  }

  findAll(req, res) {
    res.status(200).json({ message: "Estamos en un findAll" });
  }

  findById(req, res) {
    const { id } = req.params;
    res.status(200).json({ message: `Recibimos el id ${id}` });
  }

  create() {}

  delete() {}
}

module.exports = Controller;

// Red / Enrutado => Controlador =>

// ServicioA => ModeloA => Conexión BDD
//           => ModeloB

// ServicioB => ModeloB
