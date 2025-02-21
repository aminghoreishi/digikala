import NavbarAd from "./Header/NavbarAd/NavbarAd";
import Navbar from "./Header/Navbar/Navbar";
import Header from "./Header/Header";
import Category from "./Main/Category/Category";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <NavbarAd />
      <Navbar></Navbar>
      <Header/>
      <Category/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
