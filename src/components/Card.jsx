



const Card = (props) => {

  
  if (props.name && props.id) {

     return (
       <div className="card col-span-3 md:col-span-2 bg-base-100 borber-base-100  md:max-w-full shadow-xl rounded-xl text-base-content  ">
         {props.loading ? (
           <div className="skeleton card-body  ">
             <div className="w-full h-50"></div>
             <div className="w-full"></div>
             <div className="w-full min-h-full"></div>
           </div>
         ) : (
           <div className="card-body  bg-linear-to-t from-sky-500 to-indigo-500">
             <div className="flex justify-around ">
               <h2 className="card-title capitalize font-bold font-stretch-expanded text-3xl">
                 {props.name} ({props.id})
               </h2>
               <img className="min-w-50 md:min-width-full" src={props.img} />
             </div>

             <h1 className="text-xl font-bold font-stretch-expanded">
               Abilities
             </h1>
             <ul className="capitalize font-bold font-stretch-expanded">
               {props.abilities.map((ability) => (
                 <li key={ability.ability.name}>{ability.ability.name}</li>
               ))}
             </ul>
           </div>
         )}
       </div>
     );
        
      
     
   
  }
   

     return (
       <div className="card-body   col-span-3 md:col-span-2  md:max-w-full  rounded-xl text-base-content ">
         <div
           tabIndex={0}
           className=" collapse collapse-arrow  border-base-200 border shadow-2xl"
         >
           <div className="collapse-title  bg-base-100 h-14 bg-linear-to-t from-sky-500 to-indigo-500">
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