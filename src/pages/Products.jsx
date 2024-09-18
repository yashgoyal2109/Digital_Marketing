import React, { useState, useEffect } from 'react';
import DashNav from './components/DashNav';
import { plus, shoes } from '../assets';
import ProductDetails from './components/ProductDetails';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    const handleDelete = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='bg-black min-h-screen px-20'>
                <DashNav></DashNav>
                <h1 className='text-white py-7 px-20 font-bold text-[2rem]'>Products</h1>
                <div className='px-[10rem] py-[2rem] border-[0.1rem] border-white'>
                    <div className=' flex flex-col text-white gap-10 justify-between'>
                        <p className='font-semibold text-[1.2rem]'>Add Your Products</p>
                        <p>Start by stocking your store with products your customers will love</p>
                        <div className='flex justify-between'>
                            <div className='flex border-2 w-[10%] items-center h-[20%]'>
                                <img src={plus} alt="" />
                                <button onClick={handleClickToOpen}>Add Products</button>
                                <Dialog open={open} fullWidth maxWidth="lg" onClose={handleToClose}>
                                    <DialogContent>
                                        <DialogContentText>
                                            <ProductDetails></ProductDetails>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <button onClick={handleToClose}
                                            color="primary" autoFocus>
                                            Close
                                        </button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            <div>
                                <img src={shoes} alt="" />
                            </div>
                        </div>
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
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                {product.media && <img className='object-cover' width={100} height={300} src={product.media} alt="Product" />}
                                                <button className='border-2 border-white' onClick={() => handleDelete(index)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p>No products saved yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
