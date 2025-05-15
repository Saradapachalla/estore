import { useSelector } from 'react-redux';
import accordionCatSlice from '../../store/slices/accordionCatSlice';
import './_sidenav.scss';

const SideNav = () => {
    const accordionData = useSelector(accordionCatSlice.getInitialState)
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                {
                    accordionData.map((accordionCategory, key) => (
                        <div className="accordion-item individual-category" key={key}>
                            <div className="accordion-header">
                                <button className="accordion-button" data-bs-toggle="collapse" data-bs-target={"#collapse"+key}>        
                                    <div className='category-title'>
                                        <a href='#'>{accordionCategory.category}</a>
                                    </div>
                                </button>
                            </div>
                            <div id={"collapse"+key} className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <ul>
                                        {accordionCategory.items.map((item, index) => (
                                            <li className='sub-items' key={index}><a href="#">{item}</a></li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
                

            </div>
        </div>
    )
}
export default SideNav;