import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook/hooks";

import "../../assets/styles/filterStyle.scss";
import { selectFilterState } from "../../store/selectors/todoSelector";
import {
  changeFilterSearch,
  changeFilterStatus,
} from "../../store/slice/filterSlice";

const Filter = () => {
  const dispatch = useAppDispatch();

  const filterState = useAppSelector(selectFilterState);

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterSearch(event.target.value));
  };

  const handleOnclickRadio = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFilterStatus(event.target.value as "All" | "Completed" | "Doing")
    );
  };

  return (
    <div className="filter-container">
      <div className="filter-wrapper fadeInDown">
        <div className="filter-search fadeIn">
          <input
            type="text"
            name="filtername"
            placeholder="Search todo"
            onChange={handleOnChangeInput}
          />
        </div>
        <div className="filter-check fadeIn">
          <div className="filter-control">
            <input
              type="radio"
              name="status"
              value="All"
              defaultChecked={filterState.status === "All" ? true : false}
              onChange={handleOnclickRadio}
            />
            <label>All</label>
          </div>
          <div className="filter-control">
            <input
              type="radio"
              name="status"
              value="Doing"
              defaultChecked={filterState.status === "Doing" ? true : false}
              onChange={handleOnclickRadio}
            />
            <label>Doing</label>
          </div>
          <div className="filter-control">
            <input
              type="radio"
              name="status"
              value="Completed"
              defaultChecked={filterState.status === "Completed" ? true : false}
              onChange={handleOnclickRadio}
            />
            <label>Completed</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
