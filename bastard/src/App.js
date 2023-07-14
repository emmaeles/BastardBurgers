import image from './images/Bastardburgers.jpg'
import imageBurger from './images/burger.jpg'
import imageSide1 from './images/Pommes.png'
import imageSide2 from './images/LargeSweetFries.png'
import imageSide3 from './images/LargeAnimalFries.png'
import drink1 from './images/pepsi.png'
import drink2 from './images/LargePepsi.png'
import drink3 from './images/Large7Up.png'
import cheese from './images/cheese.png'
import meatPatty from './images/meat patty.png'
import bacon from './images/bacon.png'
import jalapenos from './images/Jalapenos.png'
import shackFries from './images/ShackFries.png'
import sweetPotato from './images/SweetPotatoFries.png'
import animalStyle from './images/AnimalStyleFries.png'
import pepsi from './images/litenPepsi.png'
import pepsiMax from './images/PepsiMax.png'
import sevenUP from './images/7UPFree.png'





import { useState } from 'react'

const addProduct = new Map([
  ['p1', { name: 'Cheese', price: 15, image: cheese }],
  ['p2', { name: 'Meat Patty', price: 45, image: meatPatty }],
  ['p3', { name: 'Bacon', price: 20, image: bacon }],
  ['p4', { name: 'Jalapeños', price: 10, image: jalapenos }]
])
const sides = new Map([
  ['s1', { name: 'Shack Fries', price: 0, image: shackFries }],
  ['s2', { name: 'Sweet Potato Fries', price: 10, image: sweetPotato }],
  ['s3', { name: 'Animal Style Fries', price: 39, image: animalStyle }]
])
const drinks = new Map([
  ['d1', { name: 'Pepsi', price: 0, image: pepsi }],
  ['d2', { name: 'Pepsi Max', price: 0, image: pepsiMax }],
  ['d3', { name: '7up Free', price: 0, image: sevenUP }]
]);


function getProduct(id) {
  return addProduct.get(id);
}

function ProductItem(props) {

  const product = getProduct(props.id);


  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={product.image} className="product-image" />
        <span>{product.name}</span>
      </div>
      <div>
        +{product.price} kr
        <div className="col-3 d-flex justify-content-between">
          <button disabled={props.amount === 0} onClick={() => props.adjustProduct(props.id, -1)} type="button" className="btn btn-dark btn-add text-center">-</button>
          <div className="px-2 align-self-center">{props.amount}</div>
          <button disabled={props.amount === 2} onClick={() => props.adjustProduct(props.id, 1)} type="button" className="btn btn-dark btn-add text-center">+</button>
        </div>
      </div>
    </div>
  );
}

function getSides(id) {
  return sides.get(id);
}

function SidesItem(props) {
  const side = getSides(props.id);


  const [isChecked, setIsChecked] = useState(false);
  const [previousChecked, setPreviousChecked] = useState(false);

  const handleRadioChange = () => {
    if (previousChecked) {
      console.log(props.id);
      props.adjustProduct(props.id, -1);
      setIsChecked(!isChecked);
    }
    if (!previousChecked) {
      console.log(props.id);
      props.adjustProduct(props.id, 1);
      setPreviousChecked(isChecked);
    }
  }
  
  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={side.image} className="product-image" />
        <span className="ps-3">{side.name}</span>
      </div>
      <div>
        +{side.price} kr

        <div className="form-check">
          <input onChange={handleRadioChange} className="form-check-input btn-dark btn-add text-center"
            type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        </div>

      </div>
    </div>
  );
}


function getDrinks(id) {
  return drinks.get(id);
}

function DrinksItem(props) {
  const drink = getDrinks(props.id);

  const [isChecked, setIsChecked] = useState(false);
  const [previousChecked, setPreviousChecked] = useState(false);

  const handleRadioChange = () => {
    if (previousChecked) {
      console.log(props.id);
      props.adjustProduct(props.id, -1);
      setIsChecked(!isChecked);
    }
    if (!previousChecked) {
      console.log(props.id);
      props.adjustProduct(props.id, 1);
      setPreviousChecked(isChecked);
    }
  }

  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={drink.image} className="product-image" />
        <span className="ps-3">{drink.name}</span>
      </div>
      <div>
        +{drink.price} kr

        <div className="form-check">
          <input onChange={handleRadioChange} className="form-check-input btn-dark btn-add text-center"
            type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
        </div>
      </div>
    </div>
  );
}

