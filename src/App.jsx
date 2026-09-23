import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Link,  Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="App" style={{backgroundColor:'#1A1A2E'
      , color:"white",
      fontFamily:"monospace"
    }}>
 
<BrowserRouter>
<Routes>

  <Route path="/" element={<Layout/>}>

  <Route path="/" element={<Home/>}/>  
  <Route path="/Contact" element={<Contact/>}/>  



</Route>
</Routes>

</BrowserRouter>

  
 

    </div>
  );
}

export default App;
