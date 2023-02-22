import PokemonCard from "./PokemonCard"
import styles from "./page.module.css"

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=100");
  const allPoke = await res.json();

  return (
    <main className={styles.main}>
      <h1 className="">Pokemon Fun</h1>
      <div className={styles.container}>
        {allPoke.results.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </div>
    </main>
  )
}
