import '../../App.css'

function Login() {

  const handleEnter = () => {

  }

  return (
    <section className='h-screen md:flex '>
      <div className='w-2/2 h-full bg-purple-400'>
        <header className='w-full h-30 flex items-center justify-center'>
          <h1 className='poppins-extralight text-4xl text-black text-shadow-lg'>Turma 302 da Jacó</h1>
        </header>
        <main className='h-100  flex items-center justify-center '>
          <img src="../../../public/images/WhatsApp Image 2026-03-06 at 04.43.08.jpeg" width={600} alt="" className='rounded shadow-2xl shadow-purple-500' />
        </main>
      </div>
      <div className='md:w-1/2 h-full bg-black text-white flex-col flex p-2'>
        <header className='w-full h-30 flex items-center justify-center'>
          <h1 className='poppins-thin text-3xl'>Entre como aluno</h1>
        </header>
        <main className='flex-col flex justify-center items-center h-100 gap-4' onSubmit={handleEnter}>
          <label htmlFor="nome" className='poppins-light'>Nome</label>
          <input type="text"
            className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

          <label htmlFor="matricula" className='poppins-light'>Matricula</label>
          <input type="text"
            className='poppins-light border w-60 rounded focus:outline focus:outline-purple-400 focus:border-purple-400 p-1 transition duration-300' />

            <button className='poppins-light border w-60 rounded p-2 cursor-pointer bg-white text-black hover:border hover:border-purple-400 hover:bg-purple-400 hover:text-white transition duration-300'>Entrar</button>
        </main>
      </div>
    </section>
  )
}

export default Login
