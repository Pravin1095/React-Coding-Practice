import { useEffect, useState } from "react";

import { useFetchData } from "../hooks/useFetchData";
import { Container, EachTitle } from "./InfiniteScroll.styles";
import axios from "axios";
const InfiniteScroll = ()=>{
    
    let limit=10
    const [start, setStart] = useState(0);
let url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
// const {data, loading} = useFetchData({url})

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)



useEffect(()=>{
const handleGetData = async ()=>{
    setLoading(true)
    try{
const res = await axios.get(url)
setData((prev)=>[...prev,...res?.data])
    }
    catch(err){
        console.log("Something went wrong",err)
    }
    finally{
        setLoading(false)
    }


}
handleGetData()
},[start])


useEffect(()=>{
    if(loading){
        return
    }
const handleScroll = ()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-2)
{
    setStart((prev)=>prev+10)
}}

window.addEventListener('scroll',handleScroll)

return(()=>{
    window.removeEventListener('scroll', handleScroll)
})
},[loading, data.length])



console.log("check data", data)

// window.onscroll= async()=>{

// if(window.innerHeight+window.scrollY>=document.body.offsetHeight-2){  //bufferHeight of 2
        
//     start+=10
//     limit+=10
//     console.log("check called",start,limit,url, window.innerHeight,window.scrollY, document.body.offsetHeight)
//     const res = await axios.get(url)
//     setData(res?.data)
    

// }
// }

console.log("check height",window.innerHeight,window.scrollY, document.body.offsetHeight )

//Sample Code with Intersection Observer

// 1. Define the callback function that runs when visibility changes
// const callback = (entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log("The element is now visible on screen!");
//       // Run your logic here (e.g., fetch data, load image)
//     }
//   });
// };

// // 2. Create the Observer instance
// const observer = new IntersectionObserver(callback);

// // 3. Point it at a DOM element
// const targetElement = document.querySelector('#my-sentinel');
// observer.observe(targetElement);

return(
    <Container>
{data?.map((d)=>{
    return <EachTitle>{d?.title}</EachTitle>

    
})}
    </Container>
)
}


export default InfiniteScroll