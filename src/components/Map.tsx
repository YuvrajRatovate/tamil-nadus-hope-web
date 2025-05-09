
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from './ui/card';
import L from 'leaflet';

// Fix for the marker icon issue in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Chennai coordinates
const OFFICE_LOCATION = {
  lng: 80.237617,
  lat: 13.088185,
  zoom: 13
};

const REGIONAL_OFFICES = [
  { name: 'Chennai Main Office', lng: 80.237617, lat: 13.088185, address: '123 Hope Street, Anna Nagar, Chennai' },
  { name: 'Coimbatore Center', lng: 76.961632, lat: 11.004556, address: '456 Renewal Road, Coimbatore' },
  { name: 'Madurai Center', lng: 78.119774, lat: 9.925201, address: '789 Hope Avenue, Madurai' },
  { name: 'Trichy Center', lng: 78.704674, lat: 10.790483, address: '321 Renewal Street, Trichy' }
];

interface MapProps {
  height?: string;
}

const Map = ({ height = '500px' }: MapProps) => {
  return (
    <div className="w-full" style={{ height }}>
      <Card className="w-full h-full overflow-hidden">
        <MapContainer 
          style={{ height: '100%', width: '100%' }}
          className="z-0"
          zoom={OFFICE_LOCATION.zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {REGIONAL_OFFICES.map((office, index) => (
            <Marker 
              key={index} 
              position={[office.lat, office.lng]}
            >
              <Popup>
                <div>
                  <strong>{office.name}</strong>
                  <p>{office.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>
    </div>
  );
};

export default Map;
