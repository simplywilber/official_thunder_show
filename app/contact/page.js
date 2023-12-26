export default function Contact() {
  return (
    <main className="flex flex-col m-16 items-center gap-10">
      <div className="flex">
        <h1
          className="text-4xl"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          Contact Us
        </h1>
      </div>
      <form
        method="POST"
        action="https://formsubmit.co/thundershowofficially@gmail.com"
        className="flex flex-col gap-10 max-w-[600px] w-full border border-gray-300 rounded-xl p-10"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="w-full bg-transparent p-4 outline-none border border-solid border-gray-400 rounded-md focus:border-yellow-500 hover:border-yellow-600"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full bg-transparent p-4 outline-none border border-solid border-gray-400 rounded-md focus:border-yellow-500 hover:border-yellow-600"
        />
        <input
          id="phoneNumber"
          name="tel"
          type="tel"
          placeholder="Phone number"
          maxLength={12}
          className="w-full bg-transparent p-4 outline-none border border-solid border-gray-400 rounded-md focus:border-yellow-500 hover:border-yellow-600"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full h-[160px] bg-transparent p-4 outline-none border border-solid border-gray-400 rounded-md focus:border-yellow-500 hover:border-yellow-600"
        ></textarea>
        <button
          type="submit"
          className="ml-auto py-4 px-8 border border-solid border-gray-400 rounded-md hover:bg-yellow-400 transition hover:scale-110"
        >
          Send
        </button>
      </form>
    </main>
  );
}
