import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerPoint/Marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat:  49.84,
      lng: 24.03
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDQtbLxuqkJmbxrLT7WjbD9U8mMAOM1RPY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={49.847069}
            lng={24.057893}
            name="ЗАМУСОРЕНЕ ПОДВІР'Я"
            color = 'red'
          />
          <Marker
            lat={49.849363}
            lng={24.035916}
            name="Невивезене сміття"
            color = 'red'
          />
          <Marker
            lat={49.848252}
            lng={24.071339}
            name="Розкиданий мусор"
            color = 'red'
          />
          <Marker
            lat={49.862056}
            lng={24.021767}
            name="Невивезене сміття"
            color = 'red'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;