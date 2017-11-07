import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import styles from "../scss/SettingsPage.module.scss";

export default class SettingsPage extends Component {
  state = {
    activeModal: null,
    languages: [
      "English",
      "Spanish",
      "Italian",
      "French",
      "Mandarin",
      "Cantonese"
    ]
  };

  openModal(modal) {
    this.setState({ activeModal: modal });
  }

  closeModal() {
    this.setState({ activeModal: null });
  }

  render() {
    return (
      <div className={styles.container}>
        <Link to="/" className={styles.backButton}>
          <Icon name="chevron left" size="large" />
          <span>Back</span>
        </Link>
        <Modal
          isOpen={this.state.activeModal === "region"}
          onClose={() => this.closeModal()}
        >
          <h1 className={styles.modalHeader}>Region Settings</h1>
          <form>
            <label for="usa">
              <input type="checkbox" id="usa" value="usa" /> {" " + "USA"}
            </label>
          </form>
          <button className={styles.close} onClick={() => this.closeModal()}>
            Close
          </button>
        </Modal>
        <Modal
          isOpen={this.state.activeModal === "language"}
          onClose={() => this.closeModal()}
        >
          <h1 className={styles.modalHeader}>Language Settings</h1>
          <h2>Only Follow</h2>
          <form>
            {this.state.languages.map(language => (
              <label for={language} className={styles.control}>
                <input type="checkbox" id={language} /> {" " + language}
              </label>
            ))}
          </form>
          <button className={styles.close} onClick={() => this.closeModal()}>
            Close
          </button>
        </Modal>
        <Modal
          isOpen={this.state.activeModal === "nsfw"}
          onClose={() => this.closeModal()}
        >
          <h1 className={styles.modalHeader}>NSFW Settings</h1>
          <button className={styles.close} onClick={() => this.closeModal()}>
            Close
          </button>
        </Modal>
        <Modal
          isOpen={this.state.activeModal === "misc"}
          onClose={() => this.closeModal()}
        >
          <h1 className={styles.modalHeader}>Misc</h1>
          <button className={styles.close} onClick={() => this.closeModal()}>
            Close
          </button>
        </Modal>
        <div className={styles.flexContainer}>
          <a className={styles.region} onClick={() => this.openModal("region")}>
            <div>Region Settings</div>
          </a>
          <a
            className={styles.language}
            onClick={() => this.openModal("language")}
          >
            Language Settings
          </a>
          <a className={styles.nsfw} onClick={() => this.openModal("nsfw")}>
            NSFW Settings
          </a>
          <a className={styles.misc} onClick={() => this.openModal("misc")}>
            Misc. Unfollows
          </a>
        </div>
      </div>
    );
  }
}
