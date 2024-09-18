import React, { useState } from 'react'
import DashNav from './DashNav'
import { Link } from 'react-router-dom'

function ProductDetails() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        media: null,
        price: '',
        compareAtPrice: '',
        costPerItem: '',
        profit: '',
        margin: ''
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'media') {
            const file = files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = () => {
                    setFormData({ ...formData, [name]: reader.result })
                }
                reader.readAsDataURL(file)
            } else {
                setFormData({ ...formData, [name]: null })
            }
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const existingProducts = JSON.parse(localStorage.getItem('products')) || []
        const updatedProducts = [...existingProducts, formData]
        localStorage.setItem('products', JSON.stringify(updatedProducts))
    }


    return (
        <>
            <div className=''>
                <div className='bg-black pl-[20rem] flex py-[20rem] gap-12 flex-col px-20 text-white justify-center'>
                    <h1 className='font-bold text-[1.5rem]'>Enter Details:-</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[2rem] p-[2rem] w-[70%] border-2 rounded-lg border-white'>
                        <div className='flex flex-col'>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className='bg-secondary_black border-2 py-2 w-[70%] rounded-sm' placeholder='Short Sleeve T-shirt' />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description" value={formData.description} onChange={handleChange} className='bg-secondary_black border-2 py-2 w-[70%] rounded-sm h-[10rem]' placeholder='Short Sleeve T-shirt' />
                        </div>

                        <div className='text-white gap-[2rem] flex flex-col'>
                            <label htmlFor="media" className='font-semibold text-[1.3rem]'>Media</label>
                            <input type="file" name="media" onChange={handleChange} className='border-2 bg-secondary_black border-dashed w-[70%] h-[10rem] border-white' />
                        </div>

                        <div className='text-white flex flex-col gap-10'>
                            <label htmlFor="" className='font-semibold text-[1.3rem]'>Pricing</label>
                            <div className='flex gap-10 '>
                                <div className='flex flex-col gap-2'>
                                    <p>Price</p>
                                    <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder='$ 0.00' className='border-2 bg-secondary_black w-[70%] border-white' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p>Compare at price</p>
                                    <input type="text" name="compareAtPrice" value={formData.compareAtPrice} onChange={handleChange} className='border-2 bg-secondary_black w-[70%] border-white' placeholder='$ 0.00' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex flex-col gap-2'>
                                    <p>Cost per item</p>
                                    <input type="text" name="costPerItem" value={formData.costPerItem} onChange={handleChange} className='border-2 bg-secondary_black w-[70%] border-white' placeholder='$ 0.00' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p>Profit</p>
                                    <input type="text" name="profit" value={formData.profit} onChange={handleChange} className='border-2 bg-secondary_black w-[70%] border-white' placeholder='$ 0.00' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p>Margin</p>
                                    <input type="text" name="margin" value={formData.margin} onChange={handleChange} className='border-2 bg-secondary_black w-[70%] border-white' placeholder='$ 0.00' />
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-10 px-10'>
                            <button type='submit' className='bg-white text-black px-4 py-1 rounded-md'>Save</button>
                            <Link to="/products">
                                <button className='bg-white text-black px-4 py-1 rounded-md'>Discard</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ProductDetails