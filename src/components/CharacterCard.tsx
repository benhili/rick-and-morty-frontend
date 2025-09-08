import React from "react";
import { CharacterModal } from "./CharacterModal";
import type { Character } from "../types";

interface CharacterProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  const id = character.name.toLowerCase().replace(/\s+/g, "-");

  const handleClick = () => {
    (document.getElementById(`modal_${id}`) as HTMLDialogElement)?.showModal();
  };

  return (
    <>
      <div
        className="card bg-base-100 w-full shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleClick}
        data-testid={`character-card-${id}`}
      >
        <figure>
          <img
            src={character.image}
            alt={character.name}
            data-testid={`character-image-${id}`}
            className="w-full h-auto"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title" data-testid={`character-name-${id}`}>
            {character.name}
          </h2>
        </div>
      </div>
      <CharacterModal character={character} id={id} />
    </>
  );
};
