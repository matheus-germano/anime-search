import React, { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go'

import AnimeCard from '../../components/AnimeCard'

import styles from '../../styles/pages/SearchPage/SearchPage.module.scss';

const api = 'https://kitsu.io/api/edge/'

export default function Index() {
  const [animes, setAnimes] = useState({})
  const [searchedAnime, setSearchedAnime] = useState({})
  const [search, setSearch] = useState('')

  // requesting API and seting in a state
  useEffect(() => {
    async function fetchData() {
      await fetch(`${api}anime?sort=-averageRating&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          setAnimes(response)
        })
    }

    fetchData()
  }, [])

  // Filtering animes
  useEffect(() => {
    if (search !== '') {
      fetch(`${api}anime?filter[text]=${search}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          setSearchedAnime(response)
        })
    }
  }, [search])

  return (
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
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.searchIcon}>
          <GoSearch />
        </div>
      </div>
      <div className={styles.animeListContainer}>
        <div className={styles.animeListWrapper}>
          {search && !animes.data && <p>Carregando...</p>}
          {
            // Verifying if we are searching or don't
            // If it's true, then will show all available shows
            search === '' ?
              animes.data && (
                animes.data.map((anime) => (
                  <AnimeCard anime={anime} key={anime.id} />
                ))
              ) :

              // Else, means that we are searching for an anime,
              // so will appear shows filtereds by our search
              searchedAnime.data && (
                searchedAnime.data.map((anime) => (
                  <AnimeCard anime={anime} key={anime.id} />
                ))
              )
          }
        </div>
        {
          // If our search don't match with any result, 
          // will shows up a error message
          searchedAnime.data && (
            search !== '' && searchedAnime.data.length === 0
              ? (<p>Nenhum anime encontrado.</p>)
              : null
          )
        }
      </div>
    </div>
  )
}