"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useModalStore } from "../model/modalStore";
import { createPortalNode } from "../lib/createPortalNode";

type Portal = ReturnType<typeof createPortalNode>;

export const ModalContainer = () => {
  const { open, content, closeModal } = useModalStore();

  // ✅ lazy init — NOT in effect
  const [portal] = useState<Portal | null>(() => {
    if (typeof window === "undefined") return null;
    return createPortalNode();
  });

  // ✅ cleanup only (no setState)
  useEffect(() => {
    return () => {
      portal?.remove();
    };
  }, [portal]);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // esc handler
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  // ✅ render uses STATE only
  if (!open || !portal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative min-w-[300px] max-w-[80vw] rounded-xl bg-gray-800 p-6">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 hover:text-red-400"
        >
          <X />
        </button>

        {content}
      </div>
    </div>,
    portal.node
  );
};
