import footerLogo from "../assets/images/company-footer-logo.png";
function Footer() {
   return (
      <>
         <section className="footer p-3">
            <div className="footerContainer container p-3">
               <div className="footerLogoContainer d-flex flex-row align-items-center justify-content-center justify-content-md-start mb-3">
                  <img src={footerLogo} className="footerLogo me-2" alt="" />
                  <h3 className="logoName fw-bolder m-0">Convo</h3>
               </div>
               <div className="footerNav d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-start justify-content-md-between">
                  <ul className="nav1 d-flex flex-column align-items-center align-items-md-start justify-content-start my-2 p-0">
                     <h5 className="company fw-bold mb-2">Company</h5>
                     <li className="about">About Us</li>
                     <li className="careers">Careers</li>
                     <li className="partner">Partner with Us</li>
                  </ul>
                  <ul className="nav2 d-flex flex-column align-items-center align-items-md-start justify-content-start my-2 p-0">
                     <h5 className="learn fw-bold mb-2">Learn</h5>
                     <li className="works">How it works</li>
                     <li className="webinar">Webinars</li>
                     <li className="blog">blog</li>
                  </ul>
                  <ul className="nav3 d-flex flex-column align-items-center align-items-md-start justify-content-start my-2 p-0">
                     <h5 className="legal fw-bold mb-2">Legal</h5>
                     <li className="privacy">Privary Policy</li>
                     <li className="t&c">Terms & Conditions</li>
                     <li className="security">Security</li>
                     <li className="cookie">Cookie Settings</li>
                  </ul>
                  <ul className="nav4 d-flex flex-column align-items-center align-items-md-start justify-content-start my-2 p-0">
                     <h5 className="help fw-bold mb-2">Help</h5>
                     <li className="faq">FAQ's</li>
                     <li className="support">Customer Support</li>
                     <li className="helpCenter">Help Center</li>
                  </ul>
                  <ul className="nav5 d-flex flex-column align-items-center align-items-md-start justify-content-start my-2 p-0">
                     <h5 className="socials fw-bold mb-2">Socials</h5>
                     <li className="twitter">Twitter</li>
                     <li className="facebook">Facebook</li>
                     <li className="linkedin">LinkedIn</li>
                  </ul>
               </div>
            </div>
         </section>
      </>
   );
}

export default Footer;
