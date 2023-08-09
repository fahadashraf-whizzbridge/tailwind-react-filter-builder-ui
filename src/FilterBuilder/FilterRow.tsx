import React from "react";
import { RiDraggable } from "react-icons/ri";

function FilterRow() {
  return (
    <div className="w-full px-2 py-2 border border-gray-300 rounded-md mb-2 bg-white">
      <div className="flex items-center justify-start">
        <RiDraggable className="mr-2 text-gray-500" />
        <input
          type="text"
          className="p-2 border border-gray-200 mr-2 rounded-md outline-none"
          placeholder="Some Conditional Value"
          name=""
          id=""
        />
        <input
          type="text"
          className="p-2 border border-gray-200 mr-2 rounded-md outline-none"
          placeholder="Some Conditional Value"
          name=""
          id=""
        />
        <input
          type="text"
          className="p-2 border border-gray-200 mr-2 rounded-md outline-none"
          placeholder="Some Conditional Value"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default FilterRow;
