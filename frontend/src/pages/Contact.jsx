import React from "react";

function Contact() {
  return (
    <div>
      <div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact us
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            Describe your problem below to be solved as soon as possible!
          </p>
        </div>
        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="4"
                  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 flex items-center justify-start">
              <div class="mr-2 relative bottom-0.5">
                <input type='checkbox' className="text-red-500 rounded-sm" />
              </div>
              <label
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Registered User
              </label>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-red-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
