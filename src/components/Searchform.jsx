"use client"
import Card from './Card';
import {useState } from 'react'

const Searchform = () => {

  const [pokeInfo, setPokeInfo] = useState({})
  const [pokeName, setPokeName] = useState('');
  const [sprite, setSprite] = useState({});
  const [abilities, setAbilities] = useState(null)
  
    const fetchPokemon = async () => {
   try{const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const pokeData = await response.json();
      setPokeInfo(pokeData)
      setSprite(pokeData.sprites)
      console.log(pokeData.moves);
     setAbilities(pokeData.abilities)

      
    }catch (error) {
      console.error('Error fetching Pokemon data:', error);
    } ;
      
  }



  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetchPokemon();
    setPokeName('')

  }

const handleChange = (e) => {
  const {name, value} = e.target;
  if (name === 'poke_name') {
    setPokeName(value);
  }
 
}
    
  return (
    <div className="grid grid-cols-1 gap-4 w-full md:w-1/2 p-4">
      <form
        className="bg-cyan-600 flex rounded-xl shadow-md shadow-gray-500 flex-col gap-4 items-center p-4"
        htmlFor="api-call"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Pokemon Search:</label>
        <input
          className="bg-white p-4 w-3/4 md:w-1/2 border-indigo-500"
          type="text"
          name="poke_name"
          value={pokeName}
          onChange={handleChange}
          placeholder='enter pokemon name or id'
          required
        />
        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </form>

 {pokeInfo.name ? <Card name={pokeInfo.name} img={sprite ? sprite.front_default : ''} abilities={abilities === null ? '' : abilities } /> : ''} 
    </div>
  );
}

export default Searchform;