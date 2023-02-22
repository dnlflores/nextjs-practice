import Image from "next/image"
import styles from "./page.module.css"

export default async function PokemonDetail({ params }) {
    const { pokeId } = params
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    const pokemon = await res.json()

    return (
        <div className={styles.container}>
            <h1>{pokemon.name}'s Details</h1>
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={250} height={500} />
            <p>National Pokedex Number: {pokemon.id}</p>
            <h2>{pokemon.name}'s Moves</h2>
            <div className={styles.moveContainer}>
                {pokemon.moves.map(moveObj => {
                    const { move } = moveObj
                    return <p key={move.name}>{move.name}</p>
                })}
            </div>
        </div>
    )
}