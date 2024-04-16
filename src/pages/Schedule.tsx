import "../styles/Schedule.scss";
import {Constants} from "../constants";
import {ScheduleItem, schedulePlan} from "../models/schedulePlan";

export const Schedule = () => {
  const ScheduleElement = ({time, title, description}: ScheduleItem) => (
    <div className="timeline-component timeline-content">
      <h3>
        {time} {title}
      </h3>
      <p>{description}</p>
    </div>
  );

  return (
    <>
      <title>{Constants.SITE_NAME + " - Harmonogram"}</title>
      <h1 className="featured-header center">Harmonogram ITAD 2024</h1>
      <section className="design-section">
        <div className="timeline ">
          {schedulePlan.map((item, index) => (
            <>
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-empty"></div>
                  <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                  </div>
                  <ScheduleElement {...item} />
                </>
              ) : (
                <>
                  <ScheduleElement {...item} />
                  <div className="timeline-empty"></div>
                  <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                  </div>
                </>
              )}
            </>
          ))}
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
        </div>
      </section>
    </>
  );
};
