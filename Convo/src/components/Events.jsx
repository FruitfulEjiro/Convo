import { GoArrowDownRight } from "react-icons/go";
import event1 from "../assets/images/event-1.png";
import event2 from "../assets/images/event-2.png";
import event3 from "../assets/images/event-3.png";

function Events() {
   return (
      <>
         <section className="events container py-5">
            <p className="eventText fw-bold">Events</p>
            <p className="allEvents text-end m-0 mt-2">
               View All Events
               <GoArrowDownRight className="mb-1" />
            </p>
            <div className="eventContainer pt-3">
               <div className="eventImgContainer">
                  <div className="event-1">
                     <img src={event1} class="eventImg" alt="" />
                     <div className="eventBio w-100 p-2 mb-2">
                        <p className="eventTitle fw-bold m-0">Re-Connecting Family</p>
                        <div className="titleHost d-flex flex-row justify-content-between py-1">
                           <p className="eventHost m-0">Family Therapist</p>
                           <p className="eventState m-0">NJ, USA</p>
                        </div>
                     </div>
                  </div>
                  <div className="event-2">
                     <img src={event2} class="eventImg" alt="" />
                     <div className="eventBio w-100 p-2 mb-2">
                        <p className="eventTitle fw-bold m-0">Friendship and Belonging</p>
                        <div className="titleHost d-flex flex-row justify-content-between py-1">
                           <p className="eventHost m-0">Family Therapist</p>
                           <p className="eventState m-0">MUN, GER</p>
                        </div>
                     </div>
                  </div>
                  <div className="event-3">
                     <img src={event3} class="eventImg" alt="" />
                     <div className="eventBio w-100 p-2 mb-2">
                        <p className="eventTitle fw-bold m-0">The Friendship Reset</p>
                        <div className="titleHost d-flex flex-row justify-content-between py-1">
                           <p className="eventHost m-0">Family Therapist</p>
                           <p className="eventState m-0">ABJ, NG</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Events;
