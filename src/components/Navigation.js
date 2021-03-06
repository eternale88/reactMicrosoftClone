import React from 'react'

const Navigation = (props) => {
  console.log(props)
  return (
    <div>
      <div className="menu-btn" onClick={props.onClick}>
        <i className="fas fa-bars fa-2x"></i>
      </div>

      {/*  Navigation  */}
      <nav className="main-nav">
        <img src="img/logo.png" alt="Microsoft" className="logo" />
        <ul className={props.value ? 'main-menu show' : 'main-menu'}>
          <li>
            <a href="#">Office</a>
          </li>
          <li>
            <a href="#">Windows</a>
          </li>
          <li>
            <a href="#">Surface</a>
          </li>
          <li>
            <a href="#">Xbox</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>

        <ul className="right-menu">
          <li>
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
