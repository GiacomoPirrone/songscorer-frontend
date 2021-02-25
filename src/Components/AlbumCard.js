import React from 'react';
import {Button, Col, Row, Image} from "react-bootstrap";

//this.props.album.images[0].url
//this.props.album.name
class AlbumCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Row className="no-gutters">
                <Col xs lg="2">
                    <Image src={this.props.album.images[0].url} width={200} className="album-image"/>
                </Col>
                <Col className="px-4 centre-hor-ver">
                    <h3>{this.props.album.name}</h3>
                    <h6>
                        {
                            this.props.album.artists.map((result, i) => {
                                return (
                                    //If this isn't the last artist in the collection then add a comma and space
                                    this.props.album.artists[i+1] ?
                                    result.name + ", "
                                    : result.name
                                )
                            })
                        }
                    </h6>
                    <Button className="rate-btn">Rate</Button>
                </Col>
                <Col xs lg="2" className="centre-hor-ver">
                    <h3>Release Year</h3>
                    <h5>{this.props.album.release_date.substring(0,4)}</h5>
                </Col>
                <div className="line"></div>
                <Col xs lg="2" className="centre-hor-ver">
                    <h3>Tracks</h3>
                    <h5>{this.props.album.total_tracks}</h5>
                </Col>
                <div className="line"></div>
                <Col xs lg="2" className="centre-hor-ver">
                    <h3>Type</h3>
                    <h5>{this.props.album.album_type}</h5>
                </Col>
            </Row>
        )
    }

}

export default AlbumCard;