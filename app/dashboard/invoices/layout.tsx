export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t-8 border-blue-400">
        {children}
    </div>
  );
}