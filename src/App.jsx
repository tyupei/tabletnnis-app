import { useState } from "react"
import "./App.css"

function App() {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [winningScore, setWinningScore] = useState(11)

  const isGameOver = score1 === winningScore || score2 === winningScore;

  const handleClick1 = () => !isGameOver && setScore1(score1 + 1)
  const handleClick2 = () => !isGameOver && setScore2(score2 + 1)
  
  const reset = () => {
    setScore1(0)
    setScore2(0)
  }

  const handleWinningScoreChange = (e) => {
    setWinningScore(Number(e.target.value))
    reset()
  }

  return (
    <div className="container">
      <div className="card">
        <img id="tabletennis-img" src="src/assets/624950efcd242f4eb2052b6c9dfa5edc.jpg" alt="table tennis" />
        
        <div className="content">
          <div className="setup-section">
            <span className="label">何点先取？</span>
            <select className="select-box" value={winningScore} onChange={handleWinningScoreChange}>
              <option value="5">5点</option>
              <option value="11">11点</option>
              <option value="21">21点</option>
            </select>
          </div>

          <div className="score-display">
            <span className={`score-num ${score1 === winningScore ? 'winner' : ''}`}>{score1}</span>
            <span className="divider">-</span>
            <span className={`score-num ${score2 === winningScore ? 'winner' : ''}`}>{score2}</span>
          </div>

          <div className="button-group">
            <button className="btn btn-p1" onClick={handleClick1} disabled={isGameOver}>
              +1 プレイヤー1
            </button>
            <button className="btn btn-p2" onClick={handleClick2} disabled={isGameOver}>
              +1 プレイヤー2
            </button>
          </div>

          <button className="btn btn-reset" onClick={reset}>リセット</button>
        </div>
      </div>
    </div>
  )
}

export default App