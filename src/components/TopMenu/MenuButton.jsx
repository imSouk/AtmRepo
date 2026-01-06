function MenuButton({ label, page, onNavigate }) {
  return (
    <button
      onClick={() => onNavigate(page)}
      className="rounded-md border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
    >
      {label}
    </button>
  );
}

export default MenuButton;
