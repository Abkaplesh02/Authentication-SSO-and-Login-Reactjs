import { useSelector } from "react-redux";
import { IMG_LOGO, user } from "../utils/constants";

const Header =()=>{
    
    const selector=useSelector((store)=>store.user);


   

    return (
        <div className="flex justify-between items-center"> 

        <div className="flex justify-center items-center">
            <img className="w-24 cursor-pointer" src={IMG_LOGO}/>
            <h1 className="text-2xl"> {
                selector ? `Hey ${selector.displayName}`:""
                }</h1> 

</div>

<div className="pr-16">
    {
        selector && <img className="w-12 h-12 rounded-full" src={user}  />
    }
</div>
        </div>
    )
}

export default Header;


