export default function DarkToggle() {

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button 
      onClick={toggleDark}
      className="bg-slate-700 text-white px-4 py-2 rounded-lg"
    >
      🌙 Toggle Dark Mode
    </button>
  );
}
