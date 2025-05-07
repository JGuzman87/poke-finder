"use client";
import Card from "@/components/Card";
import Alert from "@/components/Alert";
import { useState, useEffect } from "react";

import Nav from "../components/Nav";

export default function Home() {
  const [pokeInfo, setPokeInfo] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [sprite, setSprite] = useState({});
  const [abilities, setAbilities] = useState(null);
  const [error, setError] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const pokemonid = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const randomid = pokemonid[Math.floor(Math.random() * pokemonid.length)];
    const fetchRandom = async () => {
      try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomid}`
      );
      const randomData = await response.json();
      setPokeInfo(randomData);
      setSprite(randomData.sprites);
      setAbilities(randomData.abilities);
       await new Promise((r) => setTimeout(r, 1000));
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    };
  }
    fetchRandom();
  }, []);

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
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
      await new Promise((r) => setTimeout(r, 1000));
    } catch (error) {
      setError("Not a valid pokemon name or id.");
      console.error(error)
    }finally {
      setIsLoading(false)
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
    <main className="grid grid-cols-1 gap-4 w-full p-2 md:grid-cols-3 md:max-w-full">
      <Nav onSubmit={handleSubmit} value={pokeName} onChange={handleChange} />
      {error && <Alert error={error} />}
      {pokeInfo.name ? (
        <Card
          name={pokeInfo.name}
          id={pokeInfo.id}
          img={sprite ? sprite.front_default : ""}
          abilities={abilities === null ? "" : abilities}
          loading={loading}
        />
      ) : (
        ""
      )}

      {pokeInfo.moves ? <Card moves={pokeInfo.moves} /> : ""}
    </main>
  );
}
