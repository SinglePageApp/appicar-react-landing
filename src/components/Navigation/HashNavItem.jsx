import React, { Component } from "react";
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default class HashNavItem extends Component {

  constructor(props) {
    super(props);
    // Atributes.
    this.hashFragment = '';
    this.observer = null;
    this.asyncTimerId = null;
    this.scrollFunction = null;
    this.state = {
      key: props.key,
      name: props.name,
      to: props.to
    }
    // Methods.
    this.reset = this.reset.bind(this);
    this.getElAndScroll = this.getElAndScroll.bind(this);
    this.hashLinkScroll = this.hashLinkScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  reset() {
    this.hashFragment = '';
    if (this.observer !== null) this.observer.disconnect();
    if (this.asyncTimerId !== null) {
      window.clearTimeout(this.asyncTimerId);
      this.asyncTimerId = null;
    }
  }
  
  getElAndScroll() {
    const element = document.getElementById(this.hashFragment);
    if (element !== null) {
      this.scrollFunction(element);
      this.reset();
      return true;
    }
    return false;
  }

  hashLinkScroll() {
    // Push onto callback queue so it runs after the DOM is updated
    window.setTimeout(() => {
      if (this.getElAndScroll() === false) {
        if (this.observer === null) {
          this.observer = new MutationObserver(this.getElAndScroll);
        }
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
  
  handleClick(e) {
    this.reset();
    if (this.props.onClick) this.props.onClick(e);
    if (typeof this.props.to === 'string') {
      this.hashFragment = this.props.to
        .split('#')
        .slice(1)
        .join('#');
    } else if (
      typeof this.props.to === 'object' &&
      typeof this.props.to.hash === 'string'
    ) {
      this.hashFragment = this.props.to.hash.replace('#', '');
    }
    if (this.hashFragment !== '') {
      this.scrollFunction =
        this.props.scroll || (el =>
          el.scrollIntoView(this.props.smooth ? { behavior: 'smooth' } : undefined)
        );
      this.hashLinkScroll();
    }
  }

  render() {
    return (
      <LinkContainer to={ this.state.to } key={ this.state.key }>
        <NavItem onClick={ this.handleClick }>{ this.state.name } </NavItem>
      </LinkContainer>
    );
  }
}
