import React, { useState, useEffect } from 'react'
import Boxes from './Boxes'
import axios from 'axios'
import Message from './Message'
import Buttons from './Buttons'

const Mines = () => {
  const apiUrl = 'https://minesweeper-api.herokuapp.com/games'
  const [gameID, setGameID] = useState('')
  const [board, setBoard] = useState([])
  const [mines, setMines] = useState('')
  const [state, setState] = useState('')

  const startGame = async diff => {
    const resp = await axios.post(
      'https://minesweeper-api.herokuapp.com/games',
      { difficulty: diff }
    )
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  useEffect(() => {
    startGame()
  }, [])

  const leftClick = async (x, y) => {
    const resp = await axios.post(`${apiUrl}/${gameID}/check`, {
      row: x,
      col: y
    })
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  const rightClick = async (x, y) => {
    const resp = await axios.post(`${apiUrl}/${gameID}/flag`, {
      row: x,
      col: y
    })
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  return (
    <>
      <h1>Minesweeper</h1>
      <Message displayResult={state} />
      <Buttons
        easyLevel={() => startGame(0)}
        mediumLevel={() => startGame(1)}
        hardLevel={() => startGame(2)}
      />
      <section>
        <table>
          <tbody>
            {board.map((col, i) => {
              return (
                <tr key={i}>
                  {col.map((row, j) => {
                    return (
                      <Boxes
                        key={j}
                        display={board[i][j]}
                        leftClick={() => leftClick(i, j)}
                        rightClick={() => rightClick(i, j)}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <p className='minesLeft'>Mines left: {mines}</p>
      </section>
      <footer>
        Made with <i class='fas fa-candy-cane'></i> at SDG
      </footer>
    </>
  )
}
export default Mines
