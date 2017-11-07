import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import TwitterAccountList from "./TwitterAccountList";
import SettingsButton from "./SettingsButton";
import Toggle from "./Toggle";
import Options from "./Options";
import styles from "../scss/Main.module.scss";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <SettingsButton />
          <Toggle {...this.props} />
          <Options />
        </div>
        <Row>
          <Col md="12" sm="12">
            <TwitterAccountList
              accounts={this.props.accounts}
              isFollow={this.props.isFollow}
              handleRemove={this.props.handleRemove.bind(this)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
