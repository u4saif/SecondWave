import './App.css';
import NavBar from './AppComponents/Navbar';
import {Footer} from './AppComponents/Footer';
import {HomeRightSection} from './AppComponents/HomeRightSection';
import {HomeLeftSection} from './AppComponents/HomeLeftSection';
function App() {
  return (
    <>
    <NavBar/>
    <HomeRightSection/>
    <HomeLeftSection/>
    <Footer></Footer>
    </>
  );
}

export default App;
