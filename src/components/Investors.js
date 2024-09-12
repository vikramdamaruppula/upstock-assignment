import React from 'react'
import { investmentData } from './AllData/data'
import './signup.css'

const Investors = () => {
  return (
    <section style={{background:'#f2ecfd'}}>
    <div className='container text-center py-5'>
        <h2>Upstox for Investors</h2>
        <p className='para mb-5'>We understand that investors and traders have different needs, which is why we've created a separate mode called Upstox for Investors</p>
        <div className="row">
        {investmentData.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-12 mb-4">
            <div className="d-flex flex-column align-items-center">
                <div>
                   <img src={item.imageUrl} alt={item.heading} className="mb-3" style={{ width: '40px', height:'40px'}} />
                </div>
              <h5 className="heading">{item.heading}</h5>
              <p className='content'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Investors