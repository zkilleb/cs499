import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "../scss/SettingsButton.module.scss";

export default class Settings extends Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <Link to="/settings">
          <Icon name="settings" size="large" className={styles.settingsIcon} />
        </Link>
      );
    } else {
      return (
        <Link to="/settings">
          <Button className={styles.iconButton}>
            <Icon name="settings" size="large" className={styles.bigIcon} />
            Settings
          </Button>
        </Link>
      );
    }
  }
}
