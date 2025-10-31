import { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { CloseButton } from "./CloseButton";
import "./square-and-close.css";

export const Square = ({
  initialIsClosed = false,
  label = "Hover to Close",
  onClose,
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(initialIsClosed);

  const handleClose = useCallback(() => {
    setIsClosed(true);
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const classes = ["closable-square"];
  if (isClosed) {
    classes.push("closable-square--closed");
  }

  return (
    <div className={classes.join(" ")} {...props}>
      {isClosed ? "Closed" : label}
      {!isClosed && <CloseButton onClick={handleClose} />}
    </div>
  );
};

Square.propTypes = {
  initialIsClosed: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
};
