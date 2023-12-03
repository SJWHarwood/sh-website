import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => (
  <div className = 'nav-bar'>
    <Link className='logo' to="/">
      <img src={LogoS} alt="logo"/>
      <img className='sub-logo' src={LogoSubtitle} alt="Simon"/>
    </Link>
    <nav>
      <NavLink exact="True" activeclassName="active" to ="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

      </NavLink>
    </nav>
  </div>
)

export default Sidebar