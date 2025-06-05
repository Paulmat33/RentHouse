function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Landlord Contact</h3>
        <p className="text-gray-700 mb-4">Phone: +234 801 234 5678</p>
        <p className="text-gray-600 text-sm mb-4 italic">* This is dummy contact info for now *</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactModal;
