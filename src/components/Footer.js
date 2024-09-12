import React from 'react'
import { footerData } from './AllData/data'
import './signup.css'

const Footer = () => {
  return (
    <footer className='footer pt-5 custom-footer'>
        <div className='container '> 
            <div className='row'> 
                <div className='col-md-3 custom-container'>
                        <img
                        src="https://upstox.com/app/themes/upstox/dist/img/logo/mobile-logo.svg"
                        alt="Upstox Logo"
                        className="mb-3 img-fluid image-footer"
                        // style={{ }}
                        />
                    <address>
                        <p className='contents'>
                            '30th Floor, Sunshine Tower, 
                            Senapati Bapat Marg, Dadar (W), 
                            'Mumbai, Maharashtra 400013' 
                        </p>
                    </address>
                    <div className='d-flex flex-column align-items-start gap-3 button-container'>
                        <button className='btn btn-secondary'> play store</button>
                        <button className='btn btn-secondary'> Apple store</button>
                    </div>

                </div>
                {footerData.map((section,index)=>{
                    return(
                    <div key={index} className='d-flex flex-column row-gap-4 col-md-2 '>
                        <h3 className='text-start tagline'> {section.tagline} </h3>
                        <ul className='list-unstyled text-start'>
                            {section?.contents.map((content,index)=>(
                                <li className='contents'>
                                {content.icon && <i class={`${content.icon}`}> </i>}
                                 {content.name} 
                                 </li>
                            ))}
                        </ul>
                    </div>
                    )
                })}               
            </div>
        </div>
    </footer>
  )
}

export default Footer