import React from 'react'

const style = {
  backgroundImage: `url("./img/carbon.jpg")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const Carbon = () => {
  return (
    <div>
      {/*    <!-- Carbon -->
       */}
      <section style={style} className="carbon dark">
        <div className="content">
          <h2>Commiting To Carbon Negative</h2>
          <p>
            Microsoft will be carbon negative by 2030 and by 2050 we will remove
            all carbon the company has emitted since it was founded in 1975
          </p>
          <a href="#" className="btn">
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Carbon
