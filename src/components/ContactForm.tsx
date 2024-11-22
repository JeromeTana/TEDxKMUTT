import cover from "@/assets/images/backgrounds/KMUTT_LX_Building.png";
import Button from "./Button.astro";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(formData);
        setStatus("Sending...");

        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again later.");
        }
    };
    return (
        <div className="p-2">
            <div className="relative px-4 py-12 lg:p-12 rounded-2xl md:rounded-3xl overflow-clip">
                <img
                    src={cover.src}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-full"></div>
                <div className="relative max-w-screen-xl m-auto justify-around mx-auto space-y-4 md:space-y-0 md:flex md:flex-row flex flex-col">
                    <div className="text-white w-full">
                        <h1 className="text-red-600 font-bold">Contact</h1>
                        <h1 className="mt-3 md:mt-6 text-3xl md:text-4xl font-semibold">
                            Connect with us
                        </h1>

                        <p className="text-sm font-thin md:text-lg mt-4 w-full md:w-3/4">
                            Reach out to learn about upcoming events, speaking
                            opportunities, or how to get involved in spreading
                            innovative ideas at KMUTT
                        </p>
                    </div>

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-sm mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="w-full p-2 text-black rounded"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Contact name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="w-full p-3 text-black rounded"
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="w-full p-3 text-black rounded"
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Type your message..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-red-600"
                                    required
                                />
                                <span className="ml-2">
                                    I accept the
                                    <a
                                        href="#"
                                        className="underline hover:text-red-500"
                                    >
                                        <span> Terms</span>
                                    </a>
                                </span>
                            </label>
                        </div>
                        <button className="mb-4 mt-8" type="submit">
                            Submit
                        </button>
                        <p>{status}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
