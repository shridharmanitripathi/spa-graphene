import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyles from './mapStyles';
// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

export class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: -1.2884,
                            lng: 36.8233
                        }
                    }
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBJyBJBYHHTJBehyxRrbrsmXPFGYDL1y3o'
})(MapContainer);