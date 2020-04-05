import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => 
  <>
    <h1>
      {props.title}
    </h1>
  </>

const Content = (props) => (
  <>
    <Part content={props.parts[0]} />
    <Part content={props.parts[1]} />
    <Part content={props.parts[2]} />
  </>
)

const Part = (props) => (
  <>
    <p>
      {props.content.name} {props.content.exercises}
    </p>
  </>
)

const Total = (props) => (
  <>
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  </>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))