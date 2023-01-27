const Header = (prop) => {
  // console.log('Header: ', prop)

  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Part = (prop) => {
  // console.log('Part: ', prop)
  
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}  />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App