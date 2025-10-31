import PropTypes from "prop-types";

import "./square-and-close.css";

export const CloseButton = ({ onClick, ...props }) => {
  return (
    <button
      type="button"
      className="close-button"
      onClick={onClick}
      aria-label="Close"
      {...props}
    >
      &times;
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};
