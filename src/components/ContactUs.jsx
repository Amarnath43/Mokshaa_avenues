import React,{useRef} from 'react';
import { useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useRef(); 
  // Send email function using EmailJS
  const sendEmail = (data) => {
    setLoading(true);
    console.log(data)
    setErrorMessage("");

    // EmailJS send function
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result);
        toast.success("Form filled Successfully")
        reset(); // Reset the form on success
      }, (error) => {
        console.log(error);
        setErrorMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='w-[500px] text-center p-10 shadow-2xl sm:rounded-lg bg-gray-200 '>
      <h3 className='font-bold text-2xl mb-4 text-shadow-black'>Contact Us</h3>
      <form onSubmit={handleSubmit(sendEmail)} ref={form}>

        {/* Name Input */}
        <div>
          <input 
            type="text"
            name="user_name"
            className="w-full px-3 py-2 border-black border-2 rounded mb-3 placeholder:font-semibold placeholder:text-black"
            placeholder="Name"
            {...register("user_name", { required: "Name is required" })}
          />
          {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name.message}</p>}
        </div>

        {/* Phone Number Input */}
        <div>
          <input 
            type="tel"
            name="user_phonenumber"
            className="w-full px-3 py-2 border-black border-2 rounded mb-3 placeholder:font-semibold placeholder:text-black"
            placeholder="Phone number"
            {...register("user_phonenumber", { required: "Phone number is required",pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits"
              }})}
          />
          {errors.user_phonenumber && <p className="text-red-500 text-sm">{errors.user_phonenumber.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <input 
            type="email"
            name="user_email"
            className="w-full px-3 py-2 border-black border-2 rounded mb-3 placeholder:font-semibold placeholder:text-black"
            placeholder="Email"
            {...register("user_email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Invalid email address" } })}
          />
          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
        </div>

        {/* Message Textarea */}
        <div>
          <textarea 
            name="message"
            className="w-full px-3 py-2 border-black border-2 rounded mb-3 placeholder:font-semibold placeholder:text-black"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            className="bg-green-700 px-4 py-2 rounded-lg"
            disabled={loading}
          >
            <span className="font-bold text-white">
              {loading ? 'Sending...' : 'Submit'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
