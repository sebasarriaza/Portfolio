import SectionTemplate from './SectionTemplate';

function ContactSection() {
  return (
    <section>
      <SectionTemplate
        title="Contact"
        description="Contact me here!"
      >
        <form id="form" action="https://formspree.io/f/myyvgpoe" method="POST">
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" name="email"/>
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <input type="text" name="message"/>
            </li>
          </ul>
        </form>
      </SectionTemplate>
    </section>
  );
}

export default ContactSection;
