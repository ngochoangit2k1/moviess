import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";

import "./App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";


function App() {
  return (
    <BrowserRouter> 
    <Header />
    
    <div className="app">
      <Container>
        <Routes>
        <Route path="/"  element={<Trending />} exact/>
          
          <Route path="/Series" element={<Series/>}/>
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/Search" element={Search}/>
        </Routes>
      </Container>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
