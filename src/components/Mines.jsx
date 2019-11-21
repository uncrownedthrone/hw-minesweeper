import React, { useState, useEffect } from 'react'
// import Boxes from './Boxes'
// import Buttons from './Buttons'
import axios from 'axios'

const Mines = () => {
  const [gameData, setGameData] = useState([])
  const [board, setBoard] = useState([])
  const [gameID, setGameID] = useState([])
  const [mines, setMines] = useState([])
  const [state, setState] = useState([])
  const getApiInfo = async () => {
    const resp = await axios.post('https://minesweeper-api.herokuapp.com/games')
    console.log(resp.data)
    setGameData(resp.data.results)
  }

  const startGame = async () => {
    const resp = await axios.post('https://minesweeper-api.herokuapp.com/games')
    console.log(resp.data)
  }

  useEffect(() => {
    getApiInfo()
    startGame()
  }, [])

  return (
    <>
      <h1>Minesweeper</h1>
      <button onClick={startGame}>NEW GAME</button>
      <section>
        <table>
          <tbody>
            <tr>
              <td>TEST</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='gameButtons'>
        <button>EASY</button>
        <button>MEDIUM</button>
        <button>HARD</button>
      </section>
      <p>WIN OR LOSE</p>
    </>
  )
}

export default Mines
