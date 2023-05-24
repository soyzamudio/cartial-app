import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import mapboxgl, { Map, Marker as MapboxMarker } from "mapbox-gl";
import mapboxCSS from "../../../node_modules/mapbox-gl/dist/mapbox-gl.css?inline";

export interface Marker {
  lat: number;
  lng: number;
  title: string;
  price: number;
  image: string;
  id: string;
}

export interface LeafletMapProps {
  markers: Signal<Marker[]>;
}

export const LeafletMap = component$<LeafletMapProps>(
  ({ markers }: LeafletMapProps) => {
    useStyles$(mapboxCSS);
    useStyles$(` #map { height: 100%; }`);
    // const markersValue = markers.value;

    useVisibleTask$(async ({ track }) => {
      track(() => markers.value);
      console.log("Map is visible");
      const selectedMarker = markers.value;
      if (selectedMarker !== markers.value) {
        console.log(markers);
      }
      //   const TOKEN =
      //     "pk.eyJ1Ijoic295emFtdWRpbyIsImEiOiJjbGE5MXdyazgwNnllM3dxeGF3ZDNsZmF6In0.ASwEqN_-cGnUolgavckDBg";

      //   mapboxgl.accessToken = TOKEN;
      //   const map = new Map({
      //     container: "map",
      //     style: "mapbox://styles/mapbox/streets-v11",
      //     center: [-96.107778, 19.095833],
      //     zoom: 13,
      //   });

      //   if (markers.value[0]?.lat && markers.value[0]?.lng) {
      //     map.setCenter([markers.value[0].lng, markers.value[0].lat]);
      //   }

      //   // add markers to map
      //   markers?.value?.forEach((marker) => {
      //     if (marker) {
      //       new MapboxMarker({
      //         draggable: false,
      //         color: "rgb(221 214 254)",
      //       })
      //         .setLngLat([marker.lng, marker.lat])
      //         .addTo(map);
      //     }
      //   });

      // const centerPosition: LatLngExpression = [-34.603722, -58.381592];
      // const map = new Map("map").setView(centerPosition, 13);
      // tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
      //   maxZoom: 19,
      //   attribution:
      //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // }).addTo(map);
    });

    return <div id="map"></div>;
  }
);
