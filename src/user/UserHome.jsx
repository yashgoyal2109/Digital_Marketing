import React, { useEffect } from 'react'
import { useState } from 'react'
import Navigation from './components/Navigation'
import { userbg, logo, minus } from '../assets'
import Circle from './components/Circle'
import { circleData } from '../constant'
import { Link } from 'react-router-dom'
import { cart } from '../assets'
import { plus } from '../assets'
import Footer from "../components/Footer.jsx"

function UserHome() {

  const [inputValue, setInputValue] = useState('');
  const [storedData, setStoredData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dis, setDis] = useState(false);
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setDis(true);
    const dataFromLocalStorage = localStorage.getItem('products');
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      const foundItem = parsedData.find(item => item.title === inputValue);
      if (foundItem) {
        setStoredData(foundItem);
      } else {
        setStoredData(null);
        console.log("No item found with the title:", inputValue);
      }
    } else {
      console.log("No data found in local storage for the key 'products'.");
    }
  };

  const subtract = (item) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.title === item.title) {
        return { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) };
      }
      return cartItem;
    });
  
    const filteredCartItems = updatedCartItems.filter(cartItem => cartItem.quantity > 0);
  
    setCartItems(filteredCartItems);
  };
  

  const add = (item) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.title === item.title) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };


  const handleAddToCart = () => {
    if (storedData) {
      const existingItemIndex = cartItems.findIndex(item => item.title === storedData.title);
      if (existingItemIndex !== -1) {
        // Item already exists in cart, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        // Item doesn't exist in cart, add it as a new item
        setCartItems([...cartItems, { ...storedData, quantity: 1 }]);
      }
    }
  };

  useEffect(() => {
    console.log(count)
  }, [count])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className='flex flex-col gap-20 bg-black'>
        {/* <Navigation></Navigation> */}
        <div className='bg-black text-white py-10 px-20'>
          <div className='flex justify-between'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <input
              type="text"
              className='w-[70%] text-black rounded-md font-semibold'
              placeholder='Search for Anything'
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className='bg-primary_blue px-10 rounded-xl' onClick={handleSearchButtonClick}>Search</button>
            <div className='border-2 rounded-curl p-5 flex items-center' onClick={toggleCart}>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        {isCartOpen && (
          <div className="cart-container text-white">
            <h1 className='text-[1.5rem]'>Shopping Cart</h1>
            <div className="cart-items p-3 flex flex-col gap-10 text-white">
              {cartItems.map((item, index) => (
                item.quantity > 0 && (
                  <div key={index} className="flex flex-col gap-4 cart-item">
                    {storedData.media && <img className='object-cover' width={100} height={300} src={item.media} alt="Product" />}
                    <h3>Product Title:-{item.title}</h3>
                    <div className='flex border-2 justify-around w-[15%]'>
                      <img src={plus} onClick={() => add(item)} alt="" width={16} />
                      <p className='p-2'>Quantity: {item.quantity}</p>
                      <img src={minus} alt="" width={16} onClick={() => subtract(item)} />
                    </div>
                    <p>Price: ${item.discountedPrice*item.quantity}</p>
                  </div>
                )
              ))}

            </div>
          </div>
        )}
        {storedData && (
          <div className="stored-data-container bg-black h-screen text-white">
            <div className='border border-white p-4 w-[100%] rounded flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold'>Product title :{storedData.title}</h3>
                <p className='font-semibold'>Product description :{storedData.description}</p>
                <p className='font-semibold'>Price: {`${!storedData.discountedPrice ? storedData.price :storedData.discountedPrice }`}</p>
              </div>
              <div className='flex flex-col gap-2'>
                {storedData.media && <img className='object-cover' width={100} height={300} src={storedData.media} alt="Product" />}
                <button className='border-2 border-white' onClick={handleAddToCart}>Add To Cart</button>
              </div>
            </div>
          </div>
        )}
        <div className={`${dis ? 'hidden' : 'block'} flex flex-col gap-10 `}>
          <img src={userbg} alt="" width={1600} />
          <div className='flex bg-black gap-20 px-20 font-bold text-[1.3rem]'>
            {circleData.map((content, index) => (
              <Circle key={index} title={content.title} img={content.img} />
            ))}
          </div>
        <Footer color="black"></Footer>
        </div >
      </div>

    </>
  )
}

export default UserHome