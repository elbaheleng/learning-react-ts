import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import Count from './components/Count'
import List from './components/List'

function App() {
    const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title='Subheading'>
        This is my section.
      </Section>
      <Count setCount={setCount}>Count is {count}</Count>
      <List items={["Elba", "Helen", "George"]} render={(item)=> <span>{item}</span>}></List>
    </>
  )
}

export default App
