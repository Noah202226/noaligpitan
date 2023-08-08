import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <div class="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Send a message</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
