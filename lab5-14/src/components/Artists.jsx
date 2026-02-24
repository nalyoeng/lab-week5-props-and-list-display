import React from 'react'

const Artists = ({person}) => {
  return (
    <div class="item">
        <img src={person.image} alt="" />
        <h2>{person.name}</h2>
        <h3>Best Song: {person.bestSong}</h3>
    </div>
  )
}

export default Artists