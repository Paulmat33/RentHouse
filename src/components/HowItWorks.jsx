import { HomeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Handshake } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: <HomeIcon className="w-12 h-12 text-[#000000] bg-white rounded-full p-3 mx-auto" />,
      title: "Find Your Perfect Home",
      desc: "Browse verified lisiting directly with landlord in your prefee location. No Agent, No hidden fees.",
      bg: "bg-[#FFEBF2]",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-12 h-12 text-[#000000] bg-white rounded-full p-3 mx-auto" />,
      title: "Connect Direct",
      desc: "Message and negotiate directly with home and owners, clear and transparent dialogue.",
      bg: "bg-[#DBC7C7]",
    },
    {
      icon: <Handshake className="w-12 h-12 text-[#000000] bg-white rounded-full p-3 mx-auto" />,
      title: "Secure Agreement",
      desc: "Schedule viewings and finalize agreements.",
      bg: "bg-[#FFEBF2]", 
    }
  ];

  return (
    <section className="py-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000000] font-poppins">
        How it Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4  mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`${step.bg} p-8 flex-1 flex flex-col items-center text-center max-w-[400px] h-[250px]`}
          >
            {step.icon}
            <h3 className="mt-3 mb-2 text-xl font-semibold text-[#000000] font-poppins">{step.title}</h3>
            <p className="text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;