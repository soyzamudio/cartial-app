export interface Property {
  id: string;
  created_at: string;
  title: string;
  description: string;
  price: number;
  property_type: string;
  transaction_type: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  agent_id: number;
  status: string;
  rooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  matterport_id: string;
  location: {
    type: string;
    coordinates: number[];
  };
}

export const PropertyType: { [key: string]: string } = {
  home: "Casa",
  apartment: "departamento",
  land: "Terreno",
  office: "Oficina",
  commercial: "Local Comercial",
  industrial: "Bodega",
  other: "Otro",
};
