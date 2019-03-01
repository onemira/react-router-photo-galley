import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photo from '../data/photo.json'

class PhotoDetail extends Component {
  render() {
    const currentPhoto = photo[this.props.match.params.category]
    console.log(this.props.match.params)
    console.log(currentPhoto)
    return (
      <>
        <header>
          <h1>Things I like</h1>
          <h2>A photo Gallery by Jason Perry</h2>
        </header>
        <section>
          Home/{currentPhoto.title}/
          {currentPhoto.photos[this.props.match.params.index].title}
        </section>
        <section>
          <header>
            {currentPhoto.photos[this.props.match.params.index].title}
          </header>
          <a
            href={currentPhoto.photos[this.props.match.params.index].sourceURL}
          />
          <img
            src={currentPhoto.photos[this.props.match.params.index].imageURL}
          />
        </section>
      </>
    )
  }
}

export default PhotoDetail
