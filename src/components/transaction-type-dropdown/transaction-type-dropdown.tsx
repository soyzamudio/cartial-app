import type { Signal } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { DropdownItem } from "../drop-down-item/drop-down-item";
import { capitalize } from "~/helpers/util";

const transactionType = [
  { value: "venta", label: "Venta" },
  { value: "renta", label: "Renta" },
];

export interface TransactionTypeDropdownProps {
  type: Signal<string>;
}

export const TransactionTypeDropdown = component$<TransactionTypeDropdownProps>(
  (props: TransactionTypeDropdownProps) => {
    const { type } = props;

    const applyFn = $((clear: boolean) => {
      if (clear) {
        type.value = "venta";
        return;
      }
    });

    return (
      <DropdownItem
        placeholder={capitalize(type.value)}
        applyFn={applyFn}
        active={false}
      >
        <div class="flex flex-col gap-y-2">
          {transactionType.map((typeOption, index) => (
            <div class="flex items-center gap-x-2" key={index}>
              <input
                type="radio"
                name={typeOption.value}
                id={typeOption.value}
                checked={type.value === typeOption.value}
                onClick$={() => {
                  type.value = typeOption.value;
                }}
              />
              <label for={typeOption.value}>{typeOption.label}</label>
            </div>
          ))}
        </div>
      </DropdownItem>
    );
  }
);
