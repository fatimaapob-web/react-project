import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>

            <div>
                الشعار
            </div>

            <ul>
                
                <li><Link to="/environmental-awareness">التوعية البيئية</Link></li>
                <li><Link to="/about-project">عن المشروع</Link></li>
                <li><Link to="/contact-us">تواصل معنا</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;
