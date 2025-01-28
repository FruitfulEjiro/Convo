function Info() {
   return (
      <>
         <section className="container d-lg-flex flex-row">
            <div className="block-1 me-5">
               <h3 className="infoMainText fw-bold">
                  Strengthening <br /> Relationships
               </h3>
            </div>
            <div className="block-2 ms-5">
               <div className="dateTime d-flex flex-row align-items-center mt-3 mt-lg-0">
                  <p className="date p-0 m-0 me-2">Nov 27, 2022</p>
                  <p className="time p-0 m-0 ms-3">5:30 PM</p>
               </div>
               <div className="textBox mt-3">
                  <p className="text p-0 m-0">
                     This three part series will focus on strengthening your relationship with your partner. Topic will
                     include managing stress, respite and taking time off to reconnect, and working together as a team.
                  </p>
                  <button className="infoBtn btn mt-3">Get Ticket</button>
               </div>
            </div>
         </section>
      </>
   );
}

export default Info;
