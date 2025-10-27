import React, { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'
import Button from './Button'

interface User{
id: number,
username:string,
}

type fibFunction = (n:number) => number

const myNum:number = 24

const fib: fibFunction = (n) => {
    if (n<2)
        return n
    return fib(n-1) + fib(n-2)
}

const Hooks1 = () => {
    const [count, setCount] = useState<number>(0);
    const [users,setUsers] = useState<User[]>([]);

    const inputRef = useRef<HTMLInputElement>(null)
    console.log("inputRef.current",inputRef?.current);
     console.log("inputRef.current.value",inputRef?.current?.value);

    

    const addTwo = useCallback((e : MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) : void => setCount(prev => prev + 2),[]) //e used just to demonstrate

    //useMemo - Caches a computed value between renders
    const result = useMemo<number>(() => fib(myNum),[myNum])

    useEffect(()=>{
        console.log("mounting");
        console.log("Users:", users);
        return (()=> console.log("unmounting")
        )
    },[users])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={addTwo}>Add two</button>

    <h3> Fibonaci of {myNum} is {result}</h3>

    <input ref={inputRef} type="text" />


    <p>Typescript</p>
    <Button backgroundColor= "red" 
    textColor="purple" />
    </>
  )
}

export default Hooks1