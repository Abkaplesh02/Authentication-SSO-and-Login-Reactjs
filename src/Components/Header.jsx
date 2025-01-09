import { useSelector } from "react-redux";
import { IMG_LOGO } from "../utils/constants";

const Header =()=>{

    
    return (
        <div className="flex  items-center"> 
            <img className="w-24 cursor-pointer" src={IMG_LOGO}/>
            
        </div>
    )
}

export default Header;