import React from 'react'

const Card = ({ item }) => {
  
  return (
   <>
   <div>
    <div className="card bg-base-100 w-96 shadow-sm hover:scale-105">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
    </h2>
    <div className="badge badge-secondary">{item.category}</div>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-secondary">Buy Now </div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Card