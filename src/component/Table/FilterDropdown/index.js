import React from "react";
import { WrapperFilterDropdown, WrapperFilterCheckbox } from "./units";

export const FilterDropdown = ({
  localConfig,
  config,
  filterConfig,
  setFilterConfig,
}) => {
  const onChangeInputHandler = (configItemKey) => {
    setFilterConfig({
      ...filterConfig,
      [configItemKey]: !filterConfig[configItemKey],
    });
  };
  const formFilterItems = () => {
    return Object.entries(localConfig).reduce((result, [configItemKey]) => {
      result.push(
        <div>
          <input
            onChange={() => onChangeInputHandler(configItemKey)}
            checked={filterConfig[configItemKey]}
            type={"checkbox"}
          />
          {config[configItemKey].title}
        </div>
      );
      return result;
    }, []);
  };
  return (
    <WrapperFilterDropdown>
      <b>Отображаемые колонки таблицы</b>
      <div>Выберите отображаемые колонки:</div>
      <WrapperFilterCheckbox>{formFilterItems()}</WrapperFilterCheckbox>
    </WrapperFilterDropdown>
  );
};
