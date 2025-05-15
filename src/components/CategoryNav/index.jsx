import { useSelector } from 'react-redux';
import categorySlice from '../../store/slices/categorySlice';
import './_category-nav.scss';

const CategoryNav = () => {
    const categories = useSelector(categorySlice.getInitialState);
    return (
        <>
            <div className="category-nav bg-dark">
                <ul className="nav-list">
                    {categories.map((category, index) => (
                        <li className="nav-item" key={index}>
                            <a href="#" className="nav-link">{category}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default CategoryNav;