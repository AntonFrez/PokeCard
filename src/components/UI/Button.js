import React, { useState } from 'react'
import './Button.css'
import Card from './Card'
import TypeIcons from './Icons'

import BugType from '../Types/BugType.png'
import DarkType from '../Types/DarkType.png'
import DragonType from '../Types/DragonType.png'
import ElectricType from '../Types/ElectricType.png'
import FairyType from '../Types/FairyType.png'
import FightingType from '../Types/FightingType.png'
import FireType from '../Types/FireType.png'
import FlyingType from '../Types/FlyingType.png'
import GhostType from '../Types/GhostType.png'
import GrassType from '../Types/GrassType.png'
import GroundType from '../Types/GroundType.png'
import IceType from '../Types/IceType.png'
import NormalType from '../Types/NormalType.png'
import PoisonType from '../Types/PoisonType.png'
import PsychicType from '../Types/PsychicType.png'
import RockType from '../Types/RockType.png'
import SteelType from '../Types/SteelType.png'
import WaterType from '../Types/WaterType.png'

const icons = {
  bug: BugType,
  dark: DarkType,
  dragon: DragonType,
  electric: ElectricType,
  fairy: FairyType,
  fighting: FightingType,
  fire: FireType,
  flying: FlyingType,
  ghost: GhostType,
  grass: GrassType,
  ground: GroundType,
  ice: IceType,
  normal: NormalType,
  poison: PoisonType,
  psychic: PsychicType,
  rock: RockType,
  steel: SteelType,
  water: WaterType,
}

const Button = (props) => {
  

  const [namePokemon, setData] = useState()
  const [imagePokemon, setImagePokemon] = useState()
  const [idPokemon, setIdPokemon] = useState()
  const [heightPokemon, setHeightPokemon] = useState()
  const [weightPokemon, setWeightPokemon] = useState()
  const [backImagePokemon, setBackImagePokemon] = useState()
  const [statHp, setStatHp] = useState()
  const [attack, setAttack] = useState()
  const [defense, setDefence] = useState()
  const [speed, setSpeed] = useState()
  const [type, setType] = useState()

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";


  const ClickButtonHandler = (props) => {

    const randomСharacterId = Math.floor(Math.random() * 895);
    
    fetch((baseImgUrl, baseUrl) + randomСharacterId)
    .then((response) => response.json())
    .then((data) => {
      /* console.log(data, 'data'); */
      setIdPokemon(data.id)
      setData(data.name)
      setImagePokemon(data.sprites.other["official-artwork"].front_default)
      setHeightPokemon(data.height)
      setWeightPokemon(data.weight)
      setBackImagePokemon(data.sprites.front_default)
      setStatHp(data.stats[0].base_stat)
      setAttack(data.stats[1].base_stat)
      setDefence(data.stats[2].base_stat)
      setSpeed(data.stats[5].base_stat)
      setType(data.types[0].type.name)

      let altDataName = data.types[0].type.name
      /* console.log(altDataName, 'altDataNme') */

      const searchIcon = Object && Object.entries(icons).filter(icon => icon[0] === altDataName);
      /* console.log(searchIcon, 'object filter'); */
      const imgg = document.querySelector(".typePokemonImg").src = searchIcon[0][1]  
      /* console.log(imgg, 'src'); */
    })
   
  }

  return <div className='card__area'>
    <Card idPokemon={idPokemon}
      namePokemon={namePokemon}
      imagePokemon={imagePokemon}
      backImagePokemon={backImagePokemon}
      heightPokemon={heightPokemon}
      weightPokemon={weightPokemon}
      statHp={statHp}
      attack={attack}
      defense={defense}
      speed={speed}
      type={type}/>
      <button className="pokemonRenderButton" onClick={ClickButtonHandler}>Find Out!</button>
    </div>
}

export default Button