import './_category-nav.scss';

const CategoryNav = () => {

    return (
        <>
            <div className="category-nav bg-dark">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Men</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Women</a>    
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Kids</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Best Offers</a>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default CategoryNav;