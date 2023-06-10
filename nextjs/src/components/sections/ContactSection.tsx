'use client'
import React from 'react';
import SectionTemplate from './SectionTemplate';

function ContactSection() {
  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    const nameInput = (document.getElementById('nameInput') as HTMLInputElement).value;
    const emailInput = (document.getElementById('emailInput') as HTMLInputElement).value;
    const messageInput = (document.getElementById('messageInput') as HTMLInputElement).value;

    if (nameInput === '' || emailInput === '' || messageInput === '') {
      alert('Por favor, completa todos los campos');
      event.preventDefault(); // Evita el envío del formulario si los campos están vacíos
    }
  };

  return (
    <SectionTemplate title="Contact">
      <p className="mb-3 tracking-wider lg:text-xl lg:p-4">
        Feel free to reach out to me for any inquiries, collaborations, or projects where I can be of assistance!
      </p>
      <form className='text-black' action="https://formspree.io/f/myyvgpoe" method="POST" onSubmit={validateForm}>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <input id="nameInput" className='my-3 p-3 h-12 rounded-md lg:w-full lg:mr-3' type='text' placeholder='NAME' />
          <input id="emailInput" className='my-3 p-3 h-12 rounded-md lg:w-full lg:ml-3' type='email' placeholder='EMAIL' />
        </div>
        <div className='flex flex-col'>
          <textarea id="messageInput" className='my-3 p-3 h-36 rounded-md resize-none' placeholder='MESSAGE'></textarea>
        </div>
        <div className='bg-zinc-300 mt-3 rounded-lg'>
          <input className="p-3 w-full cursor-pointer" type="submit" value="Send" />
        </div>
      </form>
    </SectionTemplate>
  );
}

export default ContactSection;
