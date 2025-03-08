import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchoolGet from "./components/School-get";
import Home from "./components/Home";
import CreateSchool from "./components/CreateSchool";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<SchoolGet />} />
        <Route path="/create" element={<CreateSchool/>} />
       
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
