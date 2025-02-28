import React, { ReactNode } from "react";

interface IErrorBoundaryProps {
  fallback: ReactNode;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren | IErrorBoundaryProps
> {
  state: any;
  children: ReactNode;
  fallback: ReactNode;
  constructor(props: React.PropsWithChildren & IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.children = props.children;
    this.fallback = props.fallback;
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <>{this.fallback}</>;
    }
    return <>{this.children}</>;
  }
}

export default ErrorBoundary;
