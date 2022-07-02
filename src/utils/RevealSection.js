import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import * as actions from "../actions"
const RevealSection = (ChildComponent) => {
   class WrapperComponent extends Component {
    constructor(props) {
      super(props);
      this.sectionRef = createRef(null);
      this.state = {
        feature_reveal: false,
        signup_reveal: false,
      };
    }

    observerCallback = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        return;
      }
      let value=  this.sectionRef.current.dataset
      this.setState({ [`${value.reveal}_reveal`]: true });
    };

    componentDidMount() {
      let observer = new IntersectionObserver(this.observerCallback, {
        root: null,
        threshold: 0.15,
      });
      observer.observe(this.sectionRef?.current);
      return () => {
        observer.disconnect(this.sectionRef);
      };
    }

    render() {
      return (
        <ChildComponent
          sectionRef={this.sectionRef}
          feature_reveal={this.state.feature_reveal}
          signup_reveal={this.state.signup_reveal}
          {...this.props}
        />
      );
    }
  };

  return connect(null,actions)(WrapperComponent);
};

export default RevealSection;
