import { memo } from "react"


interface ArchiveProps{
    show : boolean,
    sampleObjectAsProps : {}
}
const Archive = memo(function ({show, sampleObjectAsProps} : ArchiveProps){
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