import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";
import TypeIcons from "./Icons";
import './Card.css'

const Card = (props) => {  

  const clickCardHandler = () => {
    const card = document.querySelector(".card__inner");
    card.classList.toggle('is-flipped');
  }


  return (
    <div className="card">
		  <div onClick={clickCardHandler} className="card__inner">
			  <div className="card__face card__face--front">
          <img id={props.idPokemon} className="pokeImage" src={props.imagePokemon}></img>
				  <h2 id={props.idPokemon} className="pokeName">{props.namePokemon}</h2>
			</div>

      <div className="card__face card__face--back">
				<div className="card__content">
					<div className="pokeCard__back-image">
            <div className="card__back-header">
            <TypeIcons typePokemon={props.type} src={props.imgg}/>
              <ul>
                  <li>Height: {props.heightPokemon}</li>
                  <li>Weight: {props.weightPokemon}</li>
              </ul>
            </div>
              <img className="pokeImage__back" src={props.backImagePokemon}></img>
						  <h2 id={props.idPokemon} className="pokeName__back">{props.namePokemon}</h2>

              <div className="card__back-stats">
						    <h3>Stats:</h3>
                <div id="progressbar">
                  <div className="progressbar__stats-content">
                    <span className="progressbar__stats-name">HP</span>
                    <span className="progressbar__stats-value">{props.statHp}</span>
                  </div>
                  <progress className="card__back-stats" value={props.statHp} max="100"></progress>
                  <br/>

                  <div className="progressbar__stats-content">
                    <span className="progressbar__stats-name">Attack</span>
                    <span className="progressbar__stats-value">{props.attack}</span>
                  </div>
                  <progress className="card__back-stats" value={props.attack} max="100"></progress>
                  <br/>

                  <div className="progressbar__stats-content">
                    <span className="progressbar__stats-name">Defense</span>
                    <span className="progressbar__stats-value">{props.defense}</span>
                  </div>
                  <progress className="card__back-stats" value={props.defense} max="100"></progress>

                  <div className="progressbar__stats-content">
                    <span className="progressbar__stats-name">Speed</span>
                    <span className="progressbar__stats-value">{props.speed}</span>
                  </div>
                  <progress className="card__back-stats" value={props.speed} max="100"></progress>
                  <br/>  
                  <br/>                  
                </div>
              </div>
					    </div>
					  </div>
				  </div>
        </div>
      </div>
  )
    
}

export default Card