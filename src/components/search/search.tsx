import { component$ } from "@builder.io/qwik";
import { SearchIcon } from "../icons/search";

export const Search = component$(() => {
  return (
    <div class="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-8 lg:shadow-lg bg-white lg:bg-white/20 lg:backdrop-blur rounded-xl">
      <select
        class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        name="cars"
        id="cars"
      >
        <option disabled selected hidden value="">
          Ciudad
        </option>
        <option value="boca del rio">Boca del Rio</option>
      </select>
      <select
        class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        name="cars"
        id="cars"
      >
        <option disabled selected hidden value="">
          Tipo
        </option>
        <option value="volvo">Venta</option>
        <option value="saab">Renta</option>
      </select>
      <select
        class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        name="cars"
        id="cars"
      >
        <option disabled selected hidden value="">
          Precio
        </option>
        <option value="volvo">$0 - $5,000</option>
        <option value="volvo">$5,000 - $20,000</option>
        <option value="volvo">$20,000 - $50,000</option>
        <option value="volvo">$50,000 - $100,000</option>
      </select>
      <button class="bg-violet-700 hover:bg-violet-800 transition w-1/2 lg:max-w-[162px] h-14 rounded flex justify-center items-center text-white text-lg">
        <div>
          <SearchIcon stroke="#fff" height="25" />
        </div>
      </button>
    </div>
  );
});
