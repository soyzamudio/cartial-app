import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { PriceFilterDropdown } from "../price-filter-dropdown/price-filter-dropdown";
import { BedBathFilterDropdown } from "../bed-bath-filter-dropdown/bed-bath-filter-dropdown";
import { PropertyTypeDropdown } from "../property-type-dropdown/property-type-dropdown";
import { TransactionTypeDropdown } from "../transaction-type-dropdown/transaction-type-dropdown";

export interface PropertyFiltersProps {
  city: Signal<string>;
  transactionType: Signal<string>;
  price_min: Signal<number>;
  price_max: Signal<number>;
  rooms: Signal<number>;
  bathrooms: Signal<number>;
  propertyTypes: Signal<string[]>;
}

export const PropertyFilters = component$<PropertyFiltersProps>(
  (props: PropertyFiltersProps) => {
    const {
      city,
      transactionType,
      price_min,
      price_max,
      rooms,
      bathrooms,
      propertyTypes,
    } = props;

    return (
      <div class="bg-white border-b shadow-sm mx-auto px-4 py-2 z-10">
        <div class="flex items-center gap-x-2">
          <input
            class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded px-4 h-10 text-sm lg:w-1/2 lg:max-w-[200px]"
            type="text"
            placeholder="Buscar por ciudad, colonia ó código postal"
            name="city"
            value={city.value}
            onBlur$={(e) => {
              city.value = e.target.value;
            }}
          />
          <TransactionTypeDropdown type={transactionType} />
          <PriceFilterDropdown price_min={price_min} price_max={price_max} />
          <BedBathFilterDropdown rooms={rooms} bathrooms={bathrooms} />
          <PropertyTypeDropdown types={propertyTypes} />
        </div>
      </div>
    );
  }
);
