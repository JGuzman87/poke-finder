import React from 'react';


const Card = (props) => {
  if (props.moves) {
    return (
      <div className="card skeleton  bg-rose-400 md:max-w-full shadow-md shadow-gray-500 rounded-xl text-primary-content ">
        <div className="card-body">
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold bg-rose-400">
              <h1 className="font-stretch-expanded text-xl text-white">Moves</h1>
            </div>
            <div className="collapse-content text-sm bg-rose-400">
              <ul className="capitalize text-amber-50 font-bold">
                {props.moves.map((move) => (
                  <li key={move.move.name}>{move.move.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
      <div className="card bg-primary md:max-w-1/2 col-span-2 shadow-md shadow-gray-500 rounded-xl text-primary-content ">
        <div className="card-body">
          <div className="flex justify-around">
            <h2 className="card-title capitalize text-white font-bold font-stretch-expanded text-3xl">
              {props.name} ({props.id})
            </h2>
            <img width="200px" src={props.img} />
          </div>
          {props.abilities ? (
            <h1 className="text-white text-xl font-bold font-stretch-expanded">
              Abilities
            </h1>
          ) : (
            ""
          )}
          <ul className="capitalize text-amber-50 font-bold font-stretch-expanded">
            {props.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    );
};

export default Card;