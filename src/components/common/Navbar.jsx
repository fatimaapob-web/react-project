import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">

            <div className="logo">
                الشعار
            </div>

            <ul className="nav-links">
                
                <li className="nav-item">
                    <Link to="/environmental-awareness">التوعية البيئية</Link></li>
                <li className="nav-item">
                    <Link to="/about-project">عن المشروع</Link></li>
                <li className="nav-item">
                    <Link to="/contact-us">تواصل معنا</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;
