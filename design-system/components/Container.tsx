import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  /** Container Color */
  backgroundColor: string

  /** Make Container grow to 100% */
  full?: boolean

  /** Make Container grow to 100% */
  fullVertical?: boolean

  /** Make Container smaller */
  small?: boolean

}

// Component
export const Container: React.FC<Props> = ({
  backgroundColor,
  full,
  fullVertical,
  small,
  children,
}) => (
  <StyledContainer
    style={ { backgroundColor:backgroundColor } }
    className={`${full ? "full" : ""} 
      ${small ? "small" : ""} 
      ${fullVertical ? "fullVertical" : ""} `
    }>
    {children}
  </StyledContainer>
)

// Styles
const StyledContainer = styled.div`
  padding-left: calc((100vw - 960px) / 2);
  padding-right: calc((100vw - 960px) / 2);
  padding-top: 25px;
  padding-bottom: 25px;
  height:100%;

  &:full {
    padding-left: 0;
    padding-right: 0;
  }

  &:fullVertical {
    padding-top: 0;
    padding-bottom: 0;
  }

  &:small {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
