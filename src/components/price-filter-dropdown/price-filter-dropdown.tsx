import { $, component$, useSignal } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import { DropdownItem } from "../drop-down-item/drop-down-item";

export interface PriceFilterDropdownProps {
  price_min: Signal<number>;
  price_max: Signal<number>;
}

export const PriceFilterDropdown = component$<PriceFilterDropdownProps>(
  (props: PriceFilterDropdownProps) => {
    const placeholder = useSignal("Precio");
    const { price_min, price_max } = props;

    const applyFn = $((clear: boolean) => {
      if (clear) {
        price_min.value = 0;
        price_max.value = 0;
        placeholder.value = "Precio";
        return;
      }

      if (price_min.value === 0 && price_max.value === 0) {
        placeholder.value = "Precio";
        return;
      }
      if (price_min.value === 0 && price_max.value !== 0) {
        placeholder.value = `Hasta $${price_max.value.toLocaleString()}`;
        return;
      }
      if (price_min.value !== 0 && price_max.value === 0) {
        placeholder.value = `Desde $${price_min.value.toLocaleString()}`;
        return;
      }
      placeholder.value = `$${price_min.value.toLocaleString()}-$${price_max.value.toLocaleString()}`;
    });

    return (
      <DropdownItem
        placeholder={placeholder.value}
        applyFn={applyFn}
        active={placeholder.value !== "Precio"}
      >
        <div class="flex flex-col gap-y-2">
          <hi class="text-sm uppercase font-bold text-gray-500 -m-4 mb-2 p-3 bg-gray-50">
            Rango de precio
          </hi>
          <div class="flex gap-x-2">
            <div class="flex flex-col gap-y-1">
              <h1 class="text-xs uppercase font-semibold">Minimo</h1>
              <input
                class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                type="number"
                placeholder="Sin minimo"
                name="price_min"
                onBlur$={(e) => {
                  price_min.value = +e.target.value;
                }}
                value={price_min.value === 0 ? "" : price_min.value}
              />
            </div>
            <div class="flex flex-col gap-y-1">
              <h1 class="text-xs uppercase font-semibold">Maximo</h1>
              <input
                class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                type="number"
                placeholder="Sin maximo"
                name="price_max"
                onBlur$={(e) => {
                  price_max.value = +e.target.value;
                }}
                value={price_max.value === 0 ? "" : price_max.value}
              />
            </div>
          </div>
        </div>
      </DropdownItem>
    );
  }
);
