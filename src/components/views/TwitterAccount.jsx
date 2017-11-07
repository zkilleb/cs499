import React, { Component } from "react";

import styles from "../scss/TwitterAccount.module.scss";

export default class TwitterAccount extends Component {
  render() {
    const follow = this.props.isFollow;
    return (
      <div className={this.props.className}>
        <div>
          <span
            style={{
              fontSize: "24px"
            }}
          >
            {this.props.name}
          </span>
          <span
            style={{
              fontSize: "16px"
            }}
          >
            {" @" + this.props.username}
          </span>
          <br />
          <span>{"Reason: " + this.props.reason}</span>
          <br />
          <button
            className={styles.ghostButton}
            onClick={this.props.handleRemove}
          >
            Never {follow === true ? "Follow" : "Unfollow"}
          </button>
          <button
            className={styles.ghostButton}
            onClick={this.props.handleRemove}
          >
            {follow === true ? "Follow" : "Unfollow"}
          </button>
        </div>
      </div>
    );
  }
}
