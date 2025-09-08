import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterCard } from "../CharacterCard";
import { CharacterGender, CharacterStatus } from "../../types";

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: CharacterStatus.ALIVE,
  species: "Human",
  type: "",
  gender: CharacterGender.MALE,
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

describe("CharacterCard", () => {
  it("renders character card with correct content", () => {
    render(<CharacterCard character={mockCharacter} />);

    const card = screen.getByTestId("character-card-rick-sanchez");
    const name = screen.getByTestId("character-name-rick-sanchez");
    const image = screen.getByTestId("character-image-rick-sanchez");

    expect(card).toBeInTheDocument();
    expect(name).toHaveTextContent("Rick Sanchez");
    expect(image).toHaveAttribute(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });

  it("opens modal when card is clicked", () => {
    const mockShowModal = jest.fn();
    HTMLDialogElement.prototype.showModal = mockShowModal;

    render(<CharacterCard character={mockCharacter} />);

    const card = screen.getByTestId("character-card-rick-sanchez");
    fireEvent.click(card);
    expect(mockShowModal).toHaveBeenCalled();
  });

  it("creates modal with correct id", () => {
    render(<CharacterCard character={mockCharacter} />);

    const modal = document.getElementById("modal_rick-sanchez");
    expect(modal).toBeInTheDocument();
  });
});
