import { useEffect, useState } from 'react';
import { PokeInfo, PokeItemProps } from '../types/Pokekypes';
import '../styles/pokeitem.scss';
import {
  TbArrowAutofitWidth,
  TbArrowAutofitHeight,
  TbWeight
} from 'react-icons/tb';

export default function Pokeitem({ poke }: PokeItemProps) {
  const [pokeInfo, setPokeInfo] = useState<PokeInfo>();

  async function getPokeInfo(url: string) {
    const data: PokeInfo = await fetch(url).then((response) => response.json());
    setPokeInfo(data);
  }

  useEffect(() => {
    getPokeInfo(poke.url);
  }, []);

  return (
    <li className="poke-item">
      <div className="poke-item__left">
        <span className="poke-item__left__number">#{pokeInfo?.id}</span>
        <div className="poke-item__left__sprite">
          {/* <img
            className="poke-item__left__sprite--outline"
            src={pokeInfo?.sprites.front_default}
            alt={`${poke.name}-image`}
          /> */}
          <img
            className="poke-item__left__sprite--default"
            src={pokeInfo?.sprites.front_default}
            alt={`${poke.name}-image`}
          />
        </div>
      </div>
      <div className="poke-item__button"></div>
      <div className="poke-item__right">
        <span className="poke-item__right__name">{pokeInfo?.name}</span>
        <img
          className="poke-item__right__icon"
          src={pokeInfo?.sprites.versions['generation-vii'].icons.front_default}
          alt={`${poke.name}-icon`}
        />
        <div className="poke-item__right__types">
          {pokeInfo?.types.map((typeItem, index) => (
            <span
              key={`type-${index}`}
              className={`poke-item__right__types__chip poke-item__right__types__chip--${typeItem.type.name}`}
            >
              {typeItem.type.name}
            </span>
          ))}
        </div>

        <div className="poke-item__right__stats">
          <div className="poke-item__right__stats__item">
            <div className="poke-item__right__stats__item__icon">
              <TbArrowAutofitHeight />
            </div>
            <div className="poke-item__right__stats__item__data">
              {pokeInfo?.height}
            </div>
          </div>
          <div className="poke-item__right__stats__item">
            <div className="poke-item__right__stats__item__icon">
              <TbWeight />
            </div>
            <div className="poke-item__right__stats__item__data">
              {pokeInfo?.weight}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
