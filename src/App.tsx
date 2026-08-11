import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";


const App = () => {
  return (
    <>
    <Header/>
    <main style={{ flex: 1}}>
      <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/cart" element = {<Cart/>} />
      </Routes>
    </main>
    </>
  );
};
export default App;