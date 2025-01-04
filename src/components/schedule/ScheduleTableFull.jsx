export const ScheduleTableFull = (props) => {
  const type = props.type;
  const scheduleJSON = {
    Monday: ["13.00", "17.00", "18.00", "20.00"],
    Tuesday: ["13.00"],
    Wednesday: ["20.00"],
    Thursday: ["13.00", "17.00"],
    Friday: ["13.00"],
    Saturday: ["10.00"],
    Sunday: ["10.00", "13.00", "14.00", "16.00"],
  };
  const days =
    type === "weekdays"
      ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      : type === "weekends"
      ? ["Saturday", "Sunday"]
      : type === "business hours"
      ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      : type === "after-school hours"
      ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      : type === "evenings"
      ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      : type === "late hours"
      ? [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]
      : type === "weekend mornings"
      ? ["Saturday", "Sunday"]
      : type === "power hours"
      ? ["Saturday", "Sunday"]
      : [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];

  const hours =
    type === "weekdays"
      ? [
          "8.00",
          "9.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          "17.00",
          "18.00",
          "19.00",
          "20.00",
          "21.00",
        ]
      : type === "weekends"
      ? [
          "8.00",
          "9.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          "17.00",
          "18.00",
          "19.00",
          "20.00",
          "21.00",
        ]
      : type === "business hours"
      ? [
          "8.00",
          "9.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
        ]
      : type === "after-school hours"
      ? ["17.00", "18.00"]
      : type === "evenings"
      ? ["19.00", "20.00"]
      : type === "late hours"
      ? ["21.00"]
      : type === "weekend mornings"
      ? ["8.00", "9.00", "10.00", "11.00", "12.00"]
      : type === "power hours"
      ? ["13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00"]
      : [
          "8.00",
          "9.00",
          "10.00",
          "11.00",
          "12.00",
          "13.00",
          "14.00",
          "15.00",
          "16.00",
          "17.00",
          "18.00",
          "19.00",
          "20.00",
          "21.00",
        ];

  const priceJSON = {
    Monday: {
      "8.00": "250",
      "9.00": "250",
      "10.00": "250",
      "11.00": "250",
      "12.00": "250",
      "13.00": "250",
      "14.00": "250",
      "15.00": "250",
      "16.00": "250",
      "17.00": "300",
      "18.00": "300",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Tuesday: {
      "8.00": "250",
      "9.00": "250",
      "10.00": "250",
      "11.00": "250",
      "12.00": "250",
      "13.00": "250",
      "14.00": "250",
      "15.00": "250",
      "16.00": "250",
      "17.00": "300",
      "18.00": "300",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Wednesday: {
      "8.00": "250",
      "9.00": "250",
      "10.00": "250",
      "11.00": "250",
      "12.00": "250",
      "13.00": "250",
      "14.00": "250",
      "15.00": "250",
      "16.00": "250",
      "17.00": "300",
      "18.00": "300",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Thursday: {
      "8.00": "250",
      "9.00": "250",
      "10.00": "250",
      "11.00": "250",
      "12.00": "250",
      "13.00": "250",
      "14.00": "250",
      "15.00": "250",
      "16.00": "250",
      "17.00": "300",
      "18.00": "300",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Friday: {
      "8.00": "250",
      "9.00": "250",
      "10.00": "250",
      "11.00": "250",
      "12.00": "250",
      "13.00": "250",
      "14.00": "250",
      "15.00": "250",
      "16.00": "250",
      "17.00": "300",
      "18.00": "300",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Saturday: {
      "8.00": "300",
      "9.00": "300",
      "10.00": "300",
      "11.00": "300",
      "12.00": "300",
      "13.00": "350",
      "14.00": "350",
      "15.00": "350",
      "16.00": "350",
      "17.00": "350",
      "18.00": "350",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
    Sunday: {
      "8.00": "300",
      "9.00": "300",
      "10.00": "300",
      "11.00": "300",
      "12.00": "300",
      "13.00": "350",
      "14.00": "350",
      "15.00": "350",
      "16.00": "350",
      "17.00": "350",
      "18.00": "350",
      "19.00": "350",
      "20.00": "350",
      "21.00": "250",
    },
  };
  return (
    <div className="schedule-table-container">
      <h2 className="special-h2">Hourly Price Based on Time Slot</h2>

      <div
        className={
          "schedule-grid schedule-grid-header schedule-grid-" +
          (days.length + 1)
        }
      >
        <div className="schedule-tile"> </div>
        {days.map((day) => (
          <div className="schedule-tile">
            {window.innerWidth > 678 ? day : day.substring(0, 2) + "."}
          </div>
        ))}
      </div>
      {hours.map((hour) => (
        <div className={"schedule-grid schedule-grid-" + (days.length + 1)}>
          <div className="schedule-tile">{hour}</div>
          {days.map((day) => (
            <div className="">
              {!scheduleJSON[day].includes(hour) ? (
                <div
                  className={
                    "schedule-tile " +
                    "price-schedule-tile-" +
                    priceJSON[day][hour].replaceAll(" ", "-")
                  }
                >
                  {priceJSON[day][hour]}
                </div>
              ) : (
                <div className="schedule-tile schedule-tile-taken">taken</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
