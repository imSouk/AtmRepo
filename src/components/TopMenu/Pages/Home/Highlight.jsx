function Highlight({ title, description }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-semibold text-gray-900">
        {title}
      </p>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
export default Highlight;