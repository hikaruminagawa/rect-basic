import React, { useState } from "react";
import Content from "./Content";
import Title from "./Title";
import PublishButton from "./PublishButton";

const Article = (props) => {
const [isPublished, setIsPublished] = useState(false);
const publishArticle = () =>{
    if(isPublished == false){
        setIsPublished(true);
    } else{
        setIsPublished(false);
    }
    
}

    return(
        <div>
            <Title
                title = {props.title}
            />
            <Content
                content = {props.content}
            />
            <PublishButton isPublished={isPublished} onClick={()=> publishArticle()} />
        </div>
    )
}

export default Article;