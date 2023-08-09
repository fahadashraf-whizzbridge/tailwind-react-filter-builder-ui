import React from "react";
import FilterRow from "./FilterRow";
import FilterRowContainer from "./FilterRowContainer";

function FilterBuilder() {
  return (
    <div className="w-[990px] mx-auto p-10">
      <FilterRowContainer
        position="FIRST"
        condition="and"
        filterRows={[<FilterRow />]}
      />
      <FilterRowContainer
        conditionWithPrevGroup="and"
        position="MID"
        condition="or"
        filterRows={[<FilterRow />, <FilterRow />, <FilterRow />]}
      />
      <FilterRowContainer
        conditionWithPrevGroup="or"
        position="LAST"
        condition="or"
        filterRows={[<FilterRow />, <FilterRow />, <FilterRow />]}
      />
      ,
    </div>
  );
}

export default FilterBuilder;
