import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

// Mapeamento geral dos dados
export const getStaticPaths = async() => {

  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() }
    }
  })

  return {
    paths,
    // Pre render
    fallback: false
  }

}

// Mapeamento individual - context (id)
export const getStaticProps = async(context) => {

  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json();
  console.log(data);

  return {
    props: { pokemon: data }
  }
  
}

export default function Pokemon({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  // console.log(pokemon)
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</h1>
      <Image
        src={imageUrl}
        width="200"
        height="200"
        alt={pokemon.species.name}
      />
      <div className={styles.id_container}>
        <h3>Number:</h3>
        <p className={styles.id}>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className={styles.types_container}>Type:</h3>
        {pokemon.types.map((typePok, index) => (
          <span key={index} className={`${styles.type} ${styles['type_' + typePok.type.name]}`}>{typePok.type.name}</span>
          ))}
        
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}