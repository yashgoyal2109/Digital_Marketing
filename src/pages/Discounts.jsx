import React, { useState, useEffect } from 'react';
import DashNav from './components/DashNav';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddDiscount from './components/AddDiscount';

function Discounts() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [discountPercentage, setDiscountPercentage] = useState(0); // State to store the entered discount percentage

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    const handleClickToOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    const applyDiscount = () => {
        if (selectedProduct) {
            const updatedProducts = products.map(product => {
                if (product.title === selectedProduct.title) {
                    // Calculate the discounted price based on the entered discount percentage
                    const discountedPrice = product.price - (product.price * (discountPercentage / 100));
                    // Update the price in local storage
                    product.discountedPrice = discountedPrice;
                    localStorage.setItem('products', JSON.stringify(products));
                    return { ...product, discountedPrice }; // Update the product with the discounted price
                }
                return product;
            });
            setProducts(updatedProducts); // Update the products state with the updated product list
            setOpen(false); // Close the dialog after applying discount
        }
    };

    const handleDiscountChange = (e) => {
        const discount = parseFloat(e.target.value); // Parse the input value as a float
        if (!isNaN(discount)) {
            setDiscountPercentage(discount); // Update the discountPercentage state only if the input is a valid number
        }
    };

    return (
        <div className='bg-black h-screen text-white'>
            <DashNav />
            {products.length > 0 ? (
                <div className='mt-10'>
                    <h2 className='font-semibold text-[1.2rem] mb-4'>Saved Products</h2>
                    <div className='flex flex-wrap gap-4'>
                        {products.map((product, index) => (
                            <div key={index} className='border border-white p-4 w-[100%] rounded flex justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-semibold'>Product title :{product.title}</h3>
                                    <p className='font-semibold'>Product description :{product.description}</p>
                                    <p className='font-semibold'>Price: {product.price}</p>
                                    {product.discountedPrice && <p className='font-semibold'>Discounted Price: {product.discountedPrice}</p>}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {product.media && <img className='object-cover' width={100} height={300} src={product.media} alt="Product" />}
                                    <button className='border-2 border-white px-2' onClick={() => handleClickToOpen(product)}>Add Discount</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No products saved yet.</p>
            )}
            <Dialog open={open} fullWidth maxWidth="md" onClose={handleToClose}>
                <DialogContent>
                    <DialogContentText>
                        <div className='text-black gap-6 font-semibold flex flex-col'>
                            <h1>How much discount would you like to Offer??</h1>
                            <div className='flex gap-2'>
                                <input className='border-2 border-black w-[5%]' type="text" onChange={handleDiscountChange} />
                                <p>%</p>
                            </div>
                            <div>
                                <button className='border-2 border-black px-2' onClick={applyDiscount}>Submit</button>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleToClose} color="primary" autoFocus>Close</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Discounts;
