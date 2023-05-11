import type { Signal } from "@builder.io/qwik";
import { component$, useSignal, $ } from "@builder.io/qwik";
import { DropdownItem } from "../drop-down-item/drop-down-item";

export interface BedBathFilterDropdownProps {
  rooms: Signal<number>;
  bathrooms: Signal<number>;
}

export const BedBathFilterDropdown = component$<BedBathFilterDropdownProps>(
  (props: BedBathFilterDropdownProps) => {
    const placeholder = useSignal("Recamaras y baños");
    const { rooms, bathrooms } = props;

    const applyFn = $((clear: boolean) => {
      if (clear) {
        rooms.value = 0;
        bathrooms.value = 0;
        placeholder.value = "Recamaras y baños";
        return;
      }

      if (rooms.value === 0 && bathrooms.value === 0) {
        placeholder.value = "Recamaras y baños";
        return;
      }

      placeholder.value = `${rooms.value}+ recamaras, ${bathrooms.value}+ baños`;
    });

    return (
      <DropdownItem
        placeholder={placeholder.value}
        applyFn={applyFn}
        active={placeholder.value !== "Recamaras y baños"}
      >
        <div class="flex flex-col gap-y-4 mb-2">
          <hi class="text-sm uppercase font-bold text-gray-500 -m-4 mb-2 p-3 bg-gray-50">
            Numero de recamaras
          </hi>
          <div class="flex flex-col gap-y-2">
            <h1 class="text-xs uppercase font-semibold">Recamaras</h1>
            <div class="flex text-sm font-semibold">
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 0;
                }}
                class={
                  rooms.value === 0
                    ? "flex-1 py-2 px-3 outline outline-1 rounded-s-md bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border rounded-s-md hover:bg-gray-100"
                }
              >
                Todo
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 1;
                }}
                class={
                  rooms.value === 1
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                1+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 2;
                }}
                class={
                  rooms.value === 2
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                2+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 3;
                }}
                class={
                  rooms.value === 3
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                3+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 4;
                }}
                class={
                  rooms.value === 4
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                4+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  rooms.value = 5;
                }}
                class={
                  rooms.value === 5
                    ? "flex-1 py-2 px-3 outline outline-1 rounded-e-md bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y rounded-e-md hover:bg-gray-100 border-r"
                }
              >
                5+
              </button>
            </div>
          </div>
          <hi class="text-sm uppercase font-bold text-gray-500 -mx-4 p-3 bg-gray-50">
            Numero de baños
          </hi>
          <div class="flex flex-col gap-y-2">
            <h1 class="text-xs uppercase font-semibold">Baños</h1>
            <div class="flex text-sm font-semibold">
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 0;
                }}
                class={
                  bathrooms.value === 0
                    ? "flex-1 py-2 px-3 outline outline-1 rounded-s-md bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border rounded-s-md hover:bg-gray-100"
                }
              >
                Todo
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 1;
                }}
                class={
                  bathrooms.value === 1
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                1+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 2;
                }}
                class={
                  bathrooms.value === 2
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                2+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 3;
                }}
                class={
                  bathrooms.value === 3
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                3+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 4;
                }}
                class={
                  bathrooms.value === 4
                    ? "flex-1 py-2 px-3 outline outline-1 bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y border-r hover:bg-gray-100"
                }
              >
                4+
              </button>
              <button
                preventdefault:click
                onClick$={() => {
                  bathrooms.value = 5;
                }}
                class={
                  bathrooms.value === 5
                    ? "flex-1 py-2 px-3 outline outline-1 rounded-e-md bg-violet-200 outline-violet-700 hover:bg-violet-300 z-10"
                    : "flex-1 py-2 px-3 border-y rounded-e-md hover:bg-gray-100 border-r"
                }
              >
                5+
              </button>
            </div>
          </div>
        </div>
      </DropdownItem>
    );
  }
);
