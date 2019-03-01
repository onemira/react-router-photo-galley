import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photo from '../data/photo.json'

class CategoryList extends Component {
  render() {
    console.log(photo)
    return (
      <>
        <main>
          <header>
            <h1>Things I like</h1>
            <h2>A photo Gallery by Jason Perry</h2>
          </header>
          <section>Home</section>
          {Object.keys(photo).map(category => {
            return (
              <section>
                <ul>
                  {/* <section key={i} className="hobby"> */}
                  <li>
                    <p>
                      <Link to={`/${category}`}>{photo[category].title} </Link>
                    </p>
                    <p>{photo[category].description}</p>
                    <img src={photo[category].photos[0].imageURL} />
                  </li>
                </ul>
              </section>
            )
          })}
        </main>
      </>
    )
  }
}

export default CategoryList
