import React from "react";
// import { Link } from "react-router-dom";
import "./ScheduleInfo.css";

const scheduleList = [
  {time:'3:00-3:15pm',event:"Guests Arrival"},
  {time:'3:30-4:00pm',event:"Ceremony"},
  {time:'4:00-5:00pm',event:"Cocktail Hour on the Patio with passed hors d’eourves"},
  {time:'5:20pm',event:"Mr. & Mrs. Holmes First Dance followed by served dinner"},
  {time:'5:20-8:50pm',event:"Dinner, dancing and dessert"},
  {time:'8:50-9pm',event:"Send Off"}
]

function DetailsPInfo() {
  return (
    <div>
      <div className="container divCenter">
        <p id ="dateFo">November 7th 2021</p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-12 ">
                <p className="sectiontitle">Schedule:</p>
                <div className="row align-self-center">
                  <div className="scheduleList">
                      <div className="row align-self-center titleName">
                        <div className="col-4">
                          <p>Time</p>
                        </div>
                        <div className="col-8 ">
                          <p>Event</p>
                        </div>
                      </div>
                        {scheduleList.map(sl=>(
                          <div className="row align-self-center">
                            <div className="time col-4 "><p>{sl.time}</p></div>
                            <div className="event col-8"><p>{sl.event}</p></div>
                          </div>
                        ))}
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsPInfo;