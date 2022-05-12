import React from 'react'
import { motion} from "framer-motion"

export default function Movie({movie}) {
return (
    <motion.div className="flip-card" animate={{opacity:1, scale:1}} 
    initial={{opacity:0, scale:0}}
    exit={{opacity:0, scale:1}} 
    layout>
    <h2>{movie.title}</h2>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
            </div>
            <div className="flip-card-back">
                    <h1>Overview</h1>
                    <p>{movie.overview}</p>
            </div>
        </div>
    </motion.div>
)
}







