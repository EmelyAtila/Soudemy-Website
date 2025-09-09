import './index.css';
import NavbarHome from '../../components/NavbarHome';

const Home = () => {
  return (
    <div className="home-container">
      <NavbarHome/>
      <h2 className="home-title">Página Inicial</h2>
      <a href="/shop" className="home-btn">View More</a>
    </div>
  );
}

export default Home;
