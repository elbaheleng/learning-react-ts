import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import Count from './components/Count'

function App() {
    const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title='Subheading'>
        This is my section.
      </Section>
      <Count setCount={setCount}>Count is {count}</Count>
    </>
  )
}

export default App
