import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import styled from 'styled-components'

const BarContainer = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  width: 100%;
  /* height: 100%; */
  color: #333;
  border-radius: 6px;
  padding: 8px;
  background: #fff;

  .row {
    padding: 12px 20px;
    text-align: left;
    font-size: 13px;
    font-weight: normal;
    color: #666666;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.2s ease-out;
    box-shadow: 0 1px 0 #E6E6E6;

    &:last-child {
        box-shadow: none;
    }

    &:nth-of-type(5) {
        background: ${props => props.selected};
    }

    &:hover {
      color: black;
      background: #f3f3f3;
      font-weight: medium;
    }
  }
`

// Define type of property
interface Props {
  text: string,
  navTitle: [],
  selected: string
}

export class sidebar extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: 'test',
    navTitle: {
      button: '按钮 | Button',
      navigation: '导航 | Navigation',
      input: '输入框 | Input',
      loading: '加载 | Loading',
    },
    selected: 'black'
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    selected: { type: ControlType.Color, title: 'selected' },
  }

  render() {
    return (
      <BarContainer selected={this.props.selected}>
        <div className="row" >
          <p>{this.props.navTitle.button}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.navigation}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.input}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.loading}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.loading}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.loading}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.loading}</p>
        </div>
        <div className="row">
          <p>{this.props.navTitle.loading}</p>
        </div>
      </BarContainer>
    )
  }
}
