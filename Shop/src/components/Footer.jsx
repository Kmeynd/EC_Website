import './Footer.css'
import Insta from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Phone from '../assets/telephone.png'
import Mail from '../assets/mail.png'

function Footer(){
    
    return(
        <div className="FooterContainer">
            <div className="Footer">
                <div className="Contact">
                    <h2>Contact</h2>
                    <div><img src={Phone} alt="Phone" /><p>+1212341234</p></div>
                    <div><img src={Mail} alt="Mail" /><a href="">shop@gmail.com</a></div>
                    <h2>Social Media</h2>
                    <div className='Sns'><img src={Insta} alt="SNS" /><img src={Twitter} alt="SNS" /><img src={Facebook} alt="SNS" /></div>
                </div>
                <div className="About Us">
                    <h2>About Us</h2>
                    <a href="">Services</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of service</a>
                </div>
                <div className="Product">
                    <h2>Product</h2>
                    <a href="">Categories</a>
                    <a href="">New Arrival</a>
                    <a href="">Features</a>
                    <a href="">Discount</a>
                    <a href="">Special Offer</a>
                </div>
                <div className="Newsletter">
                    <h2>Newsletter</h2>
                    <p>Drop your email below to get update, promotions, coupons, and more!</p>
                    <div><input type="text" placeholder="Enter your email" /><button>Send</button></div>
                </div>
            </div>
            <div className="PersoInfo">
                <p>Copyright © 2025 - All right reserved to Kevin Meynard</p>
            </div>
            

        </div>
    )

}

export default Footer