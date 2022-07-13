import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p> Desenvovido por <a href="https://www.linkedin.com/in/diego-pereira-do-carmo/"> @Diego Pereira do Carmo
                </a>
                </p>
            </div>
        </header>

    )
}

export default Header