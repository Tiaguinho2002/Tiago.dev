import './projects.css'


function Projects () {

    return (
        
        <main className='Container'>
        <div id="linha"></div>
        <h1 id='bem-vindo'>Meus Projetos</h1>

        <div className='informations'> 
            <h2>Projetos pessoais</h2>
            <h2 className='subTitle'>Website - [Você está aqui!]</h2>
            <p>Este é um dos meus projetos mais recentes. Eu decidi criar um site para que eu pudesse compartilhar meus conhecimentos e experiências com outras pessoas, além de ser um ótimo lugar para eu guardar meus projetos e links úteis..</p>
            
            <h2 className='subTitle'> Ladding Page Freelancers</h2>
            <p>Projeto de uma pagina basica Estática, apenas com HTML e CSS Basicamente, um dos meus primeiros projetos que fiz para praticar, ficou muito bonito e agradavel de se ver, e mostra muito do começo da minha caminhada.</p>

            <h2 className='subTitle'>Projeto TO DO LIST</h2>
            <p>Projeto para praticar meus conhecimentos em puro JS Vanilla.</p>
        </div>
      </main>
    )
}

export default Projects