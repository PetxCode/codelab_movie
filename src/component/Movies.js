import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { selectMovies } from '../features/Movies/movieSlice'



const Movies = () => {
  const film = useSelector(state => state.myMovies.movies)
  console.log("my films: ", film)
  return (
    <Container>
      <h4>Recommented for You</h4>
      <Content>

      {
        film && film.map(movie => (
        <Link
        to={`/${movie.id}`}
        key={movie.id}
        >
            <Wrap  >
          <img 
             src={movie.cardImg}

          />          
        </Wrap>
        </Link>
        ))
      }
{/* 
          
          <Wrap>
            <img 
              src="images/4.png"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/4.png"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/4.png"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/44.jpg"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/44.jpg"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/44.jpg"

            />
          </Wrap>
          <Wrap>
            <img 
              src="images/44.jpg"

            />
          </Wrap> */}
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
margin-bottom: 50px;
`

const Wrap = styled.div`
 border-radius: 6px;
 overflow: hidden;
 border: 3px solid rgba(249, 249, 249, 0.1);
 box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb( 0 0 0/ 73%) 0px 16px 10px -10px;
cursor: pointer; 
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;


img {
  width:100%;
  height:100%;
  object-fit: cover;
}

&:hover{
  transform: scale(1.05);
  border-color: rgba(249,249,249, 0.8);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
  rgb( 0 0 0/ 73%) 0px 16px 10px -10px
}

`