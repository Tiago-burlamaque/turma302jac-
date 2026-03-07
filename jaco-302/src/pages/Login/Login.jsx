import { useState } from 'react'
import '../../App.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Logo from '../../../images/logoMoletons.jpeg'

function Login() {

  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [abrirModal, setAbrirModal] = useState(false);

  const handleCleanForm = () => {
    setNome('')
    setMatricula('')
    setSenha('')
    setConfirmarSenha('')
  }

  const handleEnter = async (e) => {
    e.preventDefault()

    try {
      await axios.post('https://turma302jac-production.up.railway.app:3000/aluno/login', {nome, matricula, senha})

      toast.success("Aluno logado!")  
      handleCleanForm()
    } catch (error) {
      console.error(error)
      toast.error("Erro ao entrar.")
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      toast.warning("As senhas não concidem")
      return
    }

    try {
      await axios.post('https://turma302jac-production.up.railway.app:3000/aluno', {
        nome: nome,
        matricula: matricula,
        senha: senha
      })
      toast.success("Aluno registrado com sucesso.")
      setAbrirModal(false)
      handleCleanForm()
    } catch (error) {
      console.error(`Erro ao criar o aluno: ${error}`)
    }
  }

  return (
    <section className='h-screen md:flex '>
      <div className='w-2/2 h-full bg-purple-400'>
        <header className='w-full h-30 flex items-center justify-center'>
          <h1 className='poppins-extralight text-4xl text-black text-shadow-lg'>Turma 302 da Jacó</h1>
        </header>
        <main className='h-100  flex items-center justify-center '>
          <img src={Logo} width={600} alt="Logo" className='rounded shadow-2xl shadow-purple-500' />
        </main>
      </div>
      <div className='md:w-1/2 h-full bg-black text-white flex-col flex p-2'>
        <header className='w-full h-30 flex items-center justify-center'>
          <h1 className='poppins-thin text-3xl'>Entre como aluno</h1>
        </header>
        <form className='flex-col flex justify-center items-center h-100 gap-4' onSubmit={handleEnter}>
          <label htmlFor="nome" className='poppins-light'>Nome</label>
          <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

          <label htmlFor="matricula" className='poppins-light'>Matricula</label>
          <input type="number"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

          <label htmlFor="senha" className='poppins-light'>Senha</label>
          <input type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

          <button className='poppins-light border w-60 rounded p-2 cursor-pointer bg-white text-black hover:border hover:border-purple-400 hover:bg-purple-400 hover:text-white transition duration-300' type='submit'>Entre</button>
        </form>
        <hr />
        <footer className='h-30 w-full flex  items-center justify-center'>
          <h1 className='poppins-extralight flex gap-1'>É aluno novo? <h1 onClick={() => setAbrirModal(true)} className='text-purple-300 hover:text-purple-400 transition duration-300 cursor-pointer'>Registre-se</h1></h1>
          {abrirModal && (
            <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full bg-neutral-500'>
              <div className='bg-black p-10 rounded-2xl w-100 h-150 shadow-2xl'>
                <div>
                  <button onClick={() => setAbrirModal(false)} className='text-purple-300 hover:text-purple-400 transition duration-300 text-xl cursor-pointer md:fixed top-12 right-115'>X</button>
                </div>
                <header className='w-full flex items-center justify-center'>
                  <h1 className='poppins-light text-3xl '>Registrar aluno</h1>
                </header>

                <form className='flex-col flex justify-center items-center h-100 gap-4' onSubmit={handleRegister}>
                  <label htmlFor="nome" className='poppins-light'>Nome</label>
                  <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

                  <label htmlFor="matricula" className='poppins-light'>Matricula</label>
                  <input type="number"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

                  <label htmlFor="senha" className='poppins-light'>Senha</label>
                  <input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

                  <label htmlFor="confirmar_senha" className='poppins-light'>Confirmar senha</label>
                  <input type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

                  <button className='poppins-light border w-60 rounded p-2 cursor-pointer bg-white text-black hover:border hover:border-purple-400 hover:bg-purple-400 hover:text-white transition duration-300' type='submit'>Registrar</button>
                </form>
              </div>
            </div>
          )}
        </footer>
      </div>
    </section>
  )
}

export default Login
