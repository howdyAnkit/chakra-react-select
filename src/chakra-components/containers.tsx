import React from "react";
import type { ReactElement } from "react";
import { Box } from "@chakra-ui/layout";
import type { SystemStyleObject } from "@chakra-ui/system";
import type {
  ContainerProps,
  GroupBase,
  IndicatorsContainerProps,
  ValueContainerProps,
} from "react-select";
import type { Size, SizeProps } from "../types";

export const SelectContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ContainerProps<Option, IsMulti, Group>
): ReactElement => {
  const {
    children,
    className,
    cx,
    innerProps,
    isDisabled,
    isRtl,
    selectProps: { chakraStyles },
  } = props;

  const initialStyles: SystemStyleObject = {
    position: "relative",
    direction: isRtl ? "rtl" : undefined,
    // When disabled, react-select sets the pointer-state to none which prevents
    // the `not-allowed` cursor style from chakra from getting applied to the
    // Control when it is disabled
    pointerEvents: "auto",
  };

  const sx: SystemStyleObject = chakraStyles?.container
    ? chakraStyles.container(initialStyles, props)
    : initialStyles;

  return (
    <Box
      className={cx(
        {
          "--is-disabled": isDisabled,
          "--is-rtl": isRtl,
        },
        className
      )}
      sx={sx}
      {...innerProps}
    >
      {children}
    </Box>
  );
};

export const ValueContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
): ReactElement => {
  const {
    children,
    className,
    cx,
    isMulti,
    hasValue,
    selectProps: { size, chakraStyles },
  } = props;

  const px: SizeProps = {
    sm: "0.75rem",
    md: "1rem",
    lg: "1rem",
  };

  const initialStyles: SystemStyleObject = {
    d: "flex",
    alignItems: "center",
    flex: 1,
    p: `0.125rem ${px[size as Size]}`,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden",
  };

  const sx: SystemStyleObject = chakraStyles?.valueContainer
    ? chakraStyles.valueContainer(initialStyles, props)
    : initialStyles;

  return (
    <Box
      className={cx(
        {
          "value-container": true,
          "value-container--is-multi": isMulti,
          "value-container--has-value": hasValue,
        },
        className
      )}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export const IndicatorsContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: IndicatorsContainerProps<Option, IsMulti, Group>
): ReactElement => {
  const {
    children,
    className,
    cx,
    selectProps: { chakraStyles },
  } = props;

  const initialStyles: SystemStyleObject = {
    d: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0,
  };

  const sx: SystemStyleObject = chakraStyles?.indicatorsContainer
    ? chakraStyles.indicatorsContainer(initialStyles, props)
    : initialStyles;

  return (
    <Box
      className={cx(
        {
          indicators: true,
        },
        className
      )}
      sx={sx}
    >
      {children}
    </Box>
  );
};
