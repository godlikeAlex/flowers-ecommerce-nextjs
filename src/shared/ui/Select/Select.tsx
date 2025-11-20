"use client";

import { ComponentProps } from "react";

import DPSelect from "react-dropdown-select";
import styled from "@emotion/styled";
import { CaretUpIcon } from "@phosphor-icons/react/dist/ssr/CaretUp";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";

export default function Select({
  dropdownHandleRenderer,
  ...props
}: ComponentProps<typeof DPSelect>) {
  return (
    <StyledSelect
      {...props}
      dropdownHandleRenderer={
        dropdownHandleRenderer
          ? dropdownHandleRenderer
          : ({ state }) => {
              if (state.dropdown) return <CaretUpIcon />;

              return <CaretDownIcon />;
            }
      }
    />
  );
}

const StyledSelect = styled(DPSelect)`
  /*background: #333;*/
  /*border: #333 !important;*/
  color: black;

  border: none;
  background-image: var(--primary-dashed-border);
  border-radius: 5px;

  background-color: var(--body-background);
  padding: 0 clamp(12px, 0.83vw, 24px);
  height: clamp(42px, 2.917vw, 72px);
  color: #808080;
  font-size: 100%;
  box-shadow: none !important;

  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: var(--primary-color);
    display: flex;
    align-items: center;
  }

  .react-dropdown-select-option {
    border: 1px solid #fff;
  }

  .react-dropdown-select-item {
    color: #333;

    outline: none !important;
  }

  .react-dropdown-select-input {
    color: #808080;
    font-size: clamp(13px, 0.833vw, 22px);
  }

  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    max-height: 300px;
    overflow: auto;
    z-index: 9;
    background: var(--body-background);
    box-shadow:
      rgba(0, 0, 0, 0.05) 2px 1px 5px 0px,
      rgba(0, 0, 0, 0.04) 7px 6px 9px 0px,
      rgba(0, 0, 0, 0.03) 15px 13px 12px 0px,
      rgba(0, 0, 0, 0.01) 26px 23px 14px 0px,
      rgba(0, 0, 0, 0) 41px 37px 15px 0px;
  }

  .react-dropdown-select-item {
    color: black;
    /*font-size: clamp(14px, 0.833vw, 22px);*/
    border-bottom: none;
    line-height: clamp(32px, 2.083vw, 45px);
    min-height: clamp(32px, 2.083vw, 45px);
    padding: 0 clamp(12px, 0.83vw, 24px);

    :hover {
      color: var(--primary-color);
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    //background: #111;
    /*border-bottom: 1px solid #333;*/
    color: #fff;
    outline: none !important;
    background: var(--primary-color);
  }

  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
  }
` as typeof DPSelect;
