import { useState } from "react";

const Staticline = ({text, value})=>(
  <p>{text} {value}</p>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick} > {text}</button>
)
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : total/3
  const positiveFeedback = total === 0 ? 0 : good/total * 100
  
  if (total === 0) {
    return <p>No FeedBack given</p>
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Staticline text="good" value={good} />
      <Staticline text="neutral" value={neutral}/>
      <Staticline text="bad" value={bad} />
      <Staticline text="all" value={total} />
      <Staticline text="average" value={average.toFixed(1)} />
      <Staticline text="positive" value={`${positiveFeedback.toFixed(1)} %`} />
      </div>
  )
}


const App = () => {
  //saving clicks of each button in   own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
 const [selected, setSelected] = useState(0) 
 //a zro-filled array the same length as the anecdotes
 const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
 
const handleVotes = ()=>{
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}

//finding the index with the highest value in the notes array
const mostVotesIndex = votes.indexOf(Math.max(...votes))

  return(
    <div>
     <p> {anecdotes[selected]}</p>
      <Button onClick={handleVotes} text="vote"/>
      <p>has {votes[selected]} votes</p>
      <Button onClick={()=>setSelected(Math.floor(Math.random() * anecdotes.length))} text="randoms"/>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {votes[mostVotesIndex]}</p>
      <h1>Give FeedBack</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad" />

    </div>
  )
}

export default App