import React from 'react';
import Image from 'next/image';

const Card = (props) => {
    return (
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <div className='flex justify-around'>
            <h2 className="card-title capitalize">{props.name}</h2>
            <img width="100px" src={props.img} />
          </div>

          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Card;