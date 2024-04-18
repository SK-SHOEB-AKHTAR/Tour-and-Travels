import { useState } from "react";

function Card({ id, image, info, price, name, removetour }) {
  function readmoreHandeler() {
    setReadmore(!readmore);
  }

  const [readmore, setReadmore] = useState(false);
  const description = readmore? info :`${info.substring(0, 150)}...`

      
  return (
    <div className="card">
      <img src={image} className="image" alt="loading..."></img>

      <div className="tour-info">
        <div className="tour-detels">
          <h3 className="tour-price">₹{price}</h3>
          <h1 className="tour-name">{name}</h1>
        </div>

        <div className="description">
          {description}

          <span className='read-more' onClick={readmoreHandeler}>
            {readmore ? `Show Less` : `Show More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={()=>removetour(id)}>
        Not intrested
      </button>
    </div>
  ); 
}

export default Card;
