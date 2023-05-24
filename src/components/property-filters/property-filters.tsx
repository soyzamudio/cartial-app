import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { PriceFilterDropdown } from "../price-filter-dropdown/price-filter-dropdown";
import { BedBathFilterDropdown } from "../bed-bath-filter-dropdown/bed-bath-filter-dropdown";
import { PropertyTypeDropdown } from "../property-type-dropdown/property-type-dropdown";
import { TransactionTypeDropdown } from "../transaction-type-dropdown/transaction-type-dropdown";
import { CityFilter } from "../city-filter/city-filter";

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
          <CityFilter text={city} />
          <TransactionTypeDropdown type={transactionType} />
          <PriceFilterDropdown price_min={price_min} price_max={price_max} />
          <BedBathFilterDropdown rooms={rooms} bathrooms={bathrooms} />
          <PropertyTypeDropdown types={propertyTypes} />
        </div>
      </div>
    );
  }
);
