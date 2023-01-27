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
  console.log('Content: ', prop)

  return (
    <div>
      <Part name={prop.parts[0].name} exercises={prop.parts[0].exercises} />
      <Part name={prop.parts[1].name} exercises={prop.parts[1].exercises} />
      <Part name={prop.parts[2].name} exercises={prop.parts[2].exercises} />
    </div>
  )
}

const Total = (prop) => {
  // console.log('Total', prop)

  return (
    <div>
      <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App