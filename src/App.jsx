// import { useState } from 'react'

import './App.css'
import CategoryNav from './components/CategoryNav'
import TopNav from './components/TopNav'
import MainComponent from './components/MainComponent'

function App() {

  return (
    <>
      <div className="App">
        <header>
          <TopNav />
          <CategoryNav />
        </header>
        <main>
          <MainComponent />
        </main>
        <footer>
          <p>&copy;2025 SARAVI LLC</p>
        </footer>
      </div>
    </>
  )
}

export default App
