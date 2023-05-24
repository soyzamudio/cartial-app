import type { Signal } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { capitalize } from "~/helpers/util";
import { CloseIcon } from "../icons/close";

export interface CityFilterProps {
  text: Signal<string>;
}

export const CityFilter = component$<CityFilterProps>(({ text }) => {
  const city = useSignal(text.value);
  return (
    <div class=" flex items-center border border-gray-300 bg-white text-gray-700 hover:border-violet-700 outline-none rounded px-2 h-10 text-sm lg:w-1/2 lg:max-w-[400px]">
      {city.value && (
        <div class="bg-violet-100 text-black h-4/5 px-3 flex items-center gap-4 pr-2 rounded">
          <div class="font-semibold">{capitalize(city.value)}</div>
          <div
            class="cursor-pointer"
            onClick$={() => {
              city.value = "";
            }}
          >
            <CloseIcon height={15} />
          </div>
        </div>
      )}
      <input
        id="city-filter-input"
        class="flex-1 bg-white text-gray-700 outline-none border-none shadow-none h-4/5 text-sm "
        type="text"
        placeholder="Buscar por ciudad, colonia ó código postal"
        name="city"
        autoFocus={true}
        onKeyPress$={(e: any) => {
          if (e.key === "Enter") {
            text.value = e.target.value;
            city.value = e.target.value;
            e.target.value = "";
          }
        }}
      />
    </div>
  );
});
