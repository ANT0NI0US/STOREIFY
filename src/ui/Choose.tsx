import React from "react";
import Select, {
  MultiValue,
  SingleValue,
  StylesConfig,
  GroupBase,
  SelectInstance,
} from "react-select";
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
  disabled?: boolean;
  isMulti?: boolean;
  defaultValue?: MultiValue<Option> | SingleValue<Option> | null;
  placeholder?: string;
  isClearable?: boolean;
  name?: string;
}

const getCustomStyles = (isDarkMode: boolean): StylesConfig<Option> => ({
  control: (provided) => ({
    ...provided,
    border: isDarkMode ? "3px solid #6e5e48" : "3px solid #bbab8c",
    boxShadow: "none",
    "&:hover": {
      borderColor: isDarkMode ? "#6e5e48" : "#bbab8c",
    },
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ded0b6",
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
    outline: "none",
    overflowY: "auto",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
    "&:hover": {
      color: isDarkMode ? "#e8d6c2" : "#4b352a",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
    "&:hover": {
      color: isDarkMode ? "#e8d6c2" : "#4b352a",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: isDarkMode ? "#e8d6c2" : "#4b352a",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "100px",
    overflowY: "auto",
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ded0b6",
    border: isDarkMode ? "1px solid #6e5e48" : "1px solid #bbab8c",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? isDarkMode
        ? "#2a2a2a"
        : "#faeed1"
      : state.isFocused
        ? isDarkMode
          ? "#2a2a2a"
          : "#faeed1"
        : undefined,
    color: state.isSelected
      ? isDarkMode
        ? "#6e5e48"
        : "#bbab8c"
      : state.isFocused
        ? isDarkMode
          ? "#6e5e48"
          : "#bbab8c"
        : isDarkMode
          ? "#e8d6c2"
          : "#4b352a",
    "&:hover": state.isSelected
      ? {}
      : {
          backgroundColor: isDarkMode ? "#163b48b5" : "#a3ffceb5",
          color: isDarkMode ? "#ded0b6" : "#4b352a",
        },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ded0b6",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: isDarkMode ? "#e8d6c2" : "#4b352a",
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
      disabled = false,
      isMulti = false,
      defaultValue,
      placeholder = "",
      isClearable = false,
      name,
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
      </div>
    );
  },
);

export default Choose;
