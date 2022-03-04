import './App.css';
import Menu from "./components/Menu/Menu";
import SecondaryMenu from "./components/SecondaryMenu/SecondaryMenu";
import Crousel from "./components/Crousel/Crousel";
import Features from "./components/Features/Features";
import Bestpoints from './components/Bestpoints/Bestpoints';
import HomeProducts from './components/HomeProducts/HomeProducts';
import Footer from './components/Footer/Footer';
import MemberCard from './components/MemberCard/MemberCard';

function App() {
  return (
    <div className="App">
      <Menu />
      <SecondaryMenu />
      <Crousel />
      <Bestpoints />
      <HomeProducts />
      <MemberCard />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
