import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../Library.css';


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData
    };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <div className="album">
            <Link to={`/album/${album.slug}`} key={index}>
              <img className='albumcover' src={album.albumCover} alt={album.title} />
              <span className='albuminfo'>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </span>
            </Link>
          </div>
          )
        }
      </section>
    );
  }
}
export default Library;

//Component
//changed to a class based Component
