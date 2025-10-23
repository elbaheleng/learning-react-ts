import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'

function App() {

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title='Subheading'>
        This is my section.
      </Section>
    </>
  )
}

export default App
