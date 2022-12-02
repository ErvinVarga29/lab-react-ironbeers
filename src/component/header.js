import { Link } from "react-router-dom";
import homeIcon from "../assets/beers.png"

function Header(){
    return(
        <nav className="bg-primary d-flex justify-content-center">
            <Link to="/">
                <img src={homeIcon} alt="home icon" style={{height: 100}} className="p-3"/>
            </Link>  
        </nav>

    )
}

export default Header;