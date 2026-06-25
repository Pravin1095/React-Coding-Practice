import { memo } from "react"

const Archive = memo(function ({show}){
    const bigData = Array.from({length:1000},()=>'WORD')
    return(
<>
{show && bigData.map((d, index)=>{
return <li>
    {index} : {d}
</li>
})}
</>
    )
})

export default Archive