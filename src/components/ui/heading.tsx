export default function Heading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-600 to-orange-500 text-transparent bg-clip-text animate-gradient">
      {children}
    </h1>
  );
}
