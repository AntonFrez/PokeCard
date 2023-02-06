/* import { createElement } from 'react' */
/* import BugType from '../Types/BugType.png'
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
import WaterType from '../Types/WaterType.png' */

/* const icons = {
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
} */

const typeIco = (props) => {
    
   /*  const searchAlt = document && document.querySelector('.typePokemonImg').alt
    console.log(searchAlt, 1);
    const searchIcon = Object.entries(icons).filter(icon => icon[0] === searchAlt);
    const imgg = document.querySelector(".typePokemonImg").src = searchIcon[0][1]  
    console.log('iconsss'); */
}

const TypeIcons = (props) => {
    return (
       <div>
            <img className='typePokemonImg' src='' alt={props.typePokemon}></img>
       </div>
    )
}

export default TypeIcons