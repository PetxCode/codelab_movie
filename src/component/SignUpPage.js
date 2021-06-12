import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from "styled-components"
import db, {auth, provider, firebaseApp} from "../base"
import { activeUser } from '../features/Movies/authSlice'



export const SingUpPage = () => {
  const hist = useHistory()
  const dispatch =useDispatch()

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
  return (
    <div>
      <Container>
        <CTA>
          <CTALogo1>
            <img
              src="/images/cta-logo-one.svg"
            />
          </CTALogo1>
          <SignUp
          onClick={signIn}
          >Get All Here</SignUp>
          <Description>After you are done installing through yarn or npm, now you will have to include CSS in your project</Description>
          <CTALogo2>
            <img
              src="/images/cta-logo-two.png"
            />
          </CTALogo2>
        </CTA>
      </Container>
    </div>
  )
}




const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;
width: 100vw;



  &:before{
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg" );
    content: "";
    position: absolute;
    top: 0;
    right:0;
    bottom:0; 
    left:0;
    z-index: -1;
    opacity: 0.7;

  }



`
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  

`
const CTALogo1 = styled.div`

`
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover{
    background: #0483ee;
  }
`

const Description = styled.p`
text-align: center;
font-size: 13px;
letter-spacing: 1.5px;
line-height: 1.5;
`


const CTALogo2 = styled.div`
// background-color: red;

img {
  width: 100%;
  height:100%;
  object-fit: contain;
}
`