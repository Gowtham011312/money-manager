export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-8">💰 Money Manager</h1>

      <nav className="flex flex-col gap-4 text-lg">
        <a className="hover:text-green-400 cursor-pointer">Dashboard</a>
        <a className="hover:text-green-400 cursor-pointer">Transactions</a>
        <a className="hover:text-green-400 cursor-pointer">Accounts</a>
      </nav>
    </div>
  );
}
