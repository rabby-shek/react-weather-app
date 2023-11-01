import React, { useState, useEffect } from "react";

const CurrentWeather = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const offsetSeconds = data.timezone || 0; // Example offset in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTimeInTimeZone = (time, offsetSeconds) => {
    const offsetMilliseconds = offsetSeconds * 1000; // Convert seconds to milliseconds
    const timeInTimeZone = new Date(time.getTime() + offsetMilliseconds);

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      timeZone: "UTC" // Set the specific timezone here
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeZone: "UTC" // Set the specific timezone here
    });

    const dayFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "UTC" // Set the specific timezone here
    });

    const formattedTime = timeFormatter.format(timeInTimeZone);
    const formattedDate = dateFormatter.format(timeInTimeZone);
    const formattedDay = dayFormatter.format(timeInTimeZone);

    return { time: formattedTime, date: formattedDate, day: formattedDay };
  };

  const timeInTimeZone = getTimeInTimeZone(currentTime, offsetSeconds);

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
                        <p className="text-muted mb-0">{timeInTimeZone.time}</p>
                        <p className="text-muted mb-0">{timeInTimeZone.day}</p>
                        <p className="text-muted mb-0">{timeInTimeZone.date}</p>
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
