'use client'
import React, { useState, FormEvent } from 'react';
import SectionTemplate from './SectionTemplate';
import { useForm, ValidationError } from '@formspree/react';

function ContactSection() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [state, handleSubmit, resetForm] = useForm("xlekyqzg");

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elements = event.currentTarget.elements as HTMLFormControlsCollection;
    const nameInput = elements.namedItem("name") as HTMLInputElement;
    const emailInput = elements.namedItem("email") as HTMLInputElement;
    const messageInput = elements.namedItem("message") as HTMLTextAreaElement;

    if (!nameInput || !emailInput || !messageInput) {
      return;
    }

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
      alert('Please fill in all fields.');
      return;
    }

    await handleSubmit(event);
    setIsFormSubmitted(true);
  };

  const handleResetForm = () => {
    resetForm();
    setIsFormSubmitted(false);
  };

  if (state.succeeded && isFormSubmitted) {
    return (
      <SectionTemplate title="Contact">
        <p>Thanks for joining!</p>
      </SectionTemplate>
    );
  }

  return (
    <SectionTemplate title="Contact">
      <p className="mb-3 tracking-wider lg:text-xl lg:p-4">
        Feel free to reach out to me for any inquiries, collaborations, or projects where I can be of assistance!
      </p>
      <form className='text-black' onSubmit={handleFormSubmit}>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <input className='my-3 p-3 h-12 rounded-md lg:w-full lg:mr-3' placeholder='NAME' id="name" type='text' name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input className='my-3 p-3 h-12 rounded-md lg:w-full lg:ml-3' placeholder='EMAIL' id="email" type='email' name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className='flex flex-col'>
          <textarea className='my-3 p-3 h-36 rounded-md resize-none' placeholder='MESSAGE' id="message" name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className='bg-zinc-300 mt-3 rounded-lg'>
          <input className="p-3 w-full cursor-pointer" type="submit" value="Submit" />
        </div>
      </form>
      {isFormSubmitted && (
        <button onClick={handleResetForm}>Reset Form</button>
      )}
    </SectionTemplate>
  );
}

export default ContactSection;
