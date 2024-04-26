import React, { useState } from 'react';
import './Barras.css';
import Item from '../Itens/Item';
//import './Barras.css';

const SandwichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sandwich-menu">
      <button className="sandwich-menu__button" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <ul className="sandwich-menu__list">
          <Item>Exemplo 1</Item>
          <Item>Exemplo 2</Item>
          <Item>Exemplo 3</Item>
          <Item>Exemplo 4</Item>
          <Item>Exemplo 5</Item>
          

        </ul>
      )}
    </div>
  );
};

export default SandwichMenu;

/* passar um array de strings simples, cada item um string */