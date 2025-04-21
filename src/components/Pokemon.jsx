"use client";
import Card from "./Card";
import { useState} from "react";

const Pokemon = () => {
  const [pokeInfo, setPokeInfo] = useState({});
  const [pokeName, setPokeName] = useState("");
  const [sprite, setSprite] = useState({});
  const [abilities, setAbilities] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      const pokeData = await response.json();
      setPokeInfo(pokeData);
      setSprite(pokeData.sprites);
      console.log(pokeData);
      // console.log(pokeData.abilities[0].ability.name);
      setAbilities(pokeData.abilities);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchPokemon();
  };

// useEffect(() => {
//   if (pokeInfo.moves) {
//   props.moves.moves.map((move) => console.log(move.move.name));
//   }
// }, [pokeInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "poke_name") {
      setPokeName(value);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-full p-4 md:grid-cols-3 md:w-full">
      <form
        className="bg-cyan-600 flex rounded-xl md:max-w-md shadow-md shadow-gray-500 flex-col gap-8 items-center p-4"
        htmlFor="api-call"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="text-2xl subpixel-antialiased font-stretch-expanded text-white"
        >
          Enter Pokemon name or id:
        </label>
        <input
          className="bg-white p-4 w-full md:w-full rounded-2xl border-indigo-500"
          type="text"
          name="poke_name"
          value={pokeName}
          onChange={handleChange}
          placeholder="name or id..."
          required
        />
        <button
          className="btn btn-secondary w-1/2 rounded-2xl text-white"
          type="submit"
        >
          Search
        </button>
      </form>

      {pokeInfo.name ? (
        <Card
          name={pokeInfo.name}
          id={pokeInfo.id}
          img={sprite ? sprite.front_default : ""}
          abilities={abilities === null ? "" : abilities}
        />
      ) : (
        ""
      )}

      {pokeInfo.moves ? <Card moves={pokeInfo.moves} /> : ""}
    </div>
  );
};

export default Pokemon;
