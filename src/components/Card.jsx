import React from 'react';
import Image from 'next/image';

const Card = (props) => {
    return (
      <div className="card bg-primary animate-pulse shadow-md shadow-gray-500 rounded-xl text-primary-content ">
        <div className="card-body">
          <div className="flex justify-around">
            <h2 className="card-title capitalize text-white text-3xl">
              {props.name}
            </h2>
            <img width="100px" src={props.img} />
          </div>
          <ul>
            {props.ability}
          </ul>
          
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    );
};

export default Card;