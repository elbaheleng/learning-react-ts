import React, { useState } from 'react'

import Section from './Section'
import Count from './Count'
import List from './List'
import Heading from './Heading'
import { Link } from 'react-router-dom'

const Welcome = () => {
      const [count, setCount] = useState<number>(1)

  return (
    <>
    <Heading title={"Hello"} />
      <Section title='Subheading'>
        This is my section.
      </Section>
      <Count setCount={setCount}>Count is {count}</Count>
      <List items={["Elba", "Helen", "George"]} render={(item) => <span>{item}</span>}></List>
      <Link to='/hooks'><button>Hooks</button></Link>
    </>
  )
}

export default Welcome