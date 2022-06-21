import logo from '../assets/images/my-finance-logo.png';
import './Footer.css'; 

function Footer(){
    return (
        <div className = 'wrapper-footer'>
            <div className = 'image-footer'>
                <img className = 'footer-image' src = {logo} alt = 'footer logo'/>
            </div>
            <p className = 'made-with-love'>
                Made with 🖤 in Brazil
            </p>
        </div>
    )
}

export default Footer