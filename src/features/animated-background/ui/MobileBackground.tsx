export function MobileBackground({ theme }: { theme: {
    base: string;
    accent: string;
} }) {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            500px at 50% 30%,
            ${theme.accent},
            ${theme.base} 70%
          )
        `,
      }}
    />
  );
}
