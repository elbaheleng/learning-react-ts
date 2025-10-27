import React from 'react'

type Color = "red" | "blue"| "green" | "yellow" | "purple";

type ButtonProps = {
    backgroundColor: Color;
    textColor:Color;
    fontSize?: number;
    pillShape?: boolean;
    padding?: [number, number, number, number];

}

const Button = ({backgroundColor,
    textColor,
   }: ButtonProps) => {
  return (
    <button style={{backgroundColor: backgroundColor, color: textColor}}>Click me</button>
  )
}

export default Button