import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go'

import { animes } from './data'
import AnimeCard from '../../components/AnimeCard'

import styles from '../../styles/pages/SearchPage/SearchPage.module.scss';

export default function Index() {
  const [search, setSearch] = useState('')

  const searchedAnime = animes.filter((anime) => anime.name.toLowerCase().includes(search.toLowerCase()))

  return(
    <div className={styles.SearchPageContainer}>
      <div className={styles.SearchPageHeader}>
        <h1>Anime List </h1>
        <img className={styles.headerImage} src="https://i.pinimg.com/originals/fc/f7/6a/fcf76aaac5ba83de8c968c2d4371ac58.png" alt="" />
      </div>
      <div className={styles.searchInputContainer}>
        <input 
          className={styles.searchInput}
          type="text"
          placeholder="Procure por um anime..."
          autocomplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value) }
        />
        <div className={styles.searchIcon}>
          <GoSearch />
        </div>
      </div>
      <div className={styles.animeListContainer}>
        <div className={styles.animeListWrapper}>
          {search === '' ? animes.map((anime) => (
              <AnimeCard anime={anime} key={anime.id} /> 
            )) : 
              (searchedAnime.map((anime) => (
                <AnimeCard anime={anime} key={anime.id} />
              )))
          }
        </div>
        { search !== '' && searchedAnime.length === 0 
        ? (<p>Nenhum anime encontrado.</p>)
        : null
        }
      </div>
    </div>
  )
}