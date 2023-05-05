import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components/banner/banner";

export default component$(() => {
  return (
    <>
      <Banner />
      <div class="container p-4">Hola</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cartial.mx - Proximamente",
};
