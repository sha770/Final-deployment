//import {Row, Col } from 'react-bootstrap';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="rw">
        <div className="cl">
          <h2 className="footer-about">Veggie Mart</h2>
          <p className="footer-para">
            A website to get the latest vegetable prices, predict future prices,
            and many more.
          </p>
        </div>
        <div className="cl d-flex flex-column">
          <h2 className="footer-about ">
            Contact Us{" "}
            <div>
              <span></span>
            </div>
          </h2>
          <div className="d-block">
            <p className="email-id">contact@vegetablewebsite.com</p>
            <p>(+91)7454005876</p>
            <p>(+91)87692 92609</p>
          </div>
        </div>
        <div className="cl d-flex flex-column">
          <div className="d-block text-left">
            <div className="language-dropdown">
              <label htmlFor="language-select">Language:</label>
              <select id="language-select">
                <option value="en">English</option>
                <option value="hn">Hindi</option>
              </select>
            </div>
          </div>
          <br />
          <div className="d-block text-left">
            <a href="#top" className="back-to-top-btn">
              Back to Top
            </a>
          </div>
        </div>
        <div className="cl">
          <div className="d-block">
            <h3>
              News & Updates
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <br />
          </div>
          <div className="d-block">
            <form className="form2">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit" className="button2">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="d-block">
            <div className="social-icons">
              
            </div>
          </div>
        </div>
      </div>
        <hr></hr>
          <div className='text-center py-3'>
            <p>Veggie Mart&copy; {currentYear}</p>
        </div>
    
    </footer>
  );
};
export default Footer;
