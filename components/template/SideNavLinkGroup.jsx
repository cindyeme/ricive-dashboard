import React, { useState } from "react";

function SideNavLinkGroup({ children, activeCondition }) {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-4 py-3 rounded-sm mb-0.5 last:mb-0 ${
        activeCondition && "bg-primary-100"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SideNavLinkGroup;
