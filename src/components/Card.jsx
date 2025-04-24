import React from 'react';


const Card = (props) => {
  if (props.name && props.id) {

     return (
       <div className="card col-span-3 md:col-span-2 bg-base-100 borber-base-100  md:max-w-full shadow-xl rounded-xl text-base-content ">
         <div className="card-body">
           <div className="flex justify-around">
             <h2 className="card-title capitalize font-bold font-stretch-expanded text-3xl">
               {props.name} ({props.id})
             </h2>
             <img className="min-w-50" src={props.img} />
           </div>
           {props.abilities ? (
             <h1 className="text-xl font-bold font-stretch-expanded">
               Abilities
             </h1>
           ) : (
             ""
           )}
           <ul className="capitalize font-bold font-stretch-expanded">
             {props.abilities.map((ability) => (
               <li key={ability.ability.name}>{ability.ability.name}</li>
             ))}
           </ul>
           <div></div>
         </div>
       </div>
     );
   
  }
   

     return (
       <div className="card  col-span-3 md:col-span-2  md:max-w-full  rounded-xl text-base-content ">
         <div
           tabIndex={0}
           className="collapse collapse-arrow bg-base-100 border-base-200 border shadow-2xl"
         >
           <div className="collapse-title  bg-base-100">
             <h1 className="font-stretch-expanded text-xl">Moves</h1>
           </div>
           <div className="collapse-content  text-sm bg-base-100">
             <ul className="underline capitalize font-bold">
               {props.moves.map((move) => (
                 <li key={move.move.name}>{move.move.name}</li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     );
};

export default Card;