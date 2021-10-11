import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ProfileCardContainer = styled.div`
  margin: 16px;
  border: 1px solid black;

`
const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  max-height: 380px;
`

const ProfileInfo = styled.div`
  padding: 0 16px;
`

function ProfileCard (props) {

    return (
      <ProfileCardContainer>
        <ProfilePicture src={props.profile.photo}/>
        <ProfileInfo>
        <p>{props.profile.name}, {props.profile.age}</p>
        <p>{props.profile.bio}</p>
        </ProfileInfo>
      </ProfileCardContainer>
    )
  
  }
  
  export default ProfileCard;