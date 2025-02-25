import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderLanguageAccordion from "./HeaderLanguageAccordion";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/storeutils/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { setAISearchToggle } from "../utils/storeutils/slices/aiSearchToggleSlice";

const Header = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const aiSearchClicked = useSelector(store => store.aiSearch.aiSearchToggle);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user){
            const {uid, displayName, email } = user;
            dispatch(addUser({uid : uid, email: email, name: displayName}));
            setIsUserLoggedIn(true);
            navigate("/browse");
          }
          else{
            dispatch(removeUser());
            navigate("/");
            setIsUserLoggedIn(false);
          }
      });

      return () => {
        unsubscribe();
      }
    }, []);

    const handleAISearchClick = () => {
      dispatch(setAISearchToggle());
    }

    const handleClick = () => {
        if(isUserLoggedIn)
        {
            signOut(auth).then(() => {})
            .catch((error) => {console.log(error.code + " : " + error.message);})
        }
    }
    
    return (
        <div className="flex justify-between bg-gradient-to-t from-transparent to-black px-[5%] absolute z-10 w-screen">
            <div>
                {(!isUserLoggedIn) ? <Link to="/"><img src={LOGO_URL} alt="" className="w-1/4 bg-transparent" /></Link> : <Link to="/browse"><img src={LOGO_URL} alt="" className="w-1/4 bg-transparent" /></Link>}
            </div>
            { (location.pathname !== "/login") && <div className="p-2 m-2 flex justify-around">
                <HeaderLanguageAccordion />
                {(isUserLoggedIn) && <button className="bg-red-700 text-white rounded-md p-2 m-2 font-bold w-28 h-12" onClick={handleAISearchClick}>{ aiSearchClicked ? "Homepage" : "AI Search"}</button>}
                <Link to="/login"><button className="bg-red-700 text-white rounded-md p-2 m-2 font-bold w-28 h-12" onClick={handleClick}>{(!isUserLoggedIn) ? "Sign In" : "Sign Out"}</button></Link>
            </div>}
        </div>
    )
}

export default Header;