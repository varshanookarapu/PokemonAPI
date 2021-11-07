import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import card from "./card.css";
//import Pokemon from "pokemon-images";

export default function Card() {
  const [num, setNum] = useState();
  const [pokemon, setPokemon] = useState({
    name: "NA",
    height: "NA",
    weight: "NA",
    abilities: [],
  });

  //const [abilities, setAbilities] = useState("NA");

  useEffect(() => {
    //alert("Hello man , use effect is running");
    //https://pokeapi.co/api/v2/pokemon/${num}
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png-->POKEMON IMAGES
    //sprites.back_default
    /* const [name, setName] = useState("NA");
  const [height, setHeight] = useState("NA");
  const [weight, setWeight] = useState("NA");
  const [image, setImage] = useState("NA");
    setName(res.data.name);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setImage(res.data.sprites.back_default);*/

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);

      setPokemon(res.data);
      console.log(res.data.name);
    }
    if (num) {
      getData();
    }
  }, [num]);

  return (
    <div>
      <h1 style={{ color: "beige" }}>Poke Poke Pokemons</h1>

      <input
        className="tc bg-washed-red dib w5 h3 br4 grow shadow-2 -m b"
        type="text"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      />

      <h2 className="pa4" style={{ color: "beige" }}>
        I have selected the pokemon Card number {num}
      </h2>
      <div className="cardbox">
        <div className="tc bg-washed-green dib br4 pa5 ma2 grow bw2 shadow-5 i">
          <h3>POKEMON</h3>
          <h4>Name: {pokemon.name}</h4>
          <h4>Height: {pokemon.height}</h4>
          <h4>Weight: {pokemon.weight}</h4>
          <h4>Abilities: </h4>
          {pokemon.abilities.length ? (
            <div>
              {pokemon.abilities.map(({ ability }) => (
                <div key={ability.name}>{ability.name}</div>
              ))}
            </div>
          ) : (
            <div>No Abilities</div>
          )}
        </div>

        <div className="tc bg-washed-green dib br4 pa5 ma2 grow bw2 shadow-5 i w200 h200">
          <img src={pokemon.sprites?.back_default} className="w200 h200" />
        </div>
      </div>
    </div>
  );
}
