import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  theme?: string
  image?: string
  title: string
  body: string
  footer: string
  shadow: number,
  /** Disable button */
  disabled?: boolean

  /** Button kind */
  kind?: "default" | "dark"
}

// const defaults: Props = {
//   theme: "light",
//   image: "",
//   title: "",
//   body: "",
//   footer: "",
//   shadow: 2,
//   disabled: false,
//   kind:"default"
// }

// Component
export const Card: React.FC<Props> = ({
  theme,
  title,
  body,
  footer,
  shadow,
  disabled
}) => (
  <StyledCard>
    <Title>{title}</Title>
    <Description>{body}</Description>
    <Footer>{footer}</Footer>
  </StyledCard>
)

const Title = styled.h1`
  // color: #fff;
  font-weight: 300;
  font-family: Roboto Black;
`

const Description = styled.p`
  // color: #fff;
  font-weight: 300;
  font-family: ${theme.font};
`

const Footer = styled.h3`
  // color: #fff;
  font-weight: 300;
  font-family: Roboto;
`



// Styles
const StyledCard = styled.div`
  background: ${theme.color.paneBg};
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: ${theme.color.body};
  // font-size: 15px;
  // font-weight: 600;
  // letter-spacing: -0.2px;
  // line-height: 1.1;
  margin: 0;
  padding: ${theme.space[3]};
  text-align: left;
  height: 100%;
  &:hover {
    color: ${theme.color.bodyLight};
    transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  }
  &:active {
    transition: none;
    color: ${theme.color.bodyLighter};
    background-color: ${theme.color.paneBgDark};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
  }
  &.fluid {
    width: 100%;
  }
  &.disabled {
    color: ${theme.color.bodyLightest};
    pointer-events: none;
  }

  /* Primary styles */
  &.primary {
    background: ${theme.color.primary};
    color: #fff;
  }
  &.primary:hover {
    color: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.15);
  }
  &.primary:active {
    color: rgba(255, 255, 255, 0.7);
    background: ${theme.color.primaryDark};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
  }
`



// const defaults: Props = {
//     theme: "light",
//     image: "",
//     overlay: false,
//     title: "",
//     body: "",
//     footer: "",
//     toggle: "",
//     withToggle: false,
//     iconToggle: "Heart",
//     shadow: 2,
// }

// export function Card(props: Props = defaults) {
//     const themeContext = useContext(ThemeContext)
//     const {
//         width,
//         height,
//         color,
//         image,
//         overlay,
//         title,
//         body,
//         footer,
//         theme,
//         intent,
//         toggle,
//         withToggle,
//         iconToggle,
//         ...rest
//     } = props
//     const dynamicToggle = withToggle ? iconToggle : toggle
//     const dynamicTheme = themeContext || themes[theme]
//     const toggleComponent = (intent: Intent) =>
//         dynamicToggle && (
//             <Toggle
//                 color={image && parseColor(dynamicTheme.color.white)}
//                 icon={dynamicToggle}
//                 intent={intent}
//                 style={{
//                     position: "absolute",
//                     top: "var(--card-padding)",
//                     right: "var(--card-padding)",
//                 }}
//                 theme={dynamicTheme}
//             />
//         )

//     return centerLayout(
//         props,
//         <D
//             color={color}
//             height={height}
//             width={width}
//             {...rest}
//             padding={false}
//             theme={dynamicTheme}
//         >
//             <Stack
//                 background="transparent"
//                 direction="vertical"
//                 gap={0}
//                 size="100%"
//             >
//                 {image && (
//                     <Frame
//                         background="transparent"
//                         height="1fr"
//                         overflow="hidden"
//                         width="1fr"
//                     >
//                         <Image
//                             image={image}
//                             intent={intent}
//                             overlay={overlay}
//                         />
//                         {toggleComponent("text")}
//                     </Frame>
//                 )}
//                 {(title || body || ((withToggle || toggle) && !image)) && (
//                     <Frame
//                         background="transparent"
//                         height="auto"
//                         style={{
//                             padding: "var(--card-padding)",
//                         }}
//                         width="100%"
//                     >
//                         {title && (
//                             <Heading
//                                 color={color}
//                                 level={4}
//                                 style={{
//                                     marginBottom:
//                                         (body || footer) &&
//                                         "calc(var(--card-padding) / 2)",
//                                 }}
//                                 theme={themeContext || themes[theme]}
//                             >
//                                 {title}
//                             </Heading>
//                         )}
//                         {body && (
//                             <Text
//                                 color={color}
//                                 theme={themeContext || themes[theme]}
//                             >
//                                 {body}
//                             </Text>
//                         )}
//                         {footer && (
//                             <Text
//                                 color={color}
//                                 small
//                                 style={{
//                                     opacity: 0.5,
//                                     marginTop:
//                                         (body || title) &&
//                                         "calc(var(--card-padding) / 2)",
//                                 }}
//                                 theme={themeContext || themes[theme]}
//                             >
//                                 {footer}
//                             </Text>
//                         )}
//                         {!image && toggleComponent(intent)}
//                     </Frame>
//                 )}
//             </Stack>
//         </div>
//     )
// }

// Card.defaultProps = {
//     ...defaults,
// }

// addPropertyControls(Card, {
//     ...themeControls(defaults.theme),
//     ...intentControls(defaults.intent),
//     image: {
//         type: ControlType.Image,
//         title: "Image",
//     },
//     overlay: {
//         type: ControlType.Boolean,
//         title: "Overlay",
//         enabledTitle: "Visible",
//         disabledTitle: "Hidden",
//         defaultValue: defaults.overlay,
//     },
//     withToggle: {
//         type: ControlType.Boolean,
//         title: "Toggle",
//         defaultValue: false,
//         enabledTitle: "Icon",
//         disabledTitle: "None",
//     },
//     ...iconControls(defaults.iconToggle, false, "withToggle", "iconToggle"),
//     title: {
//         type: ControlType.String,
//         title: "Title",
//         defaultValue: defaults.title,
//     },
//     body: {
//         type: ControlType.String,
//         title: "Body",
//         defaultValue: defaults.body,
//     },
//     footer: {
//         type: ControlType.String,
//         title: "Footer",
//         defaultValue: defaults.footer,
//     },
//     shadow: {
//         type: ControlType.Number,
//         title: "Shadow",
//         defaultValue: defaults.shadow,
//         min: 0,
//         max: 4,
//         displayStepper: true,
//     },
// })
