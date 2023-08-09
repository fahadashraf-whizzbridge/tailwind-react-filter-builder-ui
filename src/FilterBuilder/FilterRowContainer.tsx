import React from "react";
import FilterRow from "./FilterRow";

interface IFilterRowContainerProps {
  filterRows: React.ReactNode[];
  condition: "and" | "or";
  position: "FIRST" | "MID" | "LAST";
  conditionWithPrevGroup?: "and" | "or";
}

function FilterRowContainer(props: IFilterRowContainerProps) {
  const { filterRows, condition, position, conditionWithPrevGroup } = props;
  return (
    <div className="relative">
      {(position === "LAST" || position === "MID") && (
        <div className="">
          <div className="h-10 top-0 -left-10 w-0.5 border absolute border-purple-500"></div>
          <div className="w-10 h-0.5 border absolute border-purple-500 -left-10 top-10"></div>
        </div>
      )}
      {conditionWithPrevGroup && (
        <div className="absolute -top-8 -left-16 my-4 min-w-[50px] text-center inline-block rounded-full border border-purple-700 py-1 px-2 text-sm bg-purple-200 text-purple-700 hover:bg-purple-300">
          {conditionWithPrevGroup}
        </div>
      )}

      {(position === "FIRST" || position === "MID") && (
        <div className="">
          <div className="h-10 bottom-0 -left-10 w-0.5 border absolute border-purple-500"></div>
          <div className="w-10 h-0.5 border absolute border-purple-500 -left-10 bottom-10"></div>
        </div>
      )}
      <div className="p-2">
        <div className="border border-gray-300 p-2 bg-gray-50">
          {filterRows.map((filterRow, index) => (
            <div>
              {filterRow}
              {filterRows.length > 1 && index < filterRows.length - 1 && (
                <div className="my-4 min-w-[50px] text-center inline-block rounded-full border border-purple-700 py-1 px-2 text-sm bg-purple-200 text-purple-700 hover:bg-purple-300">
                  {condition}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterRowContainer;
