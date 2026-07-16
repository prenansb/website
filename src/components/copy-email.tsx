"use client";

import { useCallback, useState } from "react";
import { CopyToast } from "@/components/copy-toast";

type CopyEmailProps = {
  email: string;
  className?: string;
  children: React.ReactNode;
};

export function CopyEmail({ email, className, children }: CopyEmailProps) {
  const [toastKey, setToastKey] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const dismiss = useCallback(() => {
    setShowToast(false);
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setToastKey((key) => key + 1);
    setShowToast(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={`border-0 bg-transparent p-0 [font:inherit] ${className ?? ""}`}
        aria-label={`Copy ${email} to clipboard`}
      >
        {children}
      </button>
      {showToast ? (
        <CopyToast key={toastKey} onComplete={dismiss} />
      ) : null}
    </>
  );
}
