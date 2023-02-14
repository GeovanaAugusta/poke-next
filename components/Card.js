import Image from 'next/image';
import styles from '../styles/Card.module.css';
import Link from 'next/link';

export default function Card({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
        Detalhes
      </Link>
    </div>
  );
}
