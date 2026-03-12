const Header = () => {
  return (
    <div>
      <h1>Half Stack Application Development</h1>
      <p>react -version  20.0</p>
    </div>

  )
}

const Content = () => {
  const parts = [
    {partno: 1, part_name:'Fundamentals of React'},
    {partno: 2, part_name: 'Using "props" to pass data'},
    {partno: 3, part_name: 'State of a component'},
  ]
  const exercise = [
    {prt_no:1, noOfExs: 10},
    {prt_no:2, noOfExs: 7},
    {prt_no:3, noOfExs: 14}
  ]
  return(
    <div>
      <h2>PartNo Part Name</h2>
      <p>#{parts[0].partno}  {parts[0].part_name}</p>
      <p>#{parts[1].partno} {parts[1].part_name}</p>
      <p>#{parts[2].partno} {parts[2].part_name}</p>
      <h3>Exercises on each Part</h3>
      <p>#{exercise[0].prt_no} Exercises {exercise[0].noOfExs}</p>
      <p>#{exercise[1].prt_no} Exercises {exercise[1].noOfExs}</p>
      <p>#{exercise[2].prt_no} Exercises {exercise[2].noOfExs}</p>
      
    </div>
  )
}

const Total = () => {
  return(
    <div>
      <h4>Total Number of Exercises</h4>
      <p>31</p>
      </div>
  )
}





const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'using props to pass data'
  const exercises2 = 7
  const part3 ='State of a component'
  const exercises3 = 14
  
  return (
    <>
      <Header />
      <Content />
      <Total />
   
    </>
  )
}


export default App