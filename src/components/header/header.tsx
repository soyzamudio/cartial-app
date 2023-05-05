import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class="py-4 mb-12 border-b bg-white">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div class="flex items-center gap-6">
          <Link class="hover:text-violet-900 transition" href="/about">
            About
          </Link>
          <Link class="hover:text-violet-900 transition" href="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
});
