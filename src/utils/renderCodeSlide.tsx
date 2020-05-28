import React from "react";
import {
  TypographyProps,
  Slide,
  Heading,
  Stepper,
  Box,
  CodePane,
  //@ts-ignore
  indentNormalizer
} from "spectacle";
//@ts-ignore
import darkTheme from 'prism-react-renderer/themes/vsDark';

export interface CodeSlide {
  headerProps: TypographyProps,
  description?: JSX.Element,
  stepperProps: {
    values: number[][];
    defaultValue: number[] | [];
  },
  type: 'code',
  code: string,
};

export const renderCodeSlide = ({
  code,
  headerProps,
  description,
  stepperProps
}: CodeSlide) => (
    <Slide backgroundColor="backgroundColor">
      <Heading {...headerProps} />

      {description !== undefined && description}

      <Stepper {...stepperProps}>
        {value => (
          <Box width="100%" height="100%">
          <CodePane
              fontSize={30}
              highlightStart={value[0]}
              highlightEnd={value[1]}
              language="typescript"
              autoFillHeight
              theme={{
                ...darkTheme,
                sizes: {
                  minWidth: '100%'
                }
              }}
            >
            {indentNormalizer(code)}
            </CodePane>
          </Box>
        )}
      </Stepper>
    </Slide>
  );