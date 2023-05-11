import {
  Slot,
  component$,
  useOnDocument,
  useSignal,
  $,
} from "@builder.io/qwik";
import type { QRL, Signal } from "@builder.io/qwik";
import { CaretIcon } from "../icons/caret";

export interface DropdownProps {
  placeholder?: string;
  applyFn?: any;
  active?: boolean;
}

export const useClickOutside = (
  ref: Signal<HTMLElement | undefined>,
  onClickOut: QRL<() => void>
) => {
  useOnDocument(
    "click",
    $((event: any) => {
      if (!ref.value) {
        return;
      }
      const target = event.target as HTMLElement;
      if (!ref.value.contains(target)) {
        onClickOut();
      }
    })
  );
};

export const DropdownItem = component$<DropdownProps>(
  (props: DropdownProps) => {
    const isOpen = useSignal(false);
    const hitBoxRef = useSignal<HTMLElement>();

    useClickOutside(
      hitBoxRef,
      $(() => {
        isOpen.value = false;
      })
    );

    return (
      <div class="relative">
        <button
          preventdefault:click
          class={
            props.active
              ? "flex gap-x-2 items-center justify-between border border-violet-700 bg-violet-100 text-violet-900 focus:border-violet-700 outline-none rounded px-4 h-10 text-sm lg:min-w-[150px]"
              : "flex gap-x-2 items-center justify-between border border-gray-300 bg-white text-gray-700 focus:border-violet-700 outline-none rounded px-4 h-10 text-sm lg:min-w-[150px]"
          }
          type="button"
          onClick$={() => {
            isOpen.value = !isOpen.value;
          }}
        >
          <div>{props.placeholder}</div>
          <CaretIcon height={"25px"} />
        </button>
        {isOpen.value && (
          <div
            class="absolute top-11 flex flex-col z-10 bg-white rounded-lg shadow w-auto min-w-[350px] p-4 gap-y-2 text-gray-700"
            ref={hitBoxRef}
          >
            <Slot />
            <button
              preventdefault:click
              class="bg-violet-700 hover:bg-violet-800 transition w-full h-10 rounded flex justify-center items-center text-white text-sm"
              onClick$={() => {
                props.applyFn();
                isOpen.value = false;
              }}
            >
              <div>Aplicar</div>
            </button>
            <button
              preventdefault:click
              class="border border-violet-700 text-violet-700 text-xs hover:text-violet-800 hover:border-violet-700 w-full h-8 rounded flex justify-center items-center "
              onClick$={() => {
                props.applyFn(true);
                isOpen.value = false;
              }}
            >
              <div>Borrar</div>
            </button>
          </div>
        )}
      </div>
    );
  }
);
