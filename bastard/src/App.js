import image from './images/Bastardburgers.jpg'
import imageBurger from './images/burger.jpg'
import imageSide from './images/Pommes.png'
import imageDrink from './images/pepsi.png'


function App() {
  return (
    <article>


      <div className="head">

        <div className="caprasimo"><h1>PINEAPPLE EXPRESS MEAL</h1>

          <div className="sidebar">

            <img className='logo' src={image} />

          </div>


        </div>

      </div>

      <div className="container text-center justify-content-evenly menu">
        <div class="row">
          <div className="col">
            <img src={imageBurger} className="bigMenuImages" />
            <h2>Add</h2>
          </div>
          <div className="col">
            <img src={imageSide} className="bigMenuImages" />
            <h2>Choose your Side</h2>

          </div>
          <div className="col">
            <img src={imageDrink} className="bigMenuImages" />
            <h2>Choose Your Drink</h2>

          </div>
        </div>
      </div>

    </article>

  );
}

export default App;
