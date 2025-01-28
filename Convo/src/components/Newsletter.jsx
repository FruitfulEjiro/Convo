function Newsletter() {
   return (
      <>
         <section className="newsletter">
            <div className="newsletterContainer container d-flex flex-column align-items-center justify-content-center">
               <h3 className="subscribe fw-bold">Subscribe to our Newsletter</h3>
               <p className="notification">Be notified of our events before anyone else</p>
               <form className="newsletterForm d-flex flex-row align-items-center justify-content-center">
                  <input type="email" name="" id="" placeholder="Email Address" className="newsletterEmail" />
                  <button type="submit" className="btn newsletterBtn">
                     Submit
                  </button>
               </form>
            </div>
         </section>
      </>
   );
}

export default Newsletter;
