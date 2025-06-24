
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type PointsType = 'restaurant' | 'bar' | 'hotel' | 'custom';

const iconMap: Record<PointsType, L.Icon> = {
  restaurant: new L.Icon({
    iconUrl: '/restaurant-coffee-shop-svgrepo-com.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  bar: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2907/2907457.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  hotel: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3009/3009489.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  custom: new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', 
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
};

type Point = {
  id: number;
  name: string;
  position: [number, number];
  image: string;
  description: string;
  type: PointsType;
};

const points: Point[] = [
  {
    id: 1,
    name: 'Restaurante Saboroso',
    position: [-3.024930, -39.649836],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop',
    description: 'Um restaurante incrível no centro.',
    type: 'restaurant',
  },
  {
    id: 2,
    name: 'Bar do Zé',
    position: [-3.024860, -39.643643],
    image: 'https://plus.unsplash.com/premium_photo-1661730134261-4381db9b5de3?q=80&w=870&auto=format&fit=crop',
    description: 'O melhor happy hour da cidade.',
    type: 'bar',
  },
  {
    id: 3,
    name: 'Hotel Confort',
    position: [-3.034040, -39.654925],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop',
    description: 'Hotel confortável e bem localizado.',
    type: 'hotel',
  },
  {
    id: 4,
    name: 'Casa Zulu',
    position: [-3.02555, -39.64932],
    image: '/Casa Zulu.png',
    description: '',
    type: 'custom',
  },
  {
    id: 5,
    name: 'Pousada Maleá',
    position: [-3.02745, -39.64939],
    image: '/Pousada Maleá.jpeg',
    description: '',
    type: 'custom',
  },
  {
    id: 6,
    name: 'Icaraí Frios',
    position: [-3.02826, -39.65019],
    image: '/Icaraí frios.png',
    description: '',
    type: 'custom',
  },
  {
    id: 7,
    name: 'Casa Arte Vida',
    position: [-3.02597, -39.64994],
    image: '/Casa Arte Vida.png',
    description: '',
    type: 'custom',
  },
];

export default function Map() {
  return (
    <MapContainer
      center={[-3.029350, -39.653422]}
      zoom={16}
      scrollWheelZoom={true}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {points.map((point) => (
        <Marker
          key={point.id}
          position={point.position}
          icon={iconMap[point.type]}
        >
          <Popup>
            <div className="text-center">
              <img
                src={point.image}
                alt={point.name}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h2 className="font-semibold">{point.name}</h2>
              {point.description && <p className="text-sm">{point.description}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
