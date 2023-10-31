import React, { useState, useEffect } from "react";

const CurrentWeather = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section>
         <div
          className="row d-flex justify-content-center align-items-center h-100 mt-2"
          style={{ color: "#282828" }}
        >
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div
              className="card mb-4 gradient-custom"
              style={{ borderRadius: 25 }}
            >
              <div className="card-body p-4">
                <div id="demo1" className="carousel slide" data-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators mb-0">
                    <li
                      data-target="#demo1"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#demo1" data-slide-to={1} />
                    <li data-target="#demo1" data-slide-to={2} />
                  </ul>
                  {/* Carousel inner */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between mb-4 pb-2">
                        <div>
                          <h2 className="display-2">
                            <strong>{Math.round(data.main.temp)}°C</strong>
                          </h2>
                          <p className="text-muted mb-0">{data.city}</p>
                        </div>
                        <div>
                          <img
                            src={`icons/${data.weather[0].icon}.png`}
                            width="150px"
                            alt="weather"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mb-4 pb-2">
                        <div>
                          <p className="text-muted mb-0 ">
                            {" "}
                            {data.weather[0].description}
                          </p>
                          <p className="text-muted mb-0 ">
                            Feels Like : {Math.round(data.main.feels_like)}°C
                          </p>
                        </div>
                        <div>
                          <p className="text-muted mb-0 ">
                            {currentTime.toLocaleTimeString()}
                          </p>
                          <p className="text-muted mb-0 ">
                            {currentTime.toLocaleDateString(undefined, {
                              weekday: "long",
                            })}
                          </p>
                          <p className="text-muted mb-0 ">
                            {currentTime.toLocaleDateString()}
                          </p>
                        </div>
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

export default CurrentWeather;
