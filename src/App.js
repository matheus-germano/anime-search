import React, { useState } from "react";

import SearchPage from './pages/SearchPage'

const animes = [
  'Naruto',
  'One Piece',
  'Boku no Hero Academy',
  'Jujutsu Kaisen',
  'Shingeki no Kyojin',
  'One Punch Man',
  'Tokyo Ghoul',
  'Boruto: Naruto Next Generations'
]

function App() {
  const [search, setSearch] = useState('')

  const searchedAnime = animes.filter((anime) => anime.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <SearchPage />
    </>
  );
}

export default App;