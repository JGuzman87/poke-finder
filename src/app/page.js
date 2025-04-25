"use client";
import Card from "@/components/Card";
import Alert from "@/components/Alert";
import { useState, useEffect } from "react";

import Nav from "../components/Nav";

export default function Home() {
  const [pokeInfo, setPokeInfo] = useState({});
  const [pokeName, setPokeName] = useState("");
  const [sprite, setSprite] = useState({});
  const [abilities, setAbilities] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const pokemonid = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const randomid = pokemonid[Math.floor(Math.random() * pokemonid.length)];
    const fetchRandom = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomid}`
      );
      const randomData = await response.json();
      setPokeInfo(randomData);
      setSprite(randomData.sprites);
      setAbilities(randomData.abilities);
    };
    fetchRandom();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      const pokeData = await response.json();
      setError(null);
      setPokeInfo(pokeData);
      setSprite(pokeData.sprites);
      console.log(pokeData);
      // console.log(pokeData.abilities[0].ability.name);
      setAbilities(pokeData.abilities);
    } catch (error) {
      setError("Not a valid pokemon name or id.");
      console.error(error)
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
      <div
        className={`transition-all duration-500 ease-in-out ${
          error ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {error && <Alert error={error} />}
      </div>
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
  );
}
