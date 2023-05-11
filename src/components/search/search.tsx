import { component$ } from "@builder.io/qwik";
import { SearchIcon } from "../icons/search";
import { Form, globalAction$ } from "@builder.io/qwik-city";

export const useSearchQuery = globalAction$((data, { redirect }) => {
  // convert city to dash case
  const city = data.city as string;
  const dashCaseCity = city.toLowerCase().split(" ").join("-");

  const transaction_type = data.transaction_type as string;
  throw redirect(
    302,
    `/propiedades/${dashCaseCity}?transaction_type=${encodeURI(
      transaction_type
    )}`
  );
});

export const Search = component$(() => {
  const action = useSearchQuery();
  return (
    <Form
      action={action}
      class="p-6 mx-4 lg:mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-8 lg:shadow-lg bg-white lg:bg-white/20 lg:backdrop-blur rounded-xl"
    >
      <input
        class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
        type="text"
        placeholder="Buscar por ciudad, colonia ó código postal"
        name="city"
      />
      <select
        class="border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm lg:w-1/2 lg:max-w-[162px]"
        name="transaction_type"
      >
        <option value="venta" selected>
          Venta
        </option>
        <option value="renta">Renta</option>
      </select>
      <button
        type="submit"
        class="bg-violet-700 hover:bg-violet-800 transition w-full lg:w-1/2 lg:max-w-[162px] h-14 rounded flex justify-center items-center text-white text-lg"
      >
        <div>
          <SearchIcon stroke="#fff" height="25" />
        </div>
      </button>
    </Form>
  );
});
