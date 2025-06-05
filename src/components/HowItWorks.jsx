function HowItWorks() {
  const steps = [
    {
      title: "Sign Up",
      description: "Create a free account as a tenant or landlord to get started.",
    },
    {
      title: "Search or List Property",
      description: "Tenants can search for properties, landlords can list their rental units.",
    },
    {
      title: "Connect & Rent",
      description: "Pay to unlock contact details and communicate directly.",
    },
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-600 mb-10">
          Whether you're looking to rent or list a home, RentHouse makes it easy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
