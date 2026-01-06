function TopMenuItem({ label, page, onNavigate, isActive }) {
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`text-sm transition ${
        isActive
          ? "font-medium text-gray-900"
          : "text-gray-700 hover:text-gray-900"
      }`}
    >
      {label}
    </button>
  );
}

export default TopMenuItem;
