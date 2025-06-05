import female from "../assets/review1.png"
import male from "../assets/review2.png"
import landlord from "../assets/review3.png"

function Reviews() {
  const testimonials = [
    {
      image: female,
      name: "Lisa Wood",
      role: "Landlord",
      message:
        "Renting out my property through your website was seamless! I found qualified tenants in just 3 days, and I avoided costly vacancies. Highly recommend their professional service.",
    },
    {
      image: male,
      name: "John  Kingleys",
      role: "Tenant",
      message:
        "I was tired of dealing with agents, but Rent House connected me directly with the landlord. No hidden fees, and I got a great deal on my dream apartment.",
    },
    {
      image: landlord,
      name: "Smith Okoro",
      role: "Tenant",
      message:
        "From listing to lease signing, everything was lightning-fast. The landlord was responsive, and I moved in within a week. Best rental experience ever.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[36px] font-bold my-24 text-[#000000]">Reviews</h2>

        <div className="flex justify-end px-8">
        <button className="border-0 text-[#000000] text-[24px] font-bold underline cursor-pointer">
          See All
        </button>
      </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#D9D9D9] p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h4 className="text-[24px] font-semibold text-[#000000] text-inter">{t.name}</h4>
             <span className="text-sm text-gray-500 mb-4">{t.role}</span>
              <p className="text-[#000000] mb-4">"{t.message}"</p>
            
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
