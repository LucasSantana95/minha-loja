import React from "react";

export default function CatButtons(props) {
    return (
        <button onClick={()=>{props.handleCategories(props.categorie.id)}}>{props.categorie.description}</button>
    )
}