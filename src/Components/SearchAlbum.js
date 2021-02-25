import React from 'react'
import '../index.css';
import { Container } from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumCard from './AlbumCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as Constants from '../Constants'

var spotifySearchCall = null;

class SearchAlbum extends React.Component {

    queryString = require('querystring')
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            searchValue: null,
            searchResults: null,
            spotifyApi: new SpotifyWebApi(),
            albumResults: null,
            newReleases: []
        };
    }

    componentDidMount() {

        fetch(Constants.SPOTIFY_GET_TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(Constants.CLIENT_ID + ':' + Constants.CLIENT_SECRET)
            },
            body: 'grant_type=client_credentials' 
        }).then((response) => {
                response.json().then(responseJson => {
                    this.state.spotifyApi.setAccessToken(responseJson.access_token)

                    spotifySearchCall = this.state.spotifyApi.getNewReleases()
                    let currentComponent = this;
            
                    spotifySearchCall.then(
                        function (data) {
                            spotifySearchCall = null;
                            currentComponent.setState({
                                newReleases: data.albums.items
                            })
                            console.log(currentComponent.state.newReleases);
                        },
                        function (err) {
                            console.error(err);
                        }
                    )
                })
            }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();

        spotifySearchCall = this.state.spotifyApi.searchAlbums(this.state.searchValue)
        let currentComponent = this;

        spotifySearchCall.then(
            function (data) {   
                spotifySearchCall = null;
                currentComponent.setState({
                    albumResults : data.albums.items
                })
            },
            function (err) {
                console.error(err);
            }
        )

    }
    

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {

        return (
            <Container>
                <form onSubmit={this.handleSubmit} className="boxContainer">
                    <input type="text" name="searchValue" onChange={this.handleInputChange} placeholder="Search for an album..."
                    className="album-search-input" autofocus required />
                    
                    <button type="submit" className="album-search-button">
                        <FontAwesomeIcon icon={faSearch} size="lg"/>
                    </button>
                </form>
                {
                    this.state.albumResults ?
                    <h2 className="text-center my-4">Your Results</h2> :
                    <h2 className="text-center my-4">New Releases</h2>
                }
                {
                    this.state.albumResults ?
                    this.state.albumResults.map((result, i) => {
                        return (
                            <Container className="p-3 no-gutters">
                                <AlbumCard album={result}/>
                            </Container>
                        )
                    }):
                    this.state.newReleases.map((result, i) => {
                        return (
                            <Container className="p-3 no-gutters">
                                <AlbumCard album={result}/>
                            </Container>
                        )
                    })
                }
            </Container>
        )
    }
    
  }

  export default SearchAlbum;