import { useState } from "react";

function Subscribe() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!");
    setForm({ name: "", email: "" });
  };

  return (
    <section className="py-12">
      <h2 className="text-[36px] text-[#000000] font-inter font-bold mb-12 text-center">
        Don&apos;t Miss Out On New Property Addition
      </h2>
      <div className="w-full max-w-2xl bg-[#D9D9D9] p-[62px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row w-full gap-6">
            <div className="flex flex-col flex-1">
              <label className="font-inter text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border rounded px-4 py-2 w-full bg-white"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-inter text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border rounded px-4 py-2 w-full bg-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#4D0000] text-white font-inter px-4 py-2 rounded font-medium w-[200px] mt-6 block mx-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
