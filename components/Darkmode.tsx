import { useEffect } from "react";
import * as DarkReader from "darkreader";



const DarkMode = () => {
    useEffect(() => {
      console.log(window);
      DarkReader.auto({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    }, []);
  
    return null;
  };
  
  export default DarkMode