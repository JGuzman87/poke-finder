"use client"
import Card from "@/components/Card";
import { useState } from "react";

import Nav from "../components/Nav";

export default function Home() {

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "poke_name") {
      setPokeName(value);
    }
  };

  return (
    <main className="grid grid-cols-1 gap-4 w-full p-4 md:grid-cols-3 md:max-w-full">

      <Nav onSubmit={handleSubmit} value={pokeName} onChange={handleChange} />
   

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
    </main>
  )};
