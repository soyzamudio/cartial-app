import { component$ } from "@builder.io/qwik";
import { Search } from "../search/search";

export const Banner = component$(() => {
  return (
    <section class="container mx-auto h-full mb-8 xl:mb-12 mt-12">
      <div class="flex flex-col flex-1 justify-center items-center lg:flex-row">
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 class="text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-gray-700">
            <span class="text-violet-700">Encuentra</span> la casa de tus sueños
          </h1>
          <p class="max-w-[480px] mb-8 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            tempora doloremque eius itaque nihil laborum minima recusandae
            doloribus, nobis quam earum corporis maxime sit nesciunt dolor
            numquam facere rem vitae.
          </p>
        </div>
        <div class="hidden relative flex-1 lg:flex justify-end items-end">
          <img
            class="rounded-s-3xl max-h-[650px]"
            src="images/hero.jpg"
            alt="Hero"
          />
          <div class="absolute h-full bg-gradient-to-r from-transparent to-off-white w-32"></div>
        </div>
      </div>
      <div class="container">
        <Search />
      </div>
    </section>
  );
});
