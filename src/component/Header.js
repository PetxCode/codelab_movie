import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from "styled-components"
import db, {auth, provider, firebaseApp} from "../base"
import { activeUser, logOut } from '../features/Movies/authSlice'
import firebase from "firebase"


const Header = () => {
  const hist = useHistory()
  const dispatch = useDispatch()
  const name = useSelector(state => state.user.name)
  const email = useSelector(state => state.user.email)
  const photo = useSelector(state => state.user.photo)

 const signOut =  () => {
  firebase.auth().signOut()
  hist.push("/signUp");
  window.location.reload()
   
 }

  const signIn =async () => {
   
    await firebaseApp.auth().signInWithPopup(provider).then(auth => {
      dispatch(activeUser({
        name: auth.user.displayName,
        email: auth.user.email,
        photo: auth.user.photoURL
      }))
      hist.push('/')
    })
  }




useEffect(()=>{
  auth.onAuthStateChanged(async (user) => {
    if(user){
      dispatch(activeUser({
        name:  user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      hist.push('/')
    }
  })
}, [])

 
  console.log("Name: ", name)
  return (
    <Nav>
      <Link to="/" >
      <Logo src="/images/logo.png" />
      </Link>

      {
        !name ? <Login>
         <Link 
         to="/signUp" 
         style={{
           textDecoration: "none"
         }}
         >
         <LoginHolder
         >Login</LoginHolder>
         </Link>
        </Login> : (
      <>    
      <NavMenu> 
             
      <a>
        <Link to="/" >
        <img src="/images/home-icon.svg" />
        </Link>
        <span>HOME</span>
      </a> 

      <a>
        <img src="/images/search-icon.svg" />
        <span>SEARCH</span>
      </a> 

      <a>
        <img src="/images/watchlist-icon.svg" />
        <span>WATCHLIST</span>
      </a> 

      <a>
        <img src="/images/original-icon.svg" />
        <span>ORIGINAL</span>
      </a> 

      <a>
        <img src="/images/movie-icon.svg" />
        <span>MOVIES</span>
      </a> 

      <a>
        <img src="/images/series-icon.svg" />
        <span>SERIES</span>
      </a> 
      
    </NavMenu>  
    <UserImage
      onClick={() => {
        signOut()
      }}
    src={photo} />
    </>
        )
      }

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
width:100vw;
`
const Logo = styled.img`
width: 80px;
margin-top: 10px;
overflow: hidden;
`

const NavMenu = styled.div`
display:flex;
flex: 1;
margin-left: 20px;
align-items: center;

a{
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  img{
    width:20px;
    height:20px
  }

  span{
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1.42px;
    position: relative;

    &:after{
      content: "";
      height: 2px;
      // width:5px; 
      background: white;
      position: absolute;
      left: 0;
      right:0;
      bottom:-6px;
      opacity: 0;
      transform: scaleX(1)
      transform-origin: left center;
      transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s
    }
  }
  &:hover{
    span:after{
      transform: scaleX(1);
      opacity: 1
    }
  }
}
`

const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius: 20px;
object-fit: cover;
cursor: pointer;

`

const Login = styled.div`
color: white;
display:flex;
justify-content: flex-end;
width:100vw;

`

const LoginHolder = styled.div`
color: white;
display:flex;
justify-content: center;
width:100px;
border: 2px solid white;

`

