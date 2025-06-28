import React from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
function SelectInput({ id, value = '', onChange }, ref) {
  const platforms = ['Amazon', 'Walmart', 'Shopify', 'Etsy'];
  const displayValue = value || 'Select Platform';

  return (
    <Listbox value={value || ''} onChange={onChange}>
      <div className="w-full relative">
        <ListboxButton className="w-full rounded-lg bg-gray-50 border border-gray-300 py-2 px-4 text-black mb-4 text-left">
          {displayValue}
        </ListboxButton>
        <ListboxOptions className="absolute z-10 bg-gray-200 w-[280px] md:w-[370px] mt-1 rounded-xl">
          {platforms.map((platform) => (
            <ListboxOption
              key={platform}
              value={platform}
              className="py-2 px-3 cursor-pointer hover:bg-black hover:text-gray-100"
            >
              {platform}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default React.forwardRef(SelectInput);
