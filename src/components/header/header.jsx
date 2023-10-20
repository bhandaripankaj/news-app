import './index.css';
import { Link } from 'react-router-dom'; // If using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
      <div className="App-header">
        <header className="header">
      <div className="company-icon">
        <img src="news-logo.png" alt="Company Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Sports</li>
          <li>Health</li>
          <li>Travel</li>
          <li>Culture</li>
        </ul>
      </nav>
      <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search..." />
      </div>
    </header>
      </div>
    );
  }
  
  export default Header;