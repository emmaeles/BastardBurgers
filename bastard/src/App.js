import image from './images/Bastardburgers.jpg'
import imageBurger from './images/burger.jpg'
import imageSide from './images/Pommes.png'
import imageDrink from './images/pepsi.png'
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
  ['p1', { name: 'Cheese', price: 15, image: cheese, amount: 0 }],
  ['p2', { name: 'Meat Patty', price: 45, image: meatPatty, amount: 0 }],
  ['p3', { name: 'Bacon', price: 20, image: bacon, amount: 0  }],
  ['p4', { name: 'Jalapeños', price: 10, image: jalapenos, amount: 0  }]
])
const sides = new Map([
  ['s1', { name: 'Shack Fries', price: 0, image: shackFries, amount: 0  }],
  ['s2', { name: 'Sweet Potato Fries', price: 10, image: sweetPotato, amount: 0  }],
  ['s3', { name: 'Animal Style Fries', price: 39, image: animalStyle, amount: 0  }]
])
const drinks = new Map([
  ['d1', { name: 'Pepsi', price: 0, image: pepsi, amount: 0  }],
  ['d2', { name: 'Pepsi Max', price: 0, image: pepsiMax, amount: 0  }],
  ['d3', { name: '7up Free', price: 0, image: sevenUP, amount: 0  }]
]);

const list = [addProduct, sides, drinks]



function getProduct(id) {
  return addProduct.get(id);
}

function ProductItem({ id }) {
  const [products, setProducts] = useState(addProduct);

  const product = getProduct(id);

  const adjustProduct = (change) => {
    product.amount += change
    const updatedProduct = { ...product, amount: product.amount + change };
    const updatedProducts = new Map(products);
    updatedProducts.set(id, updatedProduct);
    setProducts(updatedProducts);
    console.log(product.name, product.amount)
    
  }

  // const totalAmount = () => {

  //   const price = cart.map(a => {
  //     return a.amount * (getProduct(a.id).price)
  //   })

  //   return price.reduce((a, b) => { return a + b })
  // }

  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={product.image} className="product-image" />
        <span>{product.name}</span>
      </div>
      <div>
        +{product.price}
        <div className="col-3 d-flex justify-content-between">
          <button disabled={product.amount === 0} onClick={() => adjustProduct(-1)} type="button" className="btn btn-dark btn-add text-center">-</button>
          <div className="px-2 align-self-center">{product.amount}</div>
          <button disabled={product.amount === 2} onClick={() => adjustProduct(1)} type="button" className="btn btn-dark btn-add text-center">+</button>
        </div>
      </div>
    </div>
  );
}

function getSides(id) {
  return sides.get(id);
}

function SidesItem({ id }) {
  const side = getSides(id);

  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={side.image} className="product-image" />
        <span className="ps-3">{side.name}</span>
      </div>
      <div>
        +{side.price}
        {/* <button type="button" className="btn btn-dark btn-add justify-content-between">+</button> */}

        <div className="form-check">
          <input className="form-check-input btn-dark btn-add text-center"
            type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        </div>

      </div>
    </div>
  );
}


function getDrinks(id) {
  return drinks.get(id);
}

function DrinksItem({ id }) {
  const drink = getDrinks(id);

  return (
    <div className='d-flex justify-content-between border-bottom border-secondary'>
      <div>
        <img src={drink.image} className="product-image" />
        <span className="ps-3">{drink.name}</span>
      </div>
      <div>
        +{drink.price} kr

        <div className="form-check">
          <input className="form-check-input btn-dark btn-add text-center"
            type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
        </div>

        {/* <button onClick={() => props.adjustAmount(props.id, -1)} disabled={props.amount === 0} className="btn btn-primary btn-sm">-</button>
          <div className="px-2 align-self-center">{props.amount}</div>
          <button onClick={() => props.adjustAmount(props.id, 1)} disabled={props.amount === maxNoOfProducts} className="btn btn-primary btn-sm">+</button> */}

      </div>
    </div>
  );
}

function App() {

  const [cart, setCart] = useState([
    { id: "p1", amount: 0 },
    { id: "p2", amount: 0 },
    { id: "p3", amount: 0 },
    { id: "p4", amount: 0 },
    { id: "s1", amount: 0 },
    { id: "s2", amount: 0 },
    { id: "s3", amount: 0 },
    { id: "d1", amount: 0 },
    { id: "d2", amount: 0 },
    { id: "d3", amount: 0 },
  ])

  

  return (
    <article>


      <div className="head">

        <div className="caprasimo"><h1>PINEAPPLE EXPRESS MEAL</h1>
          {/* {totalAmount()} kr */}
          <div className="sidebar">

            <img className='logo' src={image} />

          </div>


        </div>

      </div>

      <div className="container text-center justify-content-evenly menu row ">
        {/* <div class="row"> */}
        <div className="col">
          <img src={imageBurger} className="bigMenuImages" />
          <h2>Add</h2>
          {Array.from(addProduct.keys()).map((key) => (
            <ProductItem key={key} id={key} />
          ))}
        </div>
        <div className="col">
          <img src={imageSide} className="bigMenuImages" />
          <h2>Choose your Side</h2>
          {Array.from(sides.keys()).map((key) => (
            <SidesItem key={key} id={key} />
          ))}
        </div>
        <div className="col">
          <img src={imageDrink} className="bigMenuImages" />
          <h2>Choose Your Drink</h2>
          {Array.from(drinks.keys()).map((key) => (
            <DrinksItem key={key} id={key} />
          ))}

        </div>
        {/* </div> */}
      </div>

    </article>

  );
}

export default App;
