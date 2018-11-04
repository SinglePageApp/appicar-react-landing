import React, { Component } from "react";
import { I18n } from 'react-i18next';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

import "./SearchBox.css";


export default class SearchBox extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();
    // State.
    this.state = {
      selectedAction: 'searchbox.eatAction'
    }
    // Methods.
    this.handleSelect = this.handleSelect.bind(this);
  }

  /**
   * Handles the menu item's action (eat or drink) dropdown.
   * 
   * @param {*} eventKey 
   */
  handleSelect(eventKey) {
    this.setState({
      selectedAction: 'searchbox.' + eventKey
    });
  }

  /**
   * Transform an action into menu item's type (food or drink).
   */
  getMenuTypeFromAction(action) {
    return action === 'searchbox.eatAction' ? 'searchbox.food' : 'searchbox.drink';
  }

  /**
   * Handles the search submition.
   * 
   * @param {Event} e The event's instance.
   */
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="search-box" onSubmit={ this.handleSubmit }>
        <I18n>
          {
            (t) => (
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    { t('searchbox.iWant') }&nbsp;
                    <DropdownButton
                      title={ t(this.state.selectedAction) }
                      key="drop-down"
                      id="searchbox-drop-down"
                      onSelect={ this.handleSelect }
                    >
                      <MenuItem eventKey="eatAction" active={ this.state.selectedAction === 'searchbox.eatAction' }>
                        { t('searchbox.eatAction') }
                      </MenuItem>
                      <MenuItem eventKey="drinkAction" active={ this.state.selectedAction === 'searchbox.drinkAction' }>
                        { t('searchbox.drinkAction') }
                      </MenuItem>
                    </DropdownButton>
                  </InputGroup.Addon>
                  <FormControl
                    type="text"
                    placeholder={
                      t('searchbox.input') + t(this.getMenuTypeFromAction(this.state.selectedAction)) + t('searchbox.category')
                    }
                  />
                  <InputGroup.Addon>
                    <FormControl type="submit" value={ t('searchbox.reset') } bsClass="search-reset" />
                    <FormControl type="submit" value={ t('searchbox.go') } bsClass="search-go" />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            )
          }
        </I18n>
      </form>
    );
  }
}
