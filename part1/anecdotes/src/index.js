import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
  <>
    <button className="Button" onClick={handleClick}>{text}</button>
  </>
)

const Title = ({text}) => (
  <h1>{text}</h1>
)

const TopAnecdote = ({anecdotes, votes}) => {
  let maxIndex = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  return(
    <>
      {anecdotes[maxIndex]}
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  if(votes.length === 0) {
    setVotes(new Array(anecdotes.length).fill(0))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const selectRandomAnecdote = () => {
    while(true){
      let a = Math.floor(Math.random() * anecdotes.length)
      if(a !== selected){
        return setSelected(a)
      }
    }
  }

  return (
    <div>
      <Title text="Random Anecdote"/>
      {props.anecdotes[selected]}
      <br/>
        has {votes[selected]} votes
      <p/>
      <Button text="vote" handleClick={vote}/>
      <Button text="next anecdote" handleClick={selectRandomAnecdote}/>
      <Title text="Anecdote with most votes"/>
      <TopAnecdote anecdotes={anecdotes} votes={votes}/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)