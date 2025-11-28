import Navbar from '../components/Navbar.jsx'
import WallPreview from '../components/Wallpreview.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'

function Home(){
return(
<div className="home-container">

      <h1 style={{ fontSize: "40px", padding: "20px" }}>
        Home is rendering properly
      </h1>

  <Navbar />

  <section className="hero-section">
  <div className="wall-preview-wrapper">
    <WallPreview />
    <button className="explore-button">explore wall →</button>
  </div>
  </section>


  <section className="feature-section">
    <Card />
  </section>

  <Footer />

</div>
  );
}

export default Home;
