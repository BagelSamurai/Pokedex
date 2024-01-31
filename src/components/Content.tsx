import Sidebar from "./Sidebar";

import { useQuery } from "@tanstack/react-query";

function Content() {
  const fetchPokemon = async (pokemonNumber: any) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
    ).then((res) => res.json());
    return res; // Return the Pokémon data
  };

  const fetchPokemonArray = async () => {
    const pokemonArray = [];
    for (let i = 1; i <= 1000; i++) {
      try {
        const pokemonData = await fetchPokemon(i);
        pokemonArray.push(pokemonData);
      } catch (error) {
        console.error(error);
      }
    }
    return pokemonArray;
  };

  const {
    data: pokemonData,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchPokemonArray(), // Pass the function directly, no need for an arrow function
    queryKey: ["pokemonData"],
  });

  if (isLoading) {
    return (
      <div className="text-5xl flex justify-center items-center mt-[20rem]">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-5xl flex justify-center items-center mt-[20rem]">
        Error fetching Pokemon data
      </div>
    );
  }

  return (
    <main className="mt-[6rem] flex flex-col justify-center items-center p-5">
      <h2 className="text-3xl font-semibold mb-9">Click to reveal info.</h2>
      <Sidebar pokeData={pokemonData} />
    </main>
  );
}

export default Content;
