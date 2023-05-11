import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal } from "@builder.io/qwik";
import { DropdownItem } from "../drop-down-item/drop-down-item";
import { propertyTypes } from "~/data/property-types";

export interface PropertyTypeDropdownProps {
  types: Signal<string[]>;
}

export const PropertyTypeDropdown = component$<PropertyTypeDropdownProps>(
  (props: PropertyTypeDropdownProps) => {
    const placeholder = useSignal("Tipo de propiedad");
    const { types } = props;

    const applyFn = $((clear: boolean) => {
      if (clear) {
        types.value = propertyTypes.map((type) => type.value);
        placeholder.value = "Tipo de propiedad";
        return;
      }

      if (types.value.length === propertyTypes.length) {
        placeholder.value = "Tipo de propiedad";
        return;
      }

      placeholder.value = `Tipo de propiedad (${types.value.length})`;
    });

    return (
      <DropdownItem
        placeholder={placeholder.value}
        applyFn={applyFn}
        active={placeholder.value !== "Tipo de propiedad"}
      >
        <div class="flex flex-col gap-y-2">
          {propertyTypes.map((type, index) => (
            <div class="flex items-center gap-x-2" key={index}>
              <input
                type="checkbox"
                name={type.value}
                id={type.value}
                checked={(types.value as string[]).includes(type.value)}
                onClick$={() => {
                  if ((types.value as string[]).includes(type.value)) {
                    types.value = types.value.filter((t) => t !== type.value);
                    return;
                  }

                  (types.value as string[]).push(type.value);
                }}
              />
              <label for={type.value}>{type.label}</label>
            </div>
          ))}
        </div>
      </DropdownItem>
    );
  }
);
