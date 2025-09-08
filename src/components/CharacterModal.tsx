import type { Character } from "../types";

interface CharacterModalProps {
  character: Character;
  id: string;
}

const parseEpisodeLinks = (episodes: string[]) => {
  return episodes.map((episodeUrl) => {
    const episodeNumber = episodeUrl.split("/").pop();
    return (
      <a
        key={episodeNumber}
        href={episodeUrl}
        className="link link-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {episodeNumber}{" "}
      </a>
    );
  });
};

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  id,
}) => {
  return (
    <dialog id={`modal_${id}`} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="grid grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
          <div className="avatar">
            <div className="w-48 rounded">
              <img src={character.image} alt={character.name} />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">{character.name}</h3>
            <p>Current status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <div>
              <p>Appears in episodes: {parseEpisodeLinks(character.episode)}</p>
            </div>
            <p>Location: {character.location.name}</p>
            <p>Species: {character.species}</p>
            {character.type && <p>Type: {character.type}</p>}
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
