import React from "react";

let Button = ({ active, children, onClick }) => (
  <button
    className="btn btn-primary"
    onClick={onClick}
    disabled={active}
    style={{ marginLeft: '4px'}}
  >
    {children}
  </button>
)

export default Button