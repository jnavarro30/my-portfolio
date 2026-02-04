import React, { useEffect } from "react";

function Modal({ open, onClose, title, children, className = "" }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => onClose?.()}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={`w-full max-w-lg rounded-lg bg-white text-black dark:bg-neutral-900 dark:text-white shadow-2xl ${className}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
            <div className="font-montserrat tracking-wider text-sm">{title}</div>
            <button
              type="button"
              onClick={() => onClose?.()}
              className="text-xl leading-none px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
