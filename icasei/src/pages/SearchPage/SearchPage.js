import React from 'react'
import {BASE_URL} from "../../constants/urls"
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { Form, SearchButton, Input, CardContainer } from './SearchPageStyle'
import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'


const SearchPage = () => {
    const [videoName, setVideoName] = useState([])
    const [searchTerm, setSeachTerm] = useState('')
    const history = useHistory()
    const id = useParams()


    const getResults = () => {

        const token = 'key=AIzaSyBYAOscx9jRqH2Rsj-SkNhjLTn-e4GaCZ8'
        const part = 'search?part=snippet&'
        const query = `q=${searchTerm}&`
        const maxResults = 'maxResults=9&'
        const type = 'type=video&'

        axios
            .get(`${BASE_URL}${part}${query}${maxResults}${type}${token}`)
            .then((res) => {
                setVideoName(res.data.items)
                console.log(res.data.items)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getResults();
    }, [])

    const handleFormChange = (event) => {
        setSeachTerm(event.target.value)
    }

    const cleanFields = () => {
        setSeachTerm('')
    }

    const sendForm = (event) => {
        event.preventDefault()
        console.log('formulario enviado', searchTerm)
        cleanFields()
    }

    const goToDetailPage = (id) => {
        history.push(`/video/${id}`)
    }




    return (
        <div>
            <Form>
                <form onSubmit={sendForm}>
                    <Input
                        type={"text"}
                        value={searchTerm}
                        onChange={handleFormChange}
                        placeholder={'Digite sua pesquisa'}></Input>
                    <SearchButton onClick={() => getResults()}>Pesquisar</SearchButton>
                </form>
            </Form>
            <CardContainer>
                {videoName.map((i) => {
                    return <Card key={i.videoId} sx={{ maxWidth: 500, margin: 3 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={i.snippet.thumbnails.medium.url}
                            alt="green iguana" />
                        <Typography gutterBottom variant="h5" component="div"
                            onClick={() => goToDetailPage(i.id.videoId)}>
                            {i.snippet.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div"><b>Canal:</b>{i.snippet.channelTitle}</Typography>
                        <Typography variant="body1" color="text.secondary">
                            <b>Detalhes:</b>{i.snippet.description} </Typography>
                    </Card>

                })
                }
            </CardContainer>

        </div>

    )
}

export default SearchPage;