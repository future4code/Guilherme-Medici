import React from 'react'
import { Likes, MainContainer, BoxText, Button } from './DetailsPageStyle'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from "../../constants/urls"
import { useParams, useHistory } from 'react-router-dom'
import ReactPlayer from "react-player"
import { goToSearchPage } from '../../routes/coordinator'

const DetailsPage = () => {
    const [currentVideo, setCurrentVideo] = useState([])
    const { id } = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = 'key=AIzaSyCEcFUQdzEgARTr9YZ4asBFxil1nRZU7yI'

        axios
            .get(`${BASE_URL}videos?id=${id}&part=snippet,statistics&${token}`)
            .then((res) => {
                setCurrentVideo(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const link = `https://www.youtube.com/watch?v=${id}`

    return (
        <div>
            {currentVideo.map((i) => {
                return (
                    <MainContainer>
                        <h4>{i.snippet.title}</h4>
                        <ReactPlayer url={link} />
                        <div>
                            <h4>📺:{i.snippet.channelTitle}</h4>
                            <Likes>
                                <p>👍{i.statistics.likeCount}</p>
                                <p>👎{i.statistics.dislikeCount}</p>
                            </Likes>
                        </div>
                        <BoxText>
                            <b>Descrição: </b>{i.snippet.description}
                        </BoxText>
                        <p>👀{i.statistics.viewCount}</p>
                    </MainContainer>
                )
            })}
            <Button onClick={() => goToSearchPage(history)}>Voltar</Button>
        </div>
    )
}

export default DetailsPage;