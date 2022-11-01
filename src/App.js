// sources
import './App.css';
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
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    }),
    <div className="App">
      <Header />
      <section className="App-hero" >
        <div className="container">
          <div className="row">
            <div className="col" >
              <h1 className="display-1">BRUCE WAYNE</h1>
              <h6 className='display-6'>PHOTOGRAPHER</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
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
              <div className="subHeader">
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
              <h2 className='display-2'>Selected Works</h2>
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
              <button className="btn btn-light">SEE ALL WORKS <i class="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
        </div>
      </section>
      <section className='withMe'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="frame">
                <h2 className="display-2">
                  Let’s do something amazing together!
                </h2>
                <button className="btn btn-dark"> WORK WITH ME <i class="ri-arrow-right-s-line"></i></button>
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


