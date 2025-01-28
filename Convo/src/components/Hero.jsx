import image from "../assets/images/assignment_image.jpeg";

function Hero() {
   return (
      <>
         <section className="hero container-md">
            <div className="heroContainer d-flex flex-column align-items-start align-items-md-center justify-content-center">
               <h1 className="heroText mt-5">Webinars</h1>
               <p className="subText text-start text-md-center">
                  In our free time, we sometimes hold webinars with professionals centered around healing, friendship
                  and family. <br className="d-none d-lg-block" />
                  Our users come to quality of the friendships in their lives. From learning how to find friends
                  and ...
               </p>
               <img src={image} className="heroImg m-0 mb-3 mt-md-5" alt="" />
            </div>
         </section>
      </>
   );
}

export default Hero;
