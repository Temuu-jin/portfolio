import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              <a
                href="https://www.instagram.com/temudgindk/"
                className="fa fa-instagram"
              >
                Instagram
              </a>
              <br />
              <a href="https://twitter.com/d_temucin" className="fa fa-twitter">
                Twitter
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/temucin-damdinjamts-kintaert/"
                className="fa fa-linkedin"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/Temuu-jin" className="fa fa-github">
                GitHub
              </a>
              <br />
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: temucin.d.k@gmail.com</li>
              <li className="contact-item">Phone: +43 664 381 5945</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
