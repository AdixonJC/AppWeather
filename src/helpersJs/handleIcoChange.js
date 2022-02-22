const handleIcoChange = (ico , setIcon) =>  {
    switch(ico){
     case "01d": 
    return  setIcon("fas fa-sun");
     
   case "01n":
    return  setIcon("fas fa-moon");
      
   case "02d":
    return  setIcon("fas fa-cloud-sun");
      
   case "02n":
    return  setIcon("fas fa-cloud-moon");
      
   case "03d":
      return setIcon("fas fa-cloud");
   case "03n":
    return  setIcon("fas fa-cloud");
      
   case "04d":
      return setIcon("fas fa-cloud");
   case "04n":
    return  setIcon("fas fa-cloud");
      
   case "09d":
      return setIcon("fas fa-cloud-showers-heavy"); 
   case "09n":
    return  setIcon("fas fa-cloud-showers-heavy");
      
   case "10d":
    return  setIcon("fas fa-cloud-sun-rain");
      
   case "10n":
    return  setIcon("fas fa-cloud-moon-rain");
      
   case "11d":
      return setIcon("fas fa-poo-storm");
   case "11n":
    return  setIcon("fas fa-poo-storm");
      
   case "13d":
      return setIcon("far fa-snowflake"); 
   case "13n":
    return  setIcon("far fa-snowflake");
      
   case "50d":
      return setIcon("fas fa-smog");
   case "50n" :
    return setIcon("fas fa-smog");
     
 
     default:
       setIcon("hola desde el default")
     }  
    }

    export default handleIcoChange 