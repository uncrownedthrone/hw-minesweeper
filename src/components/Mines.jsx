// DONE - add check winner logic
// TODO - refactor easy, medium, hard mode components
// TODO - change mines, flags, etc.

import React, { useState, useEffect } from 'react'
import Boxes from './Boxes'
import axios from 'axios'
import Message from './Message'

const Mines = () => {
  const apiUrl = 'https://minesweeper-api.herokuapp.com/games'
  const [gameID, setGameID] = useState('')
  const [board, setBoard] = useState([])
  const [mines, setMines] = useState('')
  const [state, setState] = useState('')

  const startGame = async () => {
    const resp = await axios.post(apiUrl)
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

  const easyMode = async () => {
    const resp = await axios.post(apiUrl, { difficulty: 0 })
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  const mediumMode = async () => {
    const resp = await axios.post(apiUrl, { difficulty: 1 })
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  const hardMode = async () => {
    const resp = await axios.post(apiUrl, { difficulty: 2 })
    setGameID(resp.data.id)
    setBoard(resp.data.board)
    setMines(resp.data.mines)
    setState(resp.data.state)
  }

  const message = () => {
    if (state === 'lost') {
      setState({
        status: 'You lose!! Try again!'
      })
    } else if (state === 'won') {
      setState({
        status: 'You won! Play Again?'
      })
    }
  }

  console.log('testing ' + message())

  return (
    <>
      <h1>Minesweeper</h1>
      <Message displayResult={state.status} />
      <section className='gameButtons'>
        <button onClick={easyMode}>EASY</button>
        <button onClick={mediumMode}>MEDIUM</button>
        <button onClick={hardMode}>HARD</button>
        <button onClick={startGame}>NEW GAME</button>
      </section>
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
                        // isRevealed=
                        // isFlagged=
                        // isMine=
                        // neightbor=
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
    </>
  )
}
export default Mines
