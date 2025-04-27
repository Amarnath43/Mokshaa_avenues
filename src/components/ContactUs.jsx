import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useRef();

  // Send email function using EmailJS
  const sendEmail = (data) => {
    setLoading(true);
    console.log(data);
    setErrorMessage("");

    // EmailJS send function
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result);
        toast.success("Form filled Successfully");
        reset(); // Reset the form on success
      },
      (error) => {
        console.log(error);
        setErrorMessage('Failed to send message. Please try again.');
      }
    )
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="w-[500px] mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h3 className="font-bold text-3xl mb-6 text-center text-indigo-600">Contact Us</h3>
      
      <form onSubmit={handleSubmit(sendEmail)} ref={form} className="space-y-4">

        {/* Name Input */}
        <div>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter your name"
            {...register("user_name", { required: "Name is required", minLength: { value: 4, message: 'Name must be at least 4 characters' } })}
          />
          {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name.message}</p>}
        </div>

        {/* Phone Number Input */}
        <div>
          <input
            type="tel"
            name="user_phonenumber"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Phone number"
            {...register("user_phonenumber", { 
              required: "Phone number is required",
              pattern: { value: /^[6-9][0-9]{9}$/, message: "Phone number must start with 6, 7, 8, or 9 and be exactly 10 digits" }
            })}
          />
          {errors.user_phonenumber && <p className="text-red-500 text-sm">{errors.user_phonenumber.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Email"
            {...register("user_email", {
              required: "Email is required",
              pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]{3,}\.[A-Za-z]{2,}$/, message: "Invalid email address" }
            })}
          />
          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Message"
            {...register("message")}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            disabled={loading}
          >
            <span className="font-bold">
              {loading ? 'Sending...' : 'Submit'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
