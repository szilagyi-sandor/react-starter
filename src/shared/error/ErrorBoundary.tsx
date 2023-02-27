import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

type Props = {
  fallback?: ReactNode | undefined;
  onCatch?: (error: Error, errorInfo: ErrorInfo) => void;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<
  PropsWithChildren<Props>,
  State
> {
  constructor(props: PropsWithChildren<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onCatch } = this.props;

    if (onCatch) {
      onCatch(error, errorInfo);
    }
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      return fallback !== undefined ? fallback : null;
    }

    return children;
  }
}
