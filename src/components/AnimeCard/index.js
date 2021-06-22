import React from 'react';
import { AiFillStar } from 'react-icons/ai'

import styles from '../../styles/components/AnimeCard/AnimeCard.module.scss'

export default function Index({ anime }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <div className={styles.animeRating}>
          <p>{anime.rating}</p>
          <AiFillStar />
        </div>
        <img src={anime.coverImage} alt="" />
      </div>
      <div className={styles.cardBody}>
        <h1>{anime.name}</h1>
        <p>{anime.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <p>{anime.episodes} episódios</p>
        {anime.finished ? (<p>Anime finalizado.</p>) : <p>Sendo lançado.</p>}
      </div>
    </div>
  )
}