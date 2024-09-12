import React from 'react'
import './signup.css'

const InvestmentSection = () => {
  return (
    <section className="container py-5">
      <div className='main-container'>
         <div className="row align-items-center">
        {/* Left side content */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          <h1 className="fw-bold">Invest Right, Invest Now</h1>
          <p className="lead">
            Open a <span className="fw-bold">FREE*</span> Demat and Trading account to invest in Stocks, Mutual Funds, IPOs and more.
          </p>
          
          {/* Form */}
          <form className="d-flex flex-row mb-3">
            <div className="input-container">
              <span className="">+91</span>
              <input
                type="tel"
                className=" custom-input"
                placeholder="Enter mobile number"
              />
            </div>
            <button type="submit" className="btn btn-secondary ms-2">
              Sign Up
            </button>
          </form>
          
          <p className="text-muted small">
            By signing up you agree to our <a href="/">Terms and Conditions</a>
          </p>

          {/* Additional info below the form */}
          <hr className='horizontal' />
          <div className="d-flex justify-content-around">
            <div>
              <h4>₹0*</h4>
              <p className="small">Commission on Mutual Funds and IPO</p>
            </div>
            <div>
              <h4>₹20*</h4>
              <p className="small">Per order on Equity, F&O, Commodity and Currency</p>
            </div>
            <div>
              <h4>4.5+ <span className="fa fa-star text-warning"></span></h4>
              <p className="small">Avg. App Rating</p>
            </div>
          </div>
        </div>

        {/* Right side mockup image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="https://upstox.com/app/themes/upstox/dist/img/invest-in-share-market/Image-Container.webp"
            alt="Mobile App Mockup"
            // style={{height:'500px', width:'320px'}}
            className="image-mobile"
          />
        </div>
         </div>
       </div>
    </section>
  )
}

export default InvestmentSection