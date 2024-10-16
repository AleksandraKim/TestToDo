import React,{useState,useEffect} from "react";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Loader from "./Components/Loader/Loader";
import './App.css';


function App() {
const [showImg,setShowImg]=useState<boolean>(true)
const [theme, setTheme] = useState<string>('light');

useEffect(()=>{
    setTimeout(()=>{
       setShowImg(false)
    },1500)
},[])

const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
};

return   (<div className={`app ${theme}`}>
              {showImg?<Loader/>:
                       <div className="mainPage_test-body">
                          <Header toggleTheme={toggleTheme} theme={theme}/>
                          <Main/>
                       </div>}
          </div>);
}

export default App;
