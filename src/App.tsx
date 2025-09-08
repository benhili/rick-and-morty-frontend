import "./App.css";
import { CharacterCard } from "./components/CharacterCard";
import { LoadingCard } from "./components/LoadingCard";
import { useState, useEffect, useRef, useCallback } from "react";
import type { ApiResponse, Character } from "./types.ts";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [error, setError] = useState(false);

  const observerTarget = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && !loading && currentPage < pages) {
        setCurrentPage((prev) => prev + 1);
      }
    },
    [loading, currentPage, pages]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        const data: ApiResponse = await response.json();
        setCharacters((prev) => {
          // HACK: probably not necessary but there are duplicate IDs in dev mode
          if (prev[0] && prev[0].id === data.results[0].id) {
            return data.results;
          } else {
            return [...prev, ...data.results];
          }
        });
        setPages(data.info?.pages);
      } catch (err) {
        // TODO: add proper error handling
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  if (characters.length < 0 || error) {
    return <h1>Aw geez Rick we couldn't find any characters</h1>;
  }

  // TODO: Updating this doesn't actually change the grid size properly
  const gridSize = 4;

  return (
    <div className="App">
      <header className="App-header">
        <div className={`grid grid-cols-${gridSize} gap-4 p-4`}>
          {characters.map((character, index) => (
            <CharacterCard
              key={`${character.name}-${index}`}
              character={character}
            />
          ))}

          {/* Placeholder during fetch of a new page */}
          {loading && (
            <>
              {Array(gridSize)
                .fill(null)
                .map((_, index) => (
                  <LoadingCard key={`loading-${index}`} />
                ))}
            </>
          )}
        </div>
        <div ref={observerTarget} className="h-10" />
      </header>
    </div>
  );
}

export default App;
