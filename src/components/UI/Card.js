import TypeIcons from "./Icons";
import './Card.css'

const Card = (props) => {  

  const clickCardHandler = () => {
    const card = document.querySelector(".card__front");
    card.classList.toggle('is-flipped');
  }


  return (
    <div className="card">
		  <div onClick={clickCardHandler} className="card__front">
			  <div className="card__face card__face-front">
          <img id={props.idPokemon} className="card__face-front-image" src={props.imagePokemon}></img>
				  <h2 id={props.idPokemon} className="card__face-front-name">{props.namePokemon}</h2>
			</div>

      <div className="card__face card__face-back">
				<div className="card__face-back-content" style={{backgroundColor: `var(--bg-poke-color-dark-${props.type})`}}>
					<div className="card__face-back-image-area">
            <div className="card__face-back-header-stats">
            <TypeIcons typePokemon={props.type} src={props.imgg}/>
              <ul>
                  <li>Height: {props.heightPokemon}</li>
                  <li>Weight: {props.weightPokemon}</li>
              </ul>
            </div>
              <img className="card__face-back-image" src={props.backImagePokemon}></img>
						  <h2 id={props.idPokemon} className="card__face-back-name">{props.namePokemon}</h2>

              <div className="card__back-stats">
						    <h3>Stats:</h3>
             {/*    <div id="progressbar">
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
                </div> */}

                <div className="stats__content">
                  <div className="content__other-stat">
                    <span className="otherStatContentPower">HP</span>
                    <span className="otherStatContentValue">{props.statHp}</span>
                  </div>
                  <div className="otherStatTimeLine">
                    <div className="otherStatTimeLineStat" value={props.statHp} max="100" style={{width: `${props.statHp}%`, backgroundColor: 'rgb(252, 107, 110)', height: '100%'}}></div>
                    <div className="otherStatTimeLineStat"></div>
                  </div>

                  <div className="content__other-stat">
                    <span className="otherStatContentPower">Attack</span>
                    <span className="otherStatContentValue">{props.attack}</span>
                  </div>
                  <div className="otherStatTimeLine">
                    <div className="otherStatTimeLineStat" value={props.attack} max="100" style={{width: `${props.attack}%`, backgroundColor: 'rgb(33, 150, 243)', height: '100%'}}></div>
                    <div className="otherStatTimeLineStat"></div>
                  </div>

                  <div className="content__other-stat">
                    <span className="otherStatContentPower">Defence</span>
                    <span className="otherStatContentValue">{props.defense}</span>
                  </div>
                  <div className="otherStatTimeLine">
                    <div className="otherStatTimeLineStat" value={props.defense} max="100" style={{width: `${props.defense}%`, backgroundColor: 'rgb(9, 75, 232)', height: '100%'}}></div>
                    <div className="otherStatTimeLineStat"></div>
                  </div>

                  <div className="content__other-stat">
                    <span className="otherStatContentPower">Speed</span>
                    <span className="otherStatContentValue">{props.speed}</span>
                  </div>
                  <div className="otherStatTimeLine">
                    <div className="otherStatTimeLineStat" value={props.speed} max="100" style={{width: `${props.speed}%`, backgroundColor: 'rgb(207, 155, 72)', height: '100%'}}></div>
                    <div className="otherStatTimeLineStat"></div>
                  </div>
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