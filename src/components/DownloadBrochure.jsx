import React, { useState } from 'react';
import { Button, Input, Modal, Form, Spin } from 'antd';
import emailjs from '@emailjs/browser'; // Import EmailJS
import toast from 'react-hot-toast'


const DownloadBrochure = () => {
  const [isEditing, setIsEditing] = useState(false); // Modal visibility state
  const [loading, setLoading] = useState(false); // Loading state to show spinner
  const [form] = Form.useForm(); // Ant Design form instance

  // Open the modal
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsEditing(false);
  };

  // Handle form submission
  const handleSubmit = (values) => {
    setLoading(true); // Show loading spinner

    // Send the form data to EmailJS
    emailjs
      .send(import.meta.env.VITE_EMAILJS_BROCHURE_SERVICE_ID, import.meta.env.VITE_EMAILJS_BROCHURE_TEMPLATE_ID, values, import.meta.env.VITE_EMAILJS_BROCHURE_PUBLIC_KEY) // Replace with your actual EmailJS IDs
      .then(
        (result) => {
          console.log(result.text);
          // Trigger the download after successful form submission
          triggerDownload();
          form.resetFields(); // Reset the form fields after successful submission
          setLoading(false);
          toast.success("Brochure downloaded Successfully")
          closeModal(); // Close the modal after successful submission
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          closeModal(); // Close the modal on failure
        }
      );
  };

  // Function to trigger brochure download
  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // Specify the path to your brochure file (assumed to be in public folder)
    link.download = 'brochure.pdf'; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link element
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        
        onClick={handleEditProfile}
      >
        Download Brochure
      </button>

      {/* Modal for downloading brochure */}
      <Modal
        title={<h2 className="text-2xl font-bold text-center mb-5">Download Brochure</h2>}
        open={isEditing}
        onCancel={closeModal}
        footer={null}
        className="rounded-lg shadow-lg"
      >
        {/* Ant Design Form */}
        <Form
          form={form} // Link the form with Ant Design's form instance
          onFinish={handleSubmit} // Form submission handler
          layout="vertical"
          name="download-brochure"
        >
          {/* Name Field */}
          <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }, { 
      min: 4, 
      message: 'Name must be at least 4 characters' 
    }]}>
            <Input
              placeholder="Enter your name"
              className="placeholder:text-gray-500" // Styling placeholder text color
            />
          </Form.Item>

          {/* Phone Number Field */}
          <Form.Item
            name="phonenumber"
            rules={[{ required: true, pattern: { value: /^[6-9][0-9]{9}$/, message: "Phone number must start with 6, 7, 8, or 9 and be exactly 10 digits" }
            }]}
          >
            <Input
              placeholder="Enter your Mobile Number"
              className="placeholder:text-gray-500" // Styling placeholder text color
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
          >
            <Input
              placeholder="Enter your Email"
              className="placeholder:text-gray-500" // Styling placeholder text color
            />
          </Form.Item>

          {/* Opinion Field */}
          <Form.Item name="Opinion" rules={[{ required: true, message: 'Please select an option' }]}>
            <select className="border border-black rounded px-1 py-0.5">
            <option value="">Select an option</option> 
              <option value="Interested to Buy">Interested to Buy</option>
              <option value="Not Interested">Not Interested</option>
            </select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500 rounded-lg hover:bg-green-600"
            >
              {loading ? <Spin /> : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DownloadBrochure;
