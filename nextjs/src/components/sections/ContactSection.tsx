import SectionTemplate from './SectionTemplate';

function ContactSection() {
  return (
    <SectionTemplate title="Contact">
        <p className="mb-3 tracking-wider lg:text-xl lg:p-4">Feel free to reach out to me for any inquiries, collaborations, or projects where I can be of assistance!</p>
        <form className='text-black' action="https://formspree.io/f/myyvgpoe" method="POST">
            <div className='flex flex-col lg:flex-row lg:justify-between'>
              <input className='my-3 p-3 h-12 rounded-md lg:w-full lg:mr-3' type='text' placeholder='NAME'/>
              <input className='my-3 p-3 h-12 rounded-md lg:w-full lg:ml-3' type='email' placeholder='EMAIL'/>
            </div>
            <div className='flex flex-col'>
            <textarea
              className='my-3 p-3 h-36 rounded-md resize-none'
              placeholder='MESSAGE'
            />
            </div>
            <div className='bg-zinc-300 mt-3 rounded-lg'>
              <input className="p-3 w-full cursor-pointer" type="submit" value="Send"/>
            </div>
        </form>
    </SectionTemplate>
  );
}

export default ContactSection;
