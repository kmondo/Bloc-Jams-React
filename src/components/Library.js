import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import styled from 'styled-components';

const Img= styled.img`
  position: relative;
  width: 40%;

`;

const TitleWrap= styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 40%
  color: white;
  font-size: 1em;
`;

const ArtistWrap= styled.div`
position: absolute;
top: 220px;
left: 0;
width: 40%
color: white;
font-size: 1em;
`;

const LengthWrap= styled.div`
position: absolute;
top: 240px;
left: 0;
width: 40%
color: white;
font-size: 1em;
`;

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
            <Link to={`/album/${album.slug}`} key={index}>
                <Img src={album.albumCover} alt={album.title} />
                <TitleWrap>{album.title}</TitleWrap>
                <ArtistWrap>{album.artist}</ArtistWrap>
                <LengthWrap>{album.songs.length} songs</LengthWrap>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;

//Component
//changed to a class based Component
