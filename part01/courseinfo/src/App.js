const Header = (prop) => {
  // console.log('Header: ', prop)

  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Part = (prop) => {
  console.log('Part: ', prop)
  
  return (
    <div>
      <p>
        {prop.name} {prop.exercises}
      </p>
    </div>
  )
}

const Content = (prop) => {
  // console.log('Content: ', prop)

  return (
    <div>
      <Part name={prop.part1} exercises={prop.exercises1} />
      <Part name={prop.part2} exercises={prop.exercises2} />
      <Part name={prop.part3} exercises={prop.exercises3} />
    </div>
  )
}

const Total = (prop) => {
  // console.log('Total', prop)

  return (
    <div>
      <p>Number of exercises {prop.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises2} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}  />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App