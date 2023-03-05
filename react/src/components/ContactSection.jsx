import SectionTemplate from './SectionTemplate';
import Input from './Input';

function ContactSection() {
  return (
    <section>
      <SectionTemplate
        title="Contact"
        description="Contact me here!"
      >
        <form id="form" action="https://formspree.io/f/myyvgpoe" method="POST">
          <ul>
            <Input type={'Name'}></Input>
            <Input type={'Email'}></Input>
            <Input type={'Message'}></Input>
          </ul>
        </form>
      </SectionTemplate>
    </section>
  );
}

export default ContactSection;
