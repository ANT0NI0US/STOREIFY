import React from "react";
import Select, {
  MultiValue,
  SingleValue,
  StylesConfig,
  GroupBase,
  SelectInstance,
} from "react-select";
import { Error } from "./Error";
import { useDarkMode } from "@/hooks/useDarkMode";

interface Option {
  value: string;
  label: string;
}

interface ChooseProps {
  data: Option[];
  isLoading?: boolean;
  onChange: (
    selectedOptions:
      | MultiValue<Option>
      | readonly Option[]
      | SingleValue<Option>
      | null,
  ) => void;
  error?: string;
  disabled?: boolean;
  isMulti?: boolean;
  defaultValue?: MultiValue<Option> | SingleValue<Option> | null;
  placeholder?: string;
  isClearable?: boolean;
  Label?: string;
  showLabel?: boolean;
  name?: string;
}

const getCustomStyles = (isDarkMode: boolean): StylesConfig<Option> => ({
  control: (provided) => ({
    ...provided,
    border: isDarkMode ? "1px solid #c18500" : "1px solid #f39530",
    boxShadow: "none",
    "&:hover": {
      borderColor: isDarkMode ? "#c18500" : "#f39530",
    },
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: isDarkMode ? "#0e1013" : "#daf3ff",
    color: isDarkMode ? "#88d07a" : "#253b45",
    outline: "none",
    maxHeight: "60px",
    overflowY: "auto",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
    "&:hover": {
      color: isDarkMode ? "#88d07a" : "#253b45",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
    "&:hover": {
      color: isDarkMode ? "#88d07a" : "#253b45",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: isDarkMode ? "#88d07a" : "#253b45",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "100px",
    overflowY: "auto",
    backgroundColor: isDarkMode ? "#0e1013" : "#daf3ff",
    border: isDarkMode ? "1px solid #c18500" : "1px solid #f39530",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? isDarkMode
        ? "#163b48"
        : "#a3ffce"
      : state.isFocused
        ? isDarkMode
          ? "#163b48"
          : "#a3ffce"
        : undefined,
    color: state.isSelected
      ? isDarkMode
        ? "#daf3ff"
        : "#253b45"
      : state.isFocused
        ? isDarkMode
          ? "#daf3ff"
          : "#253b45"
        : isDarkMode
          ? "#daf3ff"
          : "#253b45",
    "&:hover": {
      backgroundColor: isDarkMode ? "#163b48b5" : "#a3ffceb5",
      color: isDarkMode ? "#daf3ff" : "#253b45",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: isDarkMode ? "#0e1013" : "#daf3ff",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: isDarkMode ? "#88d07a" : "#253b45",
  }),
});

// Use Select type for ref
const Choose = React.forwardRef<
  SelectInstance<Option, boolean, GroupBase<Option>> | null,
  ChooseProps
>(
  (
    {
      data,
      isLoading = false,
      onChange,
      error,
      disabled = false,
      isMulti = false,
      defaultValue,
      placeholder = "",
      isClearable = false,
      Label,
      name,
      showLabel = false,
    }: ChooseProps,
    ref,
  ) => {
    const { isDarkMode } = useDarkMode();

    const handleChange = (
      selectedOptions:
        | MultiValue<Option>
        | readonly Option[]
        | SingleValue<Option>
        | null,
    ) => {
      onChange(selectedOptions);
    };

    return (
      <div className="w-full">
        {showLabel && (
          <label
            htmlFor={placeholder}
            className="text-main-color dark:text-light-color block p-[3px] text-sm font-extrabold tracking-wider uppercase"
          >
            {Label}
          </label>
        )}
        <Select
          styles={getCustomStyles(isDarkMode)}
          ref={ref}
          name={name}
          className="w-full"
          options={data}
          onChange={handleChange}
          isClearable={isClearable}
          isLoading={isLoading}
          placeholder={placeholder}
          isDisabled={disabled}
          defaultValue={defaultValue}
          isMulti={isMulti}
        />

        <Error message={error} />
      </div>
    );
  },
);

export default Choose;
