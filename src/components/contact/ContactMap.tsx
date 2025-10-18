"use client";

import { useEffect, useMemo, useState } from "react";
import type { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ContactMap = () => {
  const [isReady, setIsReady] = useState(false);
  const position = useMemo<LatLngExpression>(
    () => [-24.1854821, -65.3096403],
    [],
  );

  useEffect(() => {
    const loadStyles = async () => {
      await import("leaflet/dist/leaflet.css");
      setIsReady(true);
    };

    void loadStyles();
  }, []);

  if (!isReady) {
    return (
      <div className="h-72 w-full animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-700 lg:h-full" />
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={18}
      scrollWheelZoom={false}
      className="h-72 w-full lg:h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          Estudio Jurídico Lidia Cristina Baiud
          <br />
          Ramírez de Velazco 672 · San Salvador de Jujuy
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
