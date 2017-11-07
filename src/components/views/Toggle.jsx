import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";
import styles from "../scss/Toggle.module.scss";
export default class Toggle extends Component {
  render() {
    return (
      <div className={styles.toggle}>
        <Checkbox toggle onClick={this.props.toggle} />
      </div>
    );
  }
}
