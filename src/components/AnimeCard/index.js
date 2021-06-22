import React from 'react';
import { AiFillStar } from 'react-icons/ai'

import styles from '../../styles/components/AnimeCard/AnimeCard.module.scss'

export default function Index({ anime }) {
  return (
    <div className={styles.cardContainer}>
      {/* <p>{anime.attributes.canonicalTitle}</p>
      <p>{anime.attributes.averageRating}</p> */}
      <div className={styles.cardImage}>
        <div className={styles.animeRating}>
          <p>{anime.attributes.averageRating}</p>
          <AiFillStar />
        </div>
        <img src={anime.attributes.posterImage.medium} alt="" />
      </div>
      <div className={styles.cardBody}>
        <h1>{anime.attributes.canonicalTitle}</h1>
        <p>{anime.attributes.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <p>{anime.attributes.episodeCount} episódios</p>
        {anime.attributes.status === 'finished' ? (<p>Anime finalizado.</p>) : <p>Sendo lançado.</p>}
      </div>
    </div>
  )
}