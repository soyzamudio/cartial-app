import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Banner } from "~/components/banner/banner";
import { PropertyCard } from "~/components/property-card/property-card";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Property } from "~/interfaces/property.interface";

export const usePopularProperties = routeLoader$(async () => {
  const url = `${
    import.meta.env.VITE_API_BASE_URL
  }/property/most_viewed_properties`;
  const response = await fetch(url);
  const data = await response.json();
  data[1] = data[0];
  data[2] = data[0];
  data[3] = data[0];
  data[4] = data[0];

  return data as Property[];
});

export const useNewProperties = routeLoader$(async () => {
  const url = `${
    import.meta.env.VITE_API_BASE_URL
  }/property/newly_added_properties`;
  const response = await fetch(url);
  const data = await response.json();
  data[1] = data[0];
  data[2] = data[0];

  return data as Property[];
});

export default component$(() => {
  const popularProperties = usePopularProperties();
  const newProperties = useNewProperties();

  return (
    <>
      <Banner />
      <div class="container flex flex-col gap-12 p-4 mb-8">
        <div>
          <h1 class="text-2xl text-gray-700 font-semibold mb-6">
            Propiedades mas visitadas en Boca del Rio
          </h1>
          <div class="grid grid-cols-5 gap-4">
            {popularProperties.value.map((property, index) => (
              <PropertyCard property={property} key={index} basis="25%" />
            ))}
          </div>
        </div>
        <div>
          <h1 class="text-2xl text-gray-700 font-semibold mb-6">
            Casas nuevas en Boca del Rio
          </h1>
          <div class="grid grid-cols-5 gap-4">
            {newProperties.value.map((property, index) => (
              <PropertyCard property={property} key={index} basis="25%" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cartial.mx - Proximamente",
};
