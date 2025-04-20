import React from 'react';


const Card = (props) => {
    return (
      <div className="card bg-primary  shadow-md shadow-gray-500 rounded-xl text-primary-content ">
        <div className="card-body">
          <div className="flex justify-around">
            <h2 className="card-title capitalize text-white text-3xl">
              {props.name}
            </h2>
            <img width="100px" src={props.img} />
          </div>
          {props.abilities ? <h1 className='text-white text-xl font-bold'>Abilities</h1> : ""}
          <ul className='capitalize text-amber-50 font-bold'>
            {props.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    );
};

export default Card;