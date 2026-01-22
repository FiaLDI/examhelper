"use client";

import type { Theme } from "../model/background.config";

interface Props {
  theme: Theme;
}

export const IOSBackground = ({ theme }: Props) => {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            420px at 50% 25%,
            ${theme.accent},
            ${theme.base} 70%
          )
        `,
      }}
    />
  );
};
