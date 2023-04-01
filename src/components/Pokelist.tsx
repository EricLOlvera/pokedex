import { useEffect, useState } from 'react';
import { BasicPokeInfo, BasicPokeResponse } from '../types/Pokekypes';
import Pokeitem from './Pokeitem';
import '../styles/pokelist.scss';

export default function Pokelist() {
  const [pokes, setPokes] = useState<BasicPokeInfo[]>([]);

  async function getAllPokes() {
    const data: BasicPokeResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/'
    ).then((response) => response.json());
    console.log(data.results);
    setPokes(data.results);
  }

  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    <ul className="poke-list">
      {pokes.map((poke, i) => (
        <Pokeitem key={i} poke={poke} />
      ))}
    </ul>
  );
}
