import React, { useState, useEffect } from 'react'
import Boxes from './Boxes'
import axios from 'axios'

const Mines = () => {
  const [gameID, setGameID] = useState([])
  const [board, setBoard] = useState([])
  const [mines, setMines] = useState([])
  const [state, setState] = useState([])
  const startGame = async () => {
    const resp = await axios.post(
      'https://minesweeper-api.herokuapp.com/games',
      { difficulty: 0 }
    )
    console.log(resp.data)
    console.log('1-gameID is ' + resp.data.id)
    console.log('2-the board ' + resp.data.board)
    console.log('3-the mines ' + resp.data.mines)
    console.log('4-the state ' + resp.data.state)
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  useEffect(() => {
    startGame()
  }, [])

  const leftClick = (x, y) => {
    axios.post(`http://minesweeper-api.herokuapp.com/games/${gameID}/check`, {
      row: x,
      col: y
    })
  }

  const rightClick = (x, y) => {
    axios.post(`http://minesweeper-api.herokuapp.com/games/${gameID}/flag`, {
      row: x,
      col: y
    })
  }

  return (
    <>
      <h1>Minesweeper</h1>
      <p>You are playing {gameID}</p>
      <button onClick={startGame}>NEW GAME?</button>
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
                        lefClick={leftClick(i, j)}
                        rightClick={rightClick(i, j)}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      <section className='gameButtons'>
        <button>EASY?</button>
        <button>MEDIUM??</button>
        <button>HARD?!?!</button>
      </section>
      <p className='winnerLoser'>WHO WON</p>
    </>
  )
}

export default Mines
