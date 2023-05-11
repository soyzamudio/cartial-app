import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation, useNavigate } from "@builder.io/qwik-city";
import { PropertyCard } from "~/components/property-card/property-card";
import { PropertyFilters } from "~/components/property-filters/property-filters";
import { propertyTypes as types } from "~/data/property-types";
import type { DocumentHead } from "@builder.io/qwik-city";
// import type { Property } from "~/interfaces/property.interface";

export const useSearchParams = routeLoader$(async (req: any) => {
  console.log("req", req);
  // query the API for properties with payload from mongodb
  const url = new URL(import.meta.env.VITE_API_BASE_URL + "/property");

  url.searchParams.set("city", req.params.city);
  url.searchParams.set(
    "transaction_type",
    req.url.searchParams.get("transaction_type") || "venta"
  );
  if (req.url.searchParams.get("price_min") !== "0") {
    url.searchParams.set("price_min", req.url.searchParams.get("price_min"));
  }
  if (req.url.searchParams.get("price_max") !== "0") {
    url.searchParams.set("price_max", req.url.searchParams.get("price_max"));
  }
  url.searchParams.set("price_min", req.url.searchParams.get("price_min") || 0);
  url.searchParams.set("price_max", req.url.searchParams.get("price_max") || 0);
  url.searchParams.set("rooms", req.url.searchParams.get("rooms") || 0);
  url.searchParams.set("bathrooms", req.url.searchParams.get("bathrooms") || 0);
  // url.searchParams.set(
  //   "property_type",
  //   req.url.searchParams.get("property_types") || "home"
  // );

  const response = await fetch(url.toString());

  const data = await response.json();
  console.log(data);
  // data[1] = data[0];
  // data[2] = data[0];
  // data[3] = data[0];
  return [];
});

export default component$(() => {
  const loc = useLocation();
  const properties = useSearchParams();
  const nav = useNavigate();

  const city = useSignal(loc.params.city.replace(/-/g, " "));
  const transactionType = useSignal(
    loc.url.searchParams.get("transaction_type") || "venta"
  );
  const price_min = useSignal(0);
  const price_max = useSignal(0);
  const rooms = useSignal(0);
  const bathrooms = useSignal(0);
  const propertyTypes = useSignal(types.map((type) => type.value));

  useVisibleTask$(async ({ track }) => {
    track(() => city.value);
    track(() => transactionType.value);
    track(() => price_min.value);
    track(() => price_max.value);
    track(() => rooms.value);
    track(() => bathrooms.value);
    track(() => propertyTypes.value);

    let url = `/propiedades/${city.value.split(" ").join("-")}`;

    const params = [];

    if (transactionType.value) {
      params.push(`transaction_type=${transactionType.value}`);
    }

    if (price_min.value !== 0) {
      params.push(`price_min=${price_min.value}`);
    }

    if (price_max.value !== 0) {
      params.push(`price_max=${price_max.value}`);
    }

    if (rooms.value) {
      params.push(`rooms=${rooms.value}`);
    }

    if (bathrooms.value) {
      params.push(`bathrooms=${bathrooms.value}`);
    }

    if (propertyTypes.value.length !== types.length) {
      params.push(`property_types=${propertyTypes.value.join(",")}`);
    }

    const urlParams = params.join("&");
    url += `?${urlParams}`;
    console.log(url);
    nav(url.toString());
  });

  return (
    <>
      <PropertyFilters
        city={city}
        transactionType={transactionType}
        price_min={price_min}
        price_max={price_max}
        rooms={rooms}
        bathrooms={bathrooms}
        propertyTypes={propertyTypes}
      />
      <div class="grid grid-cols-7 bg-off-white h-full max-h-[calc(100%-125px)]">
        <div class="col-span-3 p-4 overflow-y-scroll">
          <div class="flex flex-col gap-y-4">
            <h1 class="flex items-center text-xl text-gray-700 font-semibold">
              Propiedades en{" "}
              <span class="flex bg-violet-200 px-2 py-1 rounded-full items-center text-sm mx-1 capitalize">
                {transactionType.value}
              </span>{" "}
              en{" "}
              <span class="flex bg-violet-200 px-2 py-1 rounded-full items-center text-sm mx-1 capitalize">
                {city.value}
              </span>
            </h1>
            <div class="flex items-center justify-between text-sm">
              <div class="text-gray-500">
                {properties.value.length} resultado
                {properties.value.length > 1 ? "s" : ""}
              </div>
              <div class="text-violet-700 font-semibold cursor-pointer">
                Ordernar: Nuevo
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              {properties.value.map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div class="col-span-4 bg-violet-100">
          <div class="h-full w-full bg-violet-100">Hola</div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cartial.mx - Proximamente",
};
