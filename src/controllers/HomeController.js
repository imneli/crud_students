import Aluno from '../models/Aluno'

class HomeController  {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Montovaneli',
      email: 'contatodoneli@gmail.com',
      idade: 18,
      peso: 80,
      altura: 1.7,

    })
    res.json(novoAluno)
  }
}

export default new HomeController();
