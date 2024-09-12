import React from 'react'
import { cardsData } from './AllData/data'
import './signup.css'

const UplearnSection = () => {
  return (
    <div className='uplearn-container'>
    <section className="container text-center ">
      <h2 className="fw-bold mb-3">Uplearn</h2>
      <p>New to the stock market or wish to upskill?</p>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 col-sm-12 mb-5">
            <div className="card h-100 text-center border-0">
              <div className="card-body d-flex flex-column justify-content-center align-items-center ">
                <div className='h-50 w-75 p-5 mb-2 rounded' style={{background:'#d0bcff'}}>
                <img
                  src={card.imgSrc}
                  alt={card.title} 
                  className="img-fluid mb-3"
                  style={{ width: '50px' }}
                />
                </div>
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-primary" style={{position:'relative',bottom:'4rem'}}>Learn With Us!</button>
    </section>

    <div className="container">
      <div className="row align-items-center p-5">
        {/* Left Column - Image */}
        <div className="col-md-6 d-flex justify-content-center gap-3">
          <img
            src="https://upstox.com/app/themes/upstox/dist/img/invest-in-share-market/stock-desk1.png" // Replace with your actual image source
            alt="Analyst Ratings"
            className="img-fluid rounded bg-light p-5"
          />
        </div>

        {/* Right Column - Content */}
        <div className="col-md-6">
          <h2 className="fw-bold">Stocks</h2>
          <p className="text-muted mb-4">
            Choosing from 5000+ Stocks is tough. We've made the search easier.
          </p>

          <h5 className="fw-bold">Discover stocks easily</h5>
          <p className="text-muted">
            With curated stock lists such as
          </p>

          <h5 className="fw-bold mt-3">Invest in them confidently</h5>
          <p className="text-muted">
            With a 6-point investment checklist and analyst ratings to buy, sell, or hold a stock
          </p>

          <h5 className="fw-bold mt-3">Stock like you shop</h5>
          <p className="text-muted">
            Simplified and intuitive buying and selling experience
          </p>

          {/* Button */}
          <a href="#" className="btn btn-outline-primary rounded-pill mt-4">
            Explore Stocks
          </a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default UplearnSection