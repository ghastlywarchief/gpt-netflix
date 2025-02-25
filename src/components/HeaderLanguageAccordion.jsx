import supportedLanguages from "../utils/supportedLanguages";
import { useDispatch, useSelector } from "react-redux";
import { changePageLanguage } from "../utils/storeutils/slices/configSlice";

const HeaderLanguageAccordion = () => {

    const dispatch = useDispatch();
    const currLang = useSelector(store => store.appConfig.lang);

    const handleChange = (e) => {
        dispatch(changePageLanguage(e.target.value));
    }

    return (

        <select onChange={handleChange} value={currLang} className="h-12 m-2 rounded-md px-6 bg-black text-white border border-white font-bold">
            {supportedLanguages.map((lang) => (<option key={lang.code} value={lang.code} className="bg-white text-black">{lang.name}</option>))}
        </select>
        
    )
}

export default HeaderLanguageAccordion;