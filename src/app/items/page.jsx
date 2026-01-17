import React from 'react'
import products from '../data/Products.json'
import ItemCard from '../components/ItemCard'


const Items = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center my-10 '>
                <input type="text" placeholder="Primary" className="input text-black input-primary" />
                <div className="dropdown mr-13">
                    <div tabIndex={0} role="button" className="btn bg-white">
                        Filter by price
                    </div>
                    <ul
                        tabIndex="-1"
                        className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>  High to Low</a></li>
                        <li><a> Low to High</a></li>

                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Items