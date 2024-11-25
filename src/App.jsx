import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ProyectCard from './componentes/ProyectCard/ProyectCard';
function App() {
  return (
    <div className="App">
      <div className='PortfolioContainer'>

        <div className='imgPerfilContainer'><img src="./Perfil.png"  /></div>
        <p className='txtNombre'>Daniel Trejo Velázquez</p>
        <p className='txtInfo'>Actualmente soy estudiante de <span className='careerName'>Ingeniería en Desarrollo y Gestión de Software</span>.
          He tenido la oportunidad de realizar practicas profesionales en el sector empresarial, lo que ha impulsado intensamente mi desarrollo como profesionista, 
          y desarrollando habilidades como la resiliencia, y el trabajo en equipo.
        </p>
        <a href="./DanielCurriculum.pdf" target='blank' className='btnCV'>Visualizar CV</a>
        <div className='ExperienceContainer'>
            <p>EXPERIENCIA CON</p>
          <div className='toolsContainer'>
            <img src="./react-brands-solid.svg" alt="" />
            <img src="./nextIcon.svg" alt="" />
            <img src="./jsIcon.svg" alt="" />
            <img src="/htmlIcon.svg" alt="" />
            <img src="/cssIcon.svg" alt="" />
            <img src="/mongoIcon.svg" alt="" />
          </div>
        </div>

        <div className='ProyectsContainer'>
          <p className='ProjectsTitle'>PROYECTOS</p>
          <div className='cardsContainer'>
          <ProyectCard imagen="./Proyecto1.png" proyectName="Editor de Playeras" link="https://personal-wear.vercel.app/" linkRepo="https://github.com/DNS223/PersonalWear"/>
          <ProyectCard imagen="./Proyecto2.png" proyectName="Generdor de Paletas" link="https://color-pallete-generator-omega.vercel.app/" linkRepo="https://github.com/DNS223/Color-Pallete-Generator"/>
          <ProyectCard imagen="./Proyecto3.png" proyectName="Clon de Traductor" link="https://google-translate-clone-tan.vercel.app/" linkRepo="https://github.com/DNS223/Google-Translate-Clone"/>
          </div>
          
        </div>

        <div className='experienciaContainer'>
          <p className='ExperienciaTitle'>EXPERIENCIA</p>
          <div className='cadExperiencia'>
            <div className='headerCard'>
              <p><img src="./Logo-vasa.png" alt="" className='logoEmpresa'/> Pasante en Corporativo Vasa</p>
              <p>Mayo 2024 - Agosto 2024</p>
            </div>
            <p className="txtInfo">Realicé prácticas profesionales en el Corporativo Vasa. Desarrollé un sistema de gestión de Recursos Humanos. Las herramientas que utilicé fueron 
              JavaScript con Next.js para la parte del Front-end, Node.js para ejecutar un servidor y express.js manejar las peticiones del backend, CSS para los estilos,
              y MongoDB para la base de datos, además utilicé GitHub para el manejo de versiones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
