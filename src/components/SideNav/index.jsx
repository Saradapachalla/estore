import './_sidenav.scss';

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                <div className="accordion-item individual-category">
                    <div className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">        
                            <div className='category-title'>
                                <a href='#'>Men</a>
                            </div>
                        </button>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li className='sub-items'><a href="#">Shirts</a></li>
                                <li className='sub-items'><a href="#">Pants</a></li>
                                <li className='sub-items'><a href="#">Shoes</a></li>
                                <li className='sub-items'><a href="#">Boots</a></li>
                                <li className='sub-items'><a href="#">Coats</a></li>
                                <li className='sub-items'><a href="#">Party Wear</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SideNav;