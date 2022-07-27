import React, {useEffect, useState} from 'react'
import Search from './components/Search/Search'
import './index.css'
import Table from './components/Table/Table'

function App() {
  return (
    <div className="App">
      <Search />
      <Table/>
    </div>
  );
}

export default App;
