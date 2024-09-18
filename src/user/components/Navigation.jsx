import React, { useState } from 'react';
import { cart, logo } from '../../assets';
import { Link } from 'react-router-dom';

function Navigation() {
    const [inputValue, setInputValue] = useState('');
    const [storedData, setStoredData] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchButtonClick = () => {
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

    const handleAddToCart = () => {
        if (storedData) {
            setCartItems([...cartItems, storedData]);
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
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
                    <h2>Shopping Cart</h2>
                    <div className="cart-items text-white">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {storedData && (
                <div className="stored-data-container text-white">
                    <div className='border border-white p-4 w-[100%] rounded flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold'>Product title :{storedData.title}</h3>
                            <p className='font-semibold'>Product description :{storedData.description}</p>
                            <p className='font-semibold'>Price: {storedData.price}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {storedData.media && <img className='object-cover' width={100} height={300} src={storedData.media} alt="Product" />}
                            <button className='border-2 border-white' onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navigation;
