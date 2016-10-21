import React from "react";

const Button = ({ action, color, label }) => (
    <div className="mb1">
      <button className={ `btn btn-${ color } button-${ color }` } onClick={ action }>
          { label }
      </button>
    </div>
);

Button.PropTypes = {
    color: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired,
};

export default Button;
