import { useSelector } from 'react-redux';
import productSlice from '../../store/slices/productSlice';
import './_products.scss'

const Products = () => {

    const productData = useSelector(productSlice.getInitialState);

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