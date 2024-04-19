import React from 'react'
import './food.css'

const Fooddata = ({ food }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        {
          food.map((val,i) => {
            return (
              <div className="card m-2 p-3" style={{ width: '18rem' }} key={i}>
                <img src={val.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">{val.des}</p>
                  <p className="card-text">{val.price}/- </p>
                  <button className="btn btn-success">Order Now</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Fooddata;