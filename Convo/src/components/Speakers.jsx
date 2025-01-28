import { GoArrowDownRight } from "react-icons/go";
import speaker1 from "../assets/images/speaker-1.png";
import speaker2 from "../assets/images/speaker-2.png";

function Speakers() {
   return (
      <>
         <section className="speakers container pt-5">
            <p className="speakerText fw-bold">Speakers</p>
            <p className="allSpeakers text-end m-0 mt-2">
               View All Speakers
               <GoArrowDownRight className="mb-1" />
            </p>
            <div className="speakerContainer pt-3">
               <p className="speakerInfo">
                  Therapist shares knowledge on building Friendship and Relationship with Family
               </p>
               <div className="speakerImgContainer">
                  <div className="speaker-1">
                     <img src={speaker1} class="speakerImg" alt="" />
                     <div className="speakerBio w-100 p-2 mb-2">
                        <p className="name fw-bold m-0">Amake Igwe</p>
                        <div className="titleState d-flex flex-row justify-content-between py-1">
                           <p className="title m-0">Student Ambassador</p>
                           <p className="state m-0">LA, NG</p>
                        </div>
                     </div>
                  </div>
                  <div className="speaker-2">
                     <img src={speaker2} class="speakerImg" alt="" />
                     <div className="speakerBio w-100 p-2 mb-2">
                        <p className="name fw-bold m-0">Debra Rowland</p>
                        <div className="titleState d-flex flex-row justify-content-between py-1">
                           <p className="title m-0">Family Therapist</p>
                           <p className="state m-0">NJ, USA</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Speakers;
