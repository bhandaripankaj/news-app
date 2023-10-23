import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faLinkedin,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div style={{backgroundColor:"#6366f1",paddingBottom:"10px"}}>
      <div className="App-footer">
          <div>
            <h4>Contact Support</h4>
             <ul>
             <li>news.support@gmail.com</li>
             <li>+01-254785</li>
             <li>96351478520</li>
             </ul>
         </div>  
         <div>
            <h4>Company</h4>
            <ul>
             <li>About</li>
             <li>Leadership</li>
             <li>Blog</li>
             <li>Careers</li>
             <li>Referral Program</li>
             <li>Community</li>
            </ul>
         </div> 
         <div>
            <h4>Legal</h4>
            <ul>
             <li>Legal Notice</li>
             <li>Privacy Policy</li>
             <li>Terms of Use</li>
             <li>DPA</li>
             <li>DMCA Policy</li>
             <li>ERDF Support</li>
            </ul>
         </div> 
         <div>
            <h4>Follow US</h4>
            <div className='follow-us'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
         </div> 
        </div>
            <span>© 2023 newws.com, Times Internet Limited. All rights reserved | The New India | My Times</span>
      </div>
    );
  }
  
  export default Footer;