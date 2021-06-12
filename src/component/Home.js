import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewer from './Viewer'
import db from "../base"
import { useDispatch, useSelector } from 'react-redux'
import { selectMovies, setMovies } from '../features/Movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  // const film = useSelector(selectMovies)
  const film = useSelector(state => state.myMovies.movies)
// const [movies, setMovies] = useState([])

  useEffect(()=>{
      db.collection("movies").onSnapshot(snapshot => {
        const r = []
        snapshot.forEach( doc => {
          r.push({...doc.data(), id: doc.id})
          // console.log(r)
        })
       
        dispatch(setMovies(r))
      })

  }, [])
  return (
    <Container>
      <ImageSlider/>
      <Viewer />
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;

&:before {
  background: url("/images/home-background.png" ) center center / cover 
  no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  right:0;
  bottom:0; 
  left:0;
  z-index: -1;

  }
`