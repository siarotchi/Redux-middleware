import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`Error: `, error);
    console.log(`Error info: `, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Error</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
