import "./_topnav.scss";

const TopNav = () => {
  return (
    <>
    <div className="top-nav bg-dark">
      <h1 className='brand my-1'>eStore</h1>
      <div className="p-0 my-4 w-50 h-25 inp-search">
        <select className="form-select product-select">
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input type="text" placeholder="Search..." className="form-control " />
        <button className="btn-search">
          <i className="fa-solid fa-search"></i>
        </button>
      </div>

      <div className="login-info h-25 w-25 my-4 p-0">
        <div className="cart-wishlist">
          <ul>
            <li>
              {" "}
              <i className="fa-solid fa-heart" />
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping" />
            </li>
          </ul>
        </div>
        <div className="user-icon">
          <i className="fa-solid fa-user user-icon-align"></i>
          <h5>
            {" "}
            <a>Login</a>{" "}
          </h5>{" "}
          <span className="user-login-separator h5">/</span>{" "}
          <h5>
            {" "}
            <a>Register</a>
          </h5>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default TopNav;
