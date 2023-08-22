import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-4">
              <h5>Lorem ipsun</h5>
              <ul className="list-unstyled">
                <li>consectetur</li>
                <li>facere</li>
                <li>quibusdam</li>
                <li>laborum</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <p>📞123-456-7890</p>
              <p>📧info@example.com</p>
            </div>
            <div className="col-md-4">
              <h5>Share With Us</h5>
              <div className="social-icons">
                <input
                  className="p-1  rounded-3"
                  placeholder="Write something.. "
                  type="text"
                />
                <button className="bg-primary ms-1 rounded-2 p-1 text-light">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>Copyright &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
