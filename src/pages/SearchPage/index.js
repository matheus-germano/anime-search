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
      <h1>Anime List</h1>
      <div className={styles.searchInputContainer}>
        <input 
          className={styles.searchInput}
          type="text"
          placeholder="Procure por um anime..."
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