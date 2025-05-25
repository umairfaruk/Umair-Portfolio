"use client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import CloseX from "@/assets/icons/CloseX.svg";
import StarIcon from "@/assets/icons/star.svg";
import axios from "axios";
export const ContactSection = () => {
  const [contactScreen, setContactScreen] = useState(false);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    contactingFor: "",
  });
  const Request = [
    "Full time",
    "Part time",
    "Contract Base",
    "Project Base",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("testing");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
          contactingFor: "",
          number: "",
        });
        setContactScreen(false);
        
        toast.success("Email sent successfully!");
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 " id="contact">
      <div className="container">
        <div className="bg-gradient-to-r text-gray-900 from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's Create something Amazing togather
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your project Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam blanditiis quidem culpa
                voluptatem nesciunt, labore accusantium ratione iusto amet
                officiis! Quisquam odio impedit nihil at! Vel ad quisquam
                provident delectus.
              </p>
            </div>
            <div>
              <button
                onClick={() => setContactScreen(true)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl mt-8 gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {contactScreen === true && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-600/50 z-50 ">
          <div className="  bg-gray-900 container flex items-center justify-center md:justify-between gap-18 p-8 md:p-16 relative rounded-3xl">
            <div
              onClick={() => setContactScreen(false)}
              className="absolute bg-gray-600 top-5 p-2 rounded-2xl right-5 cursor-pointer"
            >
              <CloseX className="size-8 bg-transparent " />
            </div>
            <div className=" md:w-full h-full hidden md:flex flex-col gap-8">
              <h1 className="mt-4 font-bold text-5xl tracking-wide">
                Let's talk on something{" "}
                <span className="text-emerald-300">great</span> together.
              </h1>
              <div className="flex gap-8">
                <StarIcon className="size-8 text-emerald-300" />
                <span>mrumair775@gmail.com</span>
              </div>
              <div className="flex gap-8">
                <StarIcon className="size-8 text-emerald-300" />
                <span>+966 57 036 2407</span>
              </div>
              <div className="flex gap-8">
                <StarIcon className="size-8 text-emerald-300" />
                <span>Al-Amal, Riyadh Saudi Arabia</span>
              </div>
              <div className="flex gap-8 mt-8 ">
                <StarIcon className="size-8 text-emerald-300" />{" "}
                <StarIcon className="size-8 text-emerald-300" />{" "}
                <StarIcon className="size-8 text-emerald-300" />
              </div>
            </div>
            <div className="w-full h-full font-serif bg-gradient-to-r text-gray-900 from-emerald-600/80 to-sky-500/80 rounded-xl md:mr-10">
              <div className="p-4">
                <div className="flex gap-2 flex-col text-gray-800">
                  <p className="font-serif text-2xl ">Contacting For :</p>
                  <div className="flex gap-4 flex-wrap" id="option">
                    {Request.map((item, idx) => (
                      <div
                        key={item + idx}
                        className={`text-gray-900 font-sans bg-emerald-300/90 px-3 py-1.5 rounded-full select-none cursor-pointer ${
                          form.contactingFor === item && "bg-sky-300"
                        }`}
                        onClick={() =>
                          setForm({ ...form, contactingFor: item })
                        }
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <form
                    className="flex flex-col gap-2 mt-6 text-gray-900 font-sans"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-gray-900 font-sans "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="px-3 py-1 border-b border-gray-900 bg-transparent appearance-none "
                      />
                      <div className="flex flex-col">
                        <label
                          htmlFor="name"
                          className="text-gray-900 font-sans "
                        >
                          Number
                        </label>
                        <input
                          type="tel"
                          id="number"
                          name="number"
                          value={form.number}
                          onChange={handleChange}
                          required
                          pattern="^05\d{8}$"
                          placeholder="05XXXXXXXX"
                          className="px-3 py-1 border-b border-gray-900 bg-transparent appearance-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-900 font-sans"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="test@gmail.com"
                        className="px-3 py-1 border-b border-gray-900 bg-transparent appearance-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="message"
                        className="text-gray-900 font-sans"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Describe your intrest ..."
                        className="px-3 py-2 rounded-lg border border-gray-900 text-sm font-sans bg-transparent focus:outline-none resize-none  "
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-300 text-gray-900 font-serif  py-2 px-6 rounded-lg mt-2 hover:bg-emerald-400 transition disabled:bg-emerald-100"
                      disabled={form.contactingFor === ""}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
