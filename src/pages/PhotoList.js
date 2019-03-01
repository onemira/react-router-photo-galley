import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photo from '../data/photo.json'

class PhotoList extends Component {
  render() {
    console.log(this.props.match.params.category)
    const displayData = photo[this.props.match.params.category]
    console.log(displayData)
    return (
      <>
        <header>
          <h1>Things I like</h1>
          <h2>A photo Gallery by Jason Perry</h2>
        </header>
        <section>Home</section>
        <section>
          <header>{displayData.title}</header>
          <p>{displayData.description}</p>
          <section>
            {displayData.photos.map((photo, index) => {
              console.log(photo)
              return (
                <Link
                  key={index}
                  to={`/${this.props.match.params.category}/${index}`}
                >
                  <img src={photo.imageURL} alt={photo.title} />
                </Link>
              )
            })}
          </section>
        </section>
      </>
    )
  }
}
export default PhotoList
