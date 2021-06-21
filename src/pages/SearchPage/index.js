import React from 'react';
import { GoSearch } from 'react-icons/go'

import styles from '../../styles/pages/SearchPage/SearchPage.module.scss';

export default function Index() {
  return(
    <div className={styles.SearchPageContainer}>
      <h1>Anime List</h1>
      <div className={styles.searchInput}>
        <div classname={styles.searchIcon}>
          <GoSearch />
        </div>
        <input 
          type="text"
          placeholder="Procure por um anime..."
        />
      </div>
    </div>
  )
}