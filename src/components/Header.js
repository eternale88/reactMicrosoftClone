import React from 'react'

const style = {
  backgroundImage: `url("./img/showcase.png")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const Header = () => {
  return (
    <div>
      {/*<!-- Showcase --> */}
      <header style={style} className="showcase">
        <h2>Surface Deals</h2>
        <p>Select Surfaces are on sale now - save while supplies last</p>
        <a href="#" className="btn">
          Shop Now <i className="fas fa-chevron-right"></i>
        </a>
      </header>
    </div>
  )
}

export default Header
