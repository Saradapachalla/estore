import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        category: 'Mens',
        items: ['Shirts', 'Pants', 'Shoes', 'Boots', 'Coats', 'Party Wear'],
    },
    {
        id: 2,
        category: 'Womens',
        items: ['Tops', 'Skirts', 'Dresses', 'Shoes', 'Boots', 'Coats'],
    },
    {
        id: 3,
        category: 'Kids',
        items: ['T-Shirts', 'Shorts', 'Sneakers', 'Sandals'],
    },
    {
        id: 4,
        category: 'Accessories',
        items: ['Bags', 'Belts', 'Hats', 'Sunglasses'],
    }
]
const accordionCatSlice = createSlice({
    name: 'AccordionCatSlice',
    initialState
})

export default accordionCatSlice; 