import React, { useEffect, useState } from 'react'
import { mockData } from './AllData/data'
import './signup.css';

const niftyData =[
    { id: 1, name: 'NIFTY', value: '25,041.10', change: '+104.70', percentage: '0.42%' },
    { id: 2, name: 'SENSEX', value: '81,921.29', change: '+361.75', percentage: '0.45%' },
  ]

const StockHeader = () => {
    const [indices, setIndices] = useState([]);
    const isPositive ='+'

    // Fetch mock data
    useEffect(() => {
      const fetchData = async () => {
        const result = await mockData();
        setIndices(result.data);
      };
      fetchData();
    }, []);
  return (
   <div>
    <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
    <div className="col-md-6 w-25">
      <div className="d-flex justify-content-between">
            {niftyData.map((index)=>(
                <div className="d-flex">
                    <h5 className="nifty">{index.name}</h5>
                    <div className='numbers'>
                    <h6 className={` ${isPositive ? 'text-success' : 'text-danger'}`}> {index.change} </h6>
                    <p className="">{index.value}</p>
                    <small className="text-muted">{index.percentage}</small>
                    </div>
                    
                </div>
            ))}
      </div>
    </div>  
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Charts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Options</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Discover</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Orders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Positions</a>
          </li>
        </ul>
      </nav>
      <div className="header-right me-4">
        <button className="btn btn-outline-primary me-3">Demo</button>
        <button className="btn btn-primary">Funds</button>
      </div>
    </header>

    <div className="left-section bg-white w-25 shadow-sm p-3">
    <h4>Indices</h4>
    <ul className="list-group">
      {indices.map((index) => (
        <li key={index.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold">{index.name}</div>
            <small>{index.change}</small>
          </div>
          <span className="badge bg-primary rounded-pill">{index.value}</span>
        </li>
      ))}
    </ul>
  </div>
  </div>
  )
}

export default StockHeader