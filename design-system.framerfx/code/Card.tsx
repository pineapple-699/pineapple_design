import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.CardProps & {
  image?: string;
  title: string;
  body: string;
  footer: string;
  shadow: number;
  /** Disable button */
  disabled?: boolean

  /** Button kind */
  kind?: "default" | "dark"
}

export class Card extends React.Component<Props> {
  render() {
    return <System.Card {...this.props} />
  }

  static defaultProps: Props = {
    title: "Title",
    body: "Description, Description, Description",
    footer: "Footer",
    shadow: 20,
    disabled:false,
    kind: "default"
  }

  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: "Title" },
    body: { type: ControlType.String, title: "Body" },
    footer: { type: ControlType.String, title: "Footer" },
    kind: {
      type: ControlType.Enum,
      options: ["default", "primary", "danger"],
      optionTitles: ["Default", "Primary", "Danger"]
    },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    // fluid: { type: ControlType.Boolean, title: "Fluid" }
  }
}
