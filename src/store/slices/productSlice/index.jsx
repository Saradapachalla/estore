import { createSlice } from '@reduxjs/toolkit';

const initialState =  [
        {
            id: 1,
            pName: "Jacket",
            price: 99.99,
            image: "https://placehold.co/100x200/png"
        },
        {
            id: 2,
            pName: "Shirt",
            price: 49.99,
            image: "https://placehold.co/100x200/png"
        },
        {
            id: 3,
            pName: "Pants",
            price: 79.99,
            image: "https://placehold.co/100x200/png"
        },
        {
            id: 4,
            pName: "Tshits",
            price: 34.99,
            image: "https://placehold.co/100x200/png"
        }
    ]

const productSlice = createSlice({
    name: 'Product',
    initialState
})

export default productSlice;