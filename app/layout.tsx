import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 h-screen">
        {children}
      </body>
    </html>
  );
}
