import React from "react";

function IconButton({
  onClick,
  children,
  size = 40,
  className = "",
  ariaLabel,
  type = "button",
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/15 ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </button>
  );
}

export default IconButton;
