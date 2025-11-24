import "./globals.css";

export const metadata = {
  title: "ProbSolv",
  description: "Your React → Next.js App Router migrated project"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
