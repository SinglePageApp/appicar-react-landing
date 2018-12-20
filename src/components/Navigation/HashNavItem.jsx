import React, { Component } from "react";
import { NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";

export default class HashNavItem extends Component {
  /**
   * Constructor.
   * 
   * @param {any} props The components properties. 
   */
  constructor(props) {
    super(props);
    // Atributes.
    this.hashFragment = '';
    this.observer = null;
    this.asyncTimerId = null;
    this.scrollFunction = null;
    // States.
    this.state = {
      key: props.eventKey,
      name: props.name,
      to: props.to
    }
    // Methods.
    this.reset = this.reset.bind(this);
    this.getElAndScroll = this.getElAndScroll.bind(this);
    this.hashLinkScroll = this.hashLinkScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Re-render on props updated.
   * 
   * @param {any} props The components properties. 
   */
  componentWillReceiveProps(props) {
    this.setState({
      key: props.eventKey,
      name: props.name,
      to: props.to
    });
  }

  /**
   * Resets properties' values.
   */
  reset() {
    this.hashFragment = '';
    // Disconnect the observer.
    if (this.observer !== null) { 
      this.observer.disconnect();
    }
    // Clear the timeout.
    if (this.asyncTimerId !== null) {
      window.clearTimeout(this.asyncTimerId);
      this.asyncTimerId = null;
    }
  }
  
  /**
   * Gets the element specified in the hash fragment of the URL and scrolls to its position.
   * 
   * @returns {boolean} true if the element was found.
   *                    false if the element wasn't found.
   */
  getElAndScroll() {
    let state = false;
    const element = document.getElementById(this.hashFragment);
    // If element found scroll to its position.
    if (element !== null) {
      this.scrollFunction(element);
      this.reset();
      state = true;
    }

    return state;
  }

  /**
   * Scrolls to the element specified in the hash fragment of the URL.
   */
  hashLinkScroll() {
    // Push onto callback queue so it runs after the DOM is updated
    window.setTimeout(() => {
      if (this.getElAndScroll() === false) {
        // Check existence. On not already created, instance a new observer.
        if (this.observer === null) {
          this.observer = new MutationObserver(this.getElAndScroll);
        }
        // Attach the observable object to the observer.
        this.observer.observe(document, {
          attributes: true,
          childList: true,
          subtree: true,
        });
        // if the element doesn't show up in 10 seconds, stop checking
        this.asyncTimerId = window.setTimeout(() => {
          this.reset();
        }, 10000);
      }
    }, 0);
  }
  
  /**
   * Handles the click event.
   * 
   * @param {Event} e The event's instance.
   */
  handleClick(e) {
    this.reset();
    // If the onClick event was specified in the prop, executed.
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    // Obtain the hash fragment of the URL.
    if (typeof this.props.to === 'string') {
      this.hashFragment = this.props.to
        .split('#')
        .slice(1)
        .join('#');
    } else if ( typeof this.props.to === 'object' && typeof this.props.to.hash === 'string') {
      this.hashFragment = this.props.to.hash.replace('#', '');
    }
    // Scroll to the element.
    if (this.hashFragment !== '') {
      this.scrollFunction =
        this.props.scroll || (el =>
          el.scrollIntoView(this.props.smooth ? { behavior: 'smooth' } : undefined)
        );
      this.hashLinkScroll();
    }
  }

  /**
   * Renders the component.
   * 
   * @returns {string} The component's JSX code.
   */
  render() {
    return (
      <IndexLinkContainer to={ this.state.to }>
        <NavItem eventKey={ this.state.key } key={ this.state.key } onClick={ this.handleClick }>
          { this.state.name }
        </NavItem>
      </IndexLinkContainer>
    );
  }
}
