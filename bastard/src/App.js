import image from './images/Bastardburgers.jpg'
import imageBurger from './images/burger.jpg'
import imageSide from './images/Pommes.png'
import imageDrink from './images/pepsi.png'
import { useState} from 'react'

const addProduct = new Map([
  ['p1', { name: 'Cheese', price: 15 }],
  ['p2', { name: 'Meat Patty', price: 45 }],
  ['p3', { name: 'Bacon', price: 20 }]
])
const sides = new Map([
  ['s1', { name: 'Shack Fries', price: 0 }],
  ['s2', { name: 'Sweet Potato Fries', price: 10 }],
  ['s3', { name: 'Animal Style Fries', price: 39 }]
])
const drinks = new Map([
  ['d1', { name: 'Pepsi', price: 0 }],
  ['d2', { name: 'Pepsi Max', price: 0 }],
  ['d3', { name: '7up Free', price: 0 }]
])

const list =[addProduct, sides, drinks]



function getProduct(id) {
  return addProduct.get(id)
}

function ProductItem(props) {
  const addProduct = getProduct(props.id)

  return (
    <div className='d-flex justify-content-between'>
      {props.productClass.name} +{props.productClass.price}
      <button type="button" class="btn btn-dark btn-add justify-content-between">+</button>      
    </div>
    
  )

}

function getProduct(id) {
  return addProduct.get(id)
}

function ProductItem(props) {

  const addProduct = getProduct(props.id)

  return (
    <div className='d-flex justify-content-between'>
      {props.productClass.name} +{props.productClass.price}
      <button type="button" class="btn btn-dark btn-add justify-content-between">+</button>      
    </div>
    
  )
}

function App() {

  const [cart, setCart] = useState([
    { id: "p1", amount: 0, productClass: addProduct },
    { id: "p2", amount: 0, productClass: addProduct },
    { id: "p3", amount: 0, productClass: addProduct}, 
    // { id: "s1", amount: 0 },
    // { id: "s2", amount: 0 },
    // { id: "s3", amount: 0 },
    // { id: "d1", amount: 0 },
    // { id: "d2", amount: 0 },
    // { id: "d3", amount: 0 },
  ])

  return (
    <article>


      <div className="head">

        <div className="caprasimo"><h1>PINEAPPLE EXPRESS MEAL</h1>

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
          {cart.map(item => <ProductItem key={item.id} id={item.id} amount={item.amount} productClass= {item.productClass}/>)}
        </div>
        <div className="col">
          <img src={imageSide} className="bigMenuImages" />
          <h2>Choose your Side</h2>
          {cart.map(item => <ProductItem key={item.id} id={item.id} amount={item.amount}/>)}
        </div>
        <div className="col">
          <img src={imageDrink} className="bigMenuImages" />
          <h2>Choose Your Drink</h2>

        </div>
        {/* </div> */}
      </div>

    </article>

  );
}

export default App;
