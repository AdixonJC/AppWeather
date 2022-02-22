import Sun from "../giftsBackgrounds/Sun.mp4"
import Moon from "../giftsBackgrounds/Moon.mp4"
import FewCloudsD from "../giftsBackgrounds/FewCloudsD.mp4"
import FewCloudsN from "../giftsBackgrounds/FewCloudsN.mp4"
import ScatteredD from "../giftsBackgrounds/ScatteredD.mp4"
import ScatteredN from "../giftsBackgrounds/ScatteredN.mp4"
import BrokenCloudsD from "../giftsBackgrounds/BrokenCloudsD.mp4"
import BrokenCloudsN from "../giftsBackgrounds/BrokenCloudsN.mp4"
import ElectricStormD from "../giftsBackgrounds/ElectricStormD.mp4"
import ElectricStormN from "../giftsBackgrounds/ElectricStormN.mp4"
import ShoweRainD from "../giftsBackgrounds/ShowerRainD.mp4"
import ShoweRainN from "../giftsBackgrounds/ShowerRainN.mp4"
import RainD from "../giftsBackgrounds/RainD.mp4"
import RainN from "../giftsBackgrounds/RainN.mp4"
import SnowD from "../giftsBackgrounds/SnowD.mp4"
import SnowN from "../giftsBackgrounds/SnowN.mp4"
import MistD from "../giftsBackgrounds/MistD.mp4"
import MistN from "../giftsBackgrounds/MistN.mp4"

const handleBackgroundChange = (ico , setBackGroundChange) =>  {
    switch(ico){
     case "01d": 
    return  setBackGroundChange(Sun);
     
   case "01n":
    return  setBackGroundChange(Moon);
      
   case "02d":
    return  setBackGroundChange(FewCloudsD);
      
   case "02n":
    return  setBackGroundChange(FewCloudsN);
      
   case "03d":
      return setBackGroundChange(ScatteredD);
   case "03n":
    return  setBackGroundChange(ScatteredN);
      
   case "04d":
      return setBackGroundChange(BrokenCloudsD);
   case "04n":
    return  setBackGroundChange(BrokenCloudsN);
      
   case "09d":
      return setBackGroundChange(ShoweRainD); 
   case "09n":
    return  setBackGroundChange(ShoweRainN);
      
   case "10d":
    return  setBackGroundChange(RainD);
      
   case "10n":
    return  setBackGroundChange(RainN);
      
   case "11d":
      return setBackGroundChange(ElectricStormD);
   case "11n":
    return  setBackGroundChange(ElectricStormN);
      
   case "13d":
      return setBackGroundChange(SnowD); 
   case "13n":
    return  setBackGroundChange(SnowN);
      
   case "50d":
      return setBackGroundChange(MistD);
   case "50n" :
    return setBackGroundChange(MistN);
     
 
     default:
       setBackGroundChange("hola desde el default")
     }  
    }

    export default handleBackgroundChange 