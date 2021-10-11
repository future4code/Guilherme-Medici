import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import ProfileCard from './ProfileCard'
import ChooseButtons from './ChooseButtons'

function ChooseProfilePage() {
  const [ProfileToChoose, setProfileToChoose] = useState({})

  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person').then(response => {
      setProfileToChoose(response.data.profile)
    })
  }

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: ProfileToChoose.id
    }

    setProfileToChoose(null)

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person', body).then(response => {
      console.log(response)
      getProfileToChoose()
    })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

  return (
    <div>
      { ProfileToChoose ?
       (<>
          <ProfileCard profile={ProfileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>) : <p>Loading...</p>
      }
    </div>

  )
}

export default ChooseProfilePage;
