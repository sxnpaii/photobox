// sources
import './App.scss';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// components
import Header from './components/Header';
import Slider from './components/swiper';
import Experience from "./components/Experience";
import Works from './components/Works';
import Footer from './components/Footer';
function App() {
  return (
    // aos default settings 
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 700,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',

    }),
    <div className="App">
      <Header data-aos="zoom-out" />
      <section className="App-hero"data-aos="fade-zoom-in" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="col" >
              <h1 className="display-1" data-aos="fade-up">BRUCE WAYNE</h1>
              <h6 className='display-6' data-aos="fade-up">PHOTOGRAPHER</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="slider " data-aos="fade-zoom-in">
        <div className="container">
          <div className="row">
            <div className="col">
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <section className='Exp'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="subHeader" data-aos="fade-up">
                <b className='h5'>BASED IN GOTHAM  </b>
                <b className='h5'>AVAILABLE WORLDWIDE</b>
                <b className='h5'>UTC+7</b>
              </div>
              <Experience />
            </div>
          </div>
        </div>
      </section>
      <section className='Works'>
        <div className="container">
          <div className="row">
            <div className="col" >
              <h2 className='display-2' data-aos="fade-up">Selected Works</h2>
              <Works
                works1Descp="downtown-dubai-at-dawn-united-arab-emirates"
                works2Descp="roe-deer-portrait-in-the-winter-forest"
                works3Descp="little-girl-having-fun-with-drinking-water-at-stre"
                works4Descp="greenland-natura-landscape"
                works5Descp="lit-up-dome-tent-aurora-borealis-in-background"
                works6Descp="a-little-orange-bug-on-a-flower"
                works7Descp="baby-birds"
                works8Descp="a-side-profile-of-a-leopard-s-head"
                works9Descp="top-aerial-view-of-famous-snake-road-near-passo"
              />
              <button className="btn btn-light" data-aos="fade-up">SEE ALL WORKS <i class="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
        </div>
      </section>
      <section className='withMe' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="frame">
                <h2 className="display-2" data-aos="fade-down" data-aos-duration="1000">
                  Let’s do something amazing together!
                </h2>
                <button className="btn btn-dark" data-aos="fade-down" data-aos-delay="150"> WORK WITH ME <i class="ri-arrow-right-s-line"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <Footer />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;


