import React from "react";
import "./StarWars.css";

import { Card } from "./Card";

export const StarWarsChars = props => {
  return (
    <div className="starWars-container">
      {props.characters.map(character => (
        <Card key={character.name} character={character} />
      ))}
    </div>
  );
};
