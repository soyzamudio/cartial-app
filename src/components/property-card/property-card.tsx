import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Property } from "~/interfaces/property.interface";

export interface PropertyCardProps {
  property: Property;
  hoverAction?: boolean;
  basis?: string;
}

export const PropertyCard = component$<PropertyCardProps>((props) => {
  return (
    <Link
      href={"/propiedad/" + props.property.id}
      class={"flex flex-start w-full mx-auto lg:mx-0 transition"}
    >
      <div class="bg-white rounded-md shadow overflow-hidden w-full transition hover:shadow-md">
        <img
          class="w-full h-48 object-cover object-bottom"
          src={props.property.images[0]}
          alt={props.property.title}
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-violet-700">
            {props.property.price.toLocaleString("es-MX", {
              style: "currency",
              currency: "MXN",
            })}
          </h2>
          {/* display city and state */}
          <p class="text-gray-500 text-sm">
            {props.property.city}, {props.property.state}
          </p>
          {/* display rooms, bathrooms and area size */}
          <p class="text-gray-500 text-sm">
            {props.property.rooms} recamaras - {props.property.bathrooms} baños
            - {props.property.area} m<sup>2</sup>
          </p>
        </div>
      </div>
    </Link>
  );
});
