
import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

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
  mapboxToken?: string;
}

const Map = ({ height = '500px', mapboxToken }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string | undefined>(mapboxToken);
  const [showTokenInput, setShowTokenInput] = useState(!mapboxToken);

  useEffect(() => {
    if (!token || !mapContainer.current) return;
    
    // Initialize map
    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [OFFICE_LOCATION.lng, OFFICE_LOCATION.lat],
        zoom: OFFICE_LOCATION.zoom
      });
      
      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add markers for all offices
      REGIONAL_OFFICES.forEach(office => {
        // Create a marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.width = '24px';
        markerElement.style.height = '24px';
        markerElement.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
        markerElement.style.backgroundSize = 'cover';
        
        // Create a popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <strong>${office.name}</strong>
            <p>${office.address}</p>
          `);
        
        // Add marker to map
        new mapboxgl.Marker(markerElement)
          .setLngLat([office.lng, office.lat])
          .setPopup(popup)
          .addTo(map.current);
      });
      
      // Clean up on unmount
      return () => {
        if (map.current) {
          map.current.remove();
        }
      };
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  }, [token]);
  
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newToken = formData.get('mapboxToken') as string;
    if (newToken) {
      setToken(newToken);
      setShowTokenInput(false);
      localStorage.setItem('mapboxToken', newToken);
    }
  };
  
  // Try to load token from localStorage on component mount
  useEffect(() => {
    if (!token) {
      const savedToken = localStorage.getItem('mapboxToken');
      if (savedToken) {
        setToken(savedToken);
        setShowTokenInput(false);
      }
    }
  }, [token]);

  return (
    <div className="w-full" style={{ height }}>
      {showTokenInput ? (
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Enter Mapbox Token</h3>
          <p className="mb-4">
            To display the interactive map, please enter your Mapbox public token.
            You can get a free token by signing up at <a href="https://mapbox.com" target="_blank" rel="noreferrer" className="text-primary underline">mapbox.com</a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="mapboxToken" 
                placeholder="Enter your Mapbox public token" 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
              Show Map
            </button>
          </form>
        </Card>
      ) : (
        <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
      )}
    </div>
  );
};

export default Map;
