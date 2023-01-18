import React from "react";
import { Card } from "./components/Card";
import { data } from "./data";

export function App() {

  const [products, setProducts] = React.useState(data.map(el => { return { ...el, isClicked: false } }));

  function choose(id) {
    setProducts(prevData => prevData.map(element => {
      return element.id === id && element.inStock ? { ...element, isClicked: !element.isClicked } : { ...element }
    }))
  }

  const cardElements = products.map(product =>
    <Card
      taste={product.taste}
      description={product.description}
      weight={product.weight}
      inStock={product.inStock}
      footerText={product.footerText}
      isClicked={product.isClicked}
      choose={() => choose(product.id)}
      key={product.id} />)

  return (
    <div className="app">
      <h2 className="app__title">Ты сегодня покормил кота?</h2>
      <div className="cards">
        {cardElements}
      </div>
    </div>
  );
}
