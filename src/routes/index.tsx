import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col h-screen justify-center items-center">
        <div class="flex flex-col gap-4 items-center px-18 py-10 bg-white border shadow rounded-lg hover:shadow-lg">
          <h1 class="text-3xl font-bold">¡Próximamente!</h1>
          <h2 class="w-2/3 text-lg text-center">
            Estamos trabajando arduamente para que puedas encontrar tu hogar
            ideal desde cualquier lugar.
          </h2>
          <div class="text-center my-4">
            <Logo />
            <h4 class="font-semibold text-xl">cartial</h4>
          </div>
          <Link
            href="https://servicios.cartial.mx"
            class="text-blue-500 hover:underline"
          >
            Visita nuestros servicios de recorridos virtuales
          </Link>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cartial.mx - Proximamente",
};