function App() {

  const [cartProducts, setCartProducts] = useState([
    { id: "p1", amount: 0 },
    { id: "p2", amount: 0 },
    { id: "p3", amount: 0 },
    { id: "p4", amount: 0 }
  ])
  const [cartSides, setCartSides] = useState([
    { id: "s1", amount: 0 },
    { id: "s2", amount: 0 },
    { id: "s3", amount: 0 },
  ])
  const [cartDrinks, setCartDrinks] = useState([
    { id: "d1", amount: 0 },
    { id: "d2", amount: 0 },
    { id: "d3", amount: 0 },
  ])

  let imageSide = imageSide1

  const pickImageSide = () => {
    if (cartSides[0].amount === 1){
      imageSide = imageSide1
    }
    if (cartSides[1].amount === 1){
      imageSide = imageSide2
    }
    if (cartSides[2].amount === 1){
      imageSide = imageSide3
    }

    return(imageSide)
  }


  let imageDrink = drink1

  const pickImageDrink = () => {
    if (cartDrinks[0].amount === 1){
      imageDrink = drink1
    }
    if (cartDrinks[1].amount === 1){
      imageDrink = drink2
    }
    if (cartDrinks[2].amount === 1){
      imageDrink = drink3
    }

    return(imageDrink)
  }


  const adjustProduct = (id, change) => {

    const newState = cartProducts.map(obj => {
      if (obj.id === id) {
        return { ...obj, amount: obj.amount + change }
      }
      return obj
    })
    console.log(newState)

    setCartProducts(newState)

    if(id === "s1" || id === "s2" || id === "s3"){
      const newState2 = cartSides.map(obj => {
        if (obj.id === id) {
          return { ...obj, amount: obj.amount + change }
        }
        if (obj.id !== id && obj.amount > 0) {
          return { ...obj, amount: obj.amount - change }
        }
        return obj
      })
      console.log(newState2)
  
      setCartSides(newState2)

    }
    if(id === "d1" || id === "d2" || id === "d3"){
      const newState3 = cartDrinks.map(obj => {
        if (obj.id === id) {
          return { ...obj, amount: obj.amount + change }
        }
        if (obj.id !== id && obj.amount > 0) {
          return { ...obj, amount: obj.amount - change }
        }
        return obj
      })
      console.log(newState3)
  
      setCartDrinks(newState3)
    }

  }

  const totalAmount = () => {

    const priceTotal = 175

    const priceExtra = cartProducts.map(a => {
      return a.amount * (getProduct(a.id).price)
    }).reduce((a, b) => { return a + b })

    const priceExtraSides = cartSides.map(a => {
      return a.amount * (getSides(a.id).price)
    }).reduce((a, b) => { return a + b })


    return priceTotal + priceExtra + priceExtraSides
  }


  return (
    <article>


      <div className="head">

        <div className="caprasimo">
          <h1>PINEAPPLE EXPRESS MEAL</h1>
          <div className="sidebar">

            <img className='logo' src={image} />
            <h1 className="cart">&nbsp;{totalAmount()} kr</h1>

          </div>


        </div>

      </div>

      <div className="container text-center justify-content-evenly menu row ">
        <div className="col">
          <img src={imageBurger} className="bigMenuImages" />
          <p className="plus">+</p>
          <p className="plus2">+</p>
          <h2 className="caprasimo text-start pt-3">Add</h2>
          {cartProducts.map(i => <ProductItem adjustProduct={adjustProduct} key={i.id} id={i.id} amount={i.amount} />)}
        </div>
        <div className="col">
          <img src={pickImageSide()} className="bigMenuImages" />
          <h2 className="caprasimo text-start pt-3">Choose your Side</h2>
          {cartSides.map(i => <SidesItem adjustProduct={adjustProduct} key={i.id} id={i.id} amount={i.amount} />)}
        </div>
        <div className="col">
          <img src={pickImageDrink()} className="bigMenuImages" />
          <h2 className="caprasimo text-start pt-3">Choose Your Drink</h2>
          {cartDrinks.map(i => <DrinksItem adjustProduct={adjustProduct} key={i.id} id={i.id} amount={i.amount} />)}
        </div>
      </div>

    </article>

  );
}

export default App;
