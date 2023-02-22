import Image from "next/image"
import Link from "next/link";
import styles from "./PokemonCard.module.css"

export default async function PokemonCard({ pokemonUrl }) {
    const response = await fetch(pokemonUrl);
    const pokemon = await response.json();

    return (
        <div className={styles.container}>
            <Link href={`/${pokemon.id}`}>
                <Image src={pokemon.sprites?.front_default} width={50} height={50} alt={pokemon.name} />
            </Link>
            <p>{pokemon.name}</p>
        </div>
    )
}