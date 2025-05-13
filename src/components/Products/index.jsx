import './_products.scss'

const Products = () => {

    const productData = [
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
        }
    ]

    return (
        <>
            <div className="products">
                {
                    productData.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.pName} />
                            <h5><a href='#'>{product.pName}</a></h5>
                            <p>${product.price}</p>
                            <div className="product-rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            {/* <button className="btn btn-primary">Add to Cart</button> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Products;