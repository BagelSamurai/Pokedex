import { useState } from "react";

function Sidebar({ pokeData }: { pokeData: any }) {
  const [isOverlayVisible, setOverlayVisibility] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleButtonClick = (pokemon: any) => {
    setOverlayVisibility(true);
    setSelectedPokemon(pokemon);
  };

  const handleCloseOverlay = () => {
    setOverlayVisibility(false);
  };
  const filteredPokeData = pokeData.filter((pokemon: any) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {" "}
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-[1rem] border-2 border-rose-300  hover:border-black font-semibold cursor-pointer uppercase max-w-[20rem] mb-4"
      />
      {/* Render filtered pokemon names */}
      <aside className="grid grid-cols-6 gap-[4rem]">
        {" "}
        {filteredPokeData &&
          filteredPokeData.map((pokemon: any) => (
            <button
              onClick={() => handleButtonClick(pokemon)}
              key={pokemon.name}
              className="p-[1rem] border-2 border-rose-300 hover:bg-rose-300 hover:border-black font-semibold cursor-pointer uppercase max-w-[10rem]"
            >
              <img src={pokemon.sprites.front_default} alt="image" />
              {pokemon.name}
            </button>
          ))}
        {/* Render pokemon names */}
        {pokeData.map((pokemon: any) => (
          <button
            onClick={() => handleButtonClick(pokemon)}
            key={pokemon.name}
            className="p-[1rem] border-2 border-rose-300 hover:bg-rose-300 hover:border-black font-semibold cursor-pointer uppercase max-w-[10rem]"
          >
            <img src={pokemon.sprites.front_default} alt="image" />
            {pokemon.name}
          </button>
        ))}
        {isOverlayVisible && (
          <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="bg-neutral-100 opacity-[95%] w-[800px] h-[600px] rounded shadow-md border-[.5rem] border-rose-600  ">
              <div className="flex flex-col items-center justify-content  text-center mt-9">
                {" "}
                <ul className="list-none flex flex-col gap-1 text-center justify-content items-center text-xl">
                  <li
                    className="text-3xl font-semibold uppercase text-rose-600 mb-3
                "
                  >
                    {selectedPokemon.name}
                  </li>

                  <li className="flex mb-2">
                    <img
                      width={150}
                      height={150}
                      src={selectedPokemon.sprites.front_default}
                      alt="Unavailable"
                    />
                    <img
                      width={150}
                      height={150}
                      src={selectedPokemon.sprites.back_default}
                      alt="Unavailable"
                    />
                    <img
                      width={150}
                      height={150}
                      src={selectedPokemon.sprites.front_shiny}
                      alt="Unavailable"
                    />
                    <img
                      width={150}
                      height={150}
                      src={selectedPokemon.sprites.back_shiny}
                      alt="Unavailable"
                    />
                  </li>
                  <li className="flex gap-7 mb-3">
                    <li>
                      <span className="text-2xl font-semibold">Height:</span>{" "}
                      {selectedPokemon.height}
                    </li>
                    <li>
                      <span className="text-2xl font-semibold">Weight:</span>{" "}
                      {selectedPokemon.weight}
                    </li>
                  </li>
                  <li className="flex items-center gap-9 uppercase mt-4">
                    <span className="text-2xl font-semibold">Types: </span>
                    {selectedPokemon.types.map((type: any, index: number) => (
                      <li
                        key={index}
                        className="p-2 rounded-[.5em] bg-rose-600 text-neutral-100"
                      >
                        {type.type.name}
                      </li>
                    ))}
                  </li>
                  <li className="flex gap-9 uppercase mt-4">
                    <span className="text-2xl font-semibold">Abilities: </span>
                    {selectedPokemon.abilities.map(
                      (ability: any, index: number) => (
                        <li
                          key={index}
                          className="p-2 rounded-[.5em] bg-rose-600 text-neutral-100"
                        >
                          {ability.ability.name}
                        </li>
                      )
                    )}
                  </li>
                </ul>
                <button
                  onClick={handleCloseOverlay}
                  className="bg-rose-600  hover:bg-slate-100 hover:text-rose-600 hover:border hover:border-rose-500 text-white px-6 py-3 rounded mt-[5rem]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;
