import React from "react";

const Forcast = ({ data }) => {
  const WEEK_DAYS = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  
  return (
    <section>
        <div
          className="row d-flex justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}
        >
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="card" style={{ borderRadius: 25 }}>
              <div className="card-body p-4">
                <div id="demo3" className="carousel slide" data-ride="carousel">
                 
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                        {data.list.splice(0, 5).map((item, idx) => (
                          <div className="flex-column">
                            <p className="small">
                              <strong>{Math.round(item.main.temp)}°C</strong>
                            </p>
                            <img
                            style={{width:"40px"}}
                              src={`icons/${item.weather[0].icon}.png`}
                              
                              alt="weather"
                            />
                            <p className="mb-0">
                              <strong>{forecastDays[idx]}</strong>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Forcast;
