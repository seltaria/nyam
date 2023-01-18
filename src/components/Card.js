import React from "react";
import { nanoid } from "nanoid";

export function Card(props) {

  const [topText, setTopText] = React.useState("standard");

  function handleMouseEnter() {
    if (props.isClicked && props.inStock) {
      setTopText("cancel")
    }
  }
  function handleMouseLeave() {
    if (props.isClicked && props.inStock) {
      setTopText("standard")
    }
  }
  function handleClick() {
    props.choose();
    setTopText(prevText => prevText === "cancel" ? "standard" : prevText)
  }

  const addOnElements = props.description.map(addon => <div key={nanoid()}>{addon}</div>)

  return (
    <div className="card__component">
      <div className={`card__wrapper ${props.inStock ? "" : "disabled"} ${props.isClicked ? "clicked" : ""}`} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="card">
          <h3 className={`card__first-str ${topText === "cancel" && "cancel"}`}>{topText === "standard" ? "Сказочное заморское яство" : "Котэ не одобряет?"}</h3>
          <h1 className="card__title">Нямушка</h1>
          <span className="card__taste">{props.taste}</span>
          <div className="card__taste-list">
            {addOnElements}
          </div>
          <div className="card__weight"><span>{props.weight}</span><span>кг</span></div>
        </div>
      </div>
      {!props.isClicked && props.inStock && <div className="card__footer">
        Чего сидишь? Порадуй котэ, <span className="card__btn" onClick={props.choose}>купи</span>
      </div>}
      {props.isClicked && <div className="card__footer">
        {props.footerText}
      </div>}
      {!props.inStock && <div className="card__footer" style={{ color: "#FFFF66" }}>
        Печалька, {props.taste} закончился
      </div>}
    </div>
  )
}