import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ContainerProps & {
  width: number
  height: number
}

export class Container extends React.Component<Props> {
  render() {
    return <System.Container size="100%" {...this.props} />
  }

  static defaultProps: Props = {
    backgroundColor:"#FFFAFA",
    width: 800,
    height: 800,
    full: false,
    fullVertical: false,
    small:false
  }

  static propertyControls: PropertyControls<Props> = {
    backgroundColor: { type: ControlType.String, title: "Background Color" },
    full: { type: ControlType.Boolean, title: "Full" },
    fullVertical: { type: ControlType.Boolean, title: "Full Vertical" },
    small: { type: ControlType.Boolean, title: "Small" },
    // fluid: { type: ControlType.Boolean, title: "Fluid" }
  }
}
