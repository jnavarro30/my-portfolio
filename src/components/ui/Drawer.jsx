import React, { useEffect } from "react";

const sizeToPx = {
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
};

function Drawer({
  open,
  onClose,
  title,
  children,
  position = "left",
  size = "md",
  lockScroll = true,
  className = "",
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);

    let previousOverflow;
    if (lockScroll) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (lockScroll) document.body.style.overflow = previousOverflow ?? "";
    };
  }, [open, onClose, lockScroll]);

  if (!open) return null;

  const px = sizeToPx[size] ?? sizeToPx.md;
  const isTop = position === "top";
  const isBottom = position === "bottom";
  const isRight = position === "right";

  const panelStyle = isTop || isBottom ? { height: px } : { width: px };

  const panelBase =
    "fixed bg-white text-black dark:bg-neutral-900 dark:text-white shadow-2xl z-50";

  const panelPos = isTop
    ? "top-0 left-0 right-0"
    : isBottom
      ? "bottom-0 left-0 right-0"
      : isRight
        ? "top-0 bottom-0 right-0"
        : "top-0 bottom-0 left-0";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => onClose?.()}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`${panelBase} ${panelPos} ${className}`}
        style={panelStyle}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
          <div className="font-montserrat tracking-wider text-sm">
            {title}
          </div>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="text-xl leading-none px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-5 overflow-auto h-full">{children}</div>
      </div>
    </>
  );
}

export default Drawer;
