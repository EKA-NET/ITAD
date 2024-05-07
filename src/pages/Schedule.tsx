import "../styles/Schedule.scss";
import {Constants} from "../constants";
import {ScheduleItem, schedulePlan} from "../models/schedulePlan";

export const Schedule = () => {
  const ScheduleElement = ({time, title, description, logoPath}: ScheduleItem) => (
    <div className="schedule-element">
      <div className="timeline-content">
        <h3 className="schedule-time">{time}</h3>
        <h2 className="schedule-topic">{title}</h2>
        <p className="schedule-desc">{description}</p>
      </div>
      {logoPath && <img src={logoPath} alt={title} className="schedule-logo" />}
    </div>
  );

  return (
    <> 
      <title>{Constants.SITE_NAME + " - Harmonogram"}</title>
      <h1 className="featured-header center">Harmonogram wydarzenia</h1>
      <section className="design-section">
        <div className="timeline ">
          {schedulePlan.map((item, index) => (
            <>
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-empty"/>
                  <div className="timeline-middle">
                    <div className="timeline-circle"/>
                  </div>
                  <ScheduleElement {...item} />
                </>
              ) : (
                <>
                  <ScheduleElement {...item} />
                  <div className="timeline-empty"/>
                  <div className="timeline-middle">
                    <div className="timeline-circle"/>
                  </div>
                </>
              )}
            </>
          ))}
          <div className="timeline-empty"/>
          <div className="timeline-middle">
            <div className="timeline-circle"/>
          </div>
        </div>
      </section>
    </>
  );
};
