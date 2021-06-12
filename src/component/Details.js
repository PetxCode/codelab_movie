import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import db from '../base'

const Details = () => {
  const {id} = useParams()
const [film, setFilm] = useState([])



console.log(film)

  useEffect(()=>{
    db.collection("movies").doc(id).get().then((doc) => {
      if(doc.exists){
        setFilm(doc.data())
      }
    })

  }, [])
  console.log(id)
  return (
    <Container>
      <Background>
        <img
          src={film && film.backgroundImg}
          // src="/images/44.jpg"
        />
      </Background>
      <ImageTitle>
        <img
          src={film && film.titleImg}
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img
              src="/images/play-icon-black.png"
          />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img
              src="/images/play-icon-white.png"
          />
          <span>TRAILER</span>
          </TrailerButton>       
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img
            src="/images/group-icon.png"
          />
        </GroupWatchButton>      
</Controls>
<SubTitles>
{film && film.subTitle}
 </SubTitles>
 <Description>
 {film && film.description}
 </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
display: flex;
flex-direction: column;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
position: fixed;
top: 10px;
bottom: 0px;
right: 0;
left: 0;
z-index: -1;
opacity: 0.7;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
`

const ImageTitle = styled.div`
margin-top:50px;
margin-bottom:50px;
height: 20vh;
width: 25vw;
min-height: 170px;
min-width: 200px;


    img {
      width: 100%;
      height:100%;
      object-fit:contain ;
    }

`

const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    align-items:center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: 0px;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
      background: rgb(198, 198, 198)
    }
`

const TrailerButton = styled(PlayButton)`
background-color: rgba(0, 0, 0, 0.3);
color: white;
border: 1px solid rgb(249,249, 249);

`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6) ;
    cursor: pointer;
    margin-right: 16px;


    span {
      font-size: 35px;
      color: white;

    }
`
const GroupWatchButton = styled(AddButton)`
background-color: black
`

const SubTitles = styled.div`
    margin-top: 30px;
    color: rgb(249, 249, 249);
    font-size: 12px; 
    min-height: 20px;
`

const Description = styled.div`
margin-top: 30px;
line-height: 1.4;
font-size: 15px;
color: rgb(246,246,246,);
max-width: 760px;

`