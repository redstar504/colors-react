import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";

export default function Color({id, title, color, rating, onRemove = f => f}) {
    return (
        <section>
            <h2>{title}</h2>
            <button onClick={(() => onRemove(id))}><FaTrash /></button>
            <div style={{height: 50, backgroundColor: color}} />
            <StarRating selectedStars={rating} />
        </section>
    );
}