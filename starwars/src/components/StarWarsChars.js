import React from "react";
import { Card } from "./Card";

export const StarWarsChars = props => {
  return (
    <div>
      {props.characters.map(character => (
        <Card character={character} />
      ))}
    </div>
  );
};
