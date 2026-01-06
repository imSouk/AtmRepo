function ServiceCard({ title, description }) {
  return (
    <div className="group rounded-lg border border-gray-200 p-6 transition hover:border-gray-900">
      <p className="mb-2 font-medium text-gray-900">
        {title}
      </p>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
