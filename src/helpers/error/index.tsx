import React, { Component } from 'react';
import Svg from '@/helpers/icons';

interface ErrorFormProps {
  isError: boolean; // Controls the visibility of the error message dialog
  message: string; // The text displayed in the error message dialog
  timeout: number | boolean; // Sets the auto-close behavior of the dialog (false for manual close, number for auto close in milliseconds)
  updateErrorState: () => void; // Callback function to hide/dismiss the error message from the parent component
  status: boolean; // Determines the color theme (red for false/error status, green for success status)
}

interface ErrorFormState {
  timeoutId: NodeJS.Timeout | null;
}

class ErrorForm extends Component<ErrorFormProps, ErrorFormState> {
  state: ErrorFormState = {
    timeoutId: null,
  };

  componentDidUpdate(prevProps: ErrorFormProps) {
    const { isError, timeout, updateErrorState } = this.props;

    if (isError !== prevProps.isError && isError && typeof timeout === 'number') {
      const timeoutId = setTimeout(() => {
        updateErrorState();
      }, timeout);

      this.setState({ timeoutId });
    }
  }

  clearTimeoutOnClose = () => {
    const { timeoutId } = this.state;
    if (timeoutId) {
      clearTimeout(timeoutId);
      this.setState({ timeoutId: null });
    }
    
    this.props.updateErrorState(); // Close the dialog manually
  };

  render() {
    const { message, isError, status } = this.props;

    return (
      <div className={`form-error ${isError && (status ? 'show-success' : 'show-error')}`}>
        <div className="container">
          <div className="content">{message}</div>
          <button onClick={this.clearTimeoutOnClose} id="cardHover"></button>
        </div>
      </div>
    );
  }
}

export default React.memo(ErrorForm);