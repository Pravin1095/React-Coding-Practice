import { useState } from "react";
import { FaqContainer, Title, Content } from "./Faqs.styles.js";
import { FaArrowDown } from "react-icons/fa";

const Faqs = () => {
  const questions = [
    {
      id: 1,
      title: "What is React?",
      content: "A JavaScript library for building UIs.",
    },
    {
      id: 2,
      title: "What are Hooks?",
      content: "Functions that let you use state in functional components.",
    },
    {
      id: 3,
      title: "What is JSX?",
      content: "A syntax extension for JavaScript.",
    },
  ];

  const [contentId, setContentId] = useState(0)

  const handleTab = (id)=>{
    if(id===contentId){
        setContentId(0)
    }
    else{
        setContentId(id)
    }
  }
  return (
    <FaqContainer>
      {questions &&
        questions.map((data) => {
          return <><Title onClick={()=>handleTab(data.id)} id="title">{data.title}
          <FaArrowDown />
           </Title>
          {contentId===data.id && <Content>{data.content}</Content>}
         
          </>;
        })}
    </FaqContainer>
  );
};

export default Faqs;
