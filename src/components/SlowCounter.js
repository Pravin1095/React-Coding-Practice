import { useState } from "react"

// Previous logic without optimizaation
// const SlowComponent = ()=>{
//     const words = Array.from({length : 1000}, ()=>"WORD")
//    return <ul>
// {words.map((words,i)=>{
//     return <li>
//         {i} : {words}
//     </li>
// })}
//     </ul>
// }

// const SlowCounter = ()=>{
//     const [count, setCount] = useState(0)
//     return <><button onClick={()=>setCount((prev)=>prev+1)}>{`Increase: ${count}`}</button>

//     <SlowComponent /></>

// }

// export default SlowCounter
//After optimization

const SlowComponent = ()=>{
    const words = Array.from({length : 1000}, ()=>"WORD")
   return <ul>
{words.map((words,i)=>{
    return <li>
        {i} : {words}
    </li>
})}
    </ul>
}

const SlowCounter = ({children})=>{
    const [count, setCount] = useState(0)
    return <><button onClick={()=>setCount((prev)=>prev+1)}>{`Increase: ${count}`}</button>

    {children}</>

}

const OptimizedVersion = ()=>{
return <SlowCounter>
    <SlowComponent />
</SlowCounter>
}

export default OptimizedVersion

//Notes:

//When the SlowComponent is present inside SlowCounter, it affects the counter as well because
//SlowComponent renders every time when we click on the button as state updates the rerendering happens

//Prevention:

//We need to place the counter in a separate component and pass children prop to it and 
//place children after counter logic.

//We can test this using Profiler