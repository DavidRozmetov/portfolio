import "./Quote.css";
import { SetStateAction, useEffect, useState } from "react";
import {
  Bs1Circle,
  Bs2Circle,
  Bs3Circle,
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
} from "react-icons/bs";
import { FaLine } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

interface options {
  label: string;
  text: string;
  value: number;
}

const pricingJSON = {
  typeOfClass: {
    private: 1,
    double: 0.7,
    group: 0.5,
    shared: 1,
  },
  ageGroup: {
    young_learner: 0.975,
    teenager: 1,
    adult: 1.025,
  },
  skillLevel: {
    beginner: 1.05,
    intermediate: 1,
    advanced: 1,
  },
  typeOfLesson: {
    business_english: 1,
    daily_life: 1,
    for_schoolwork: 1.05,
    refreshment_english: 1,
    preparation: 1.2,
  },
  scheduleType: {
    fixed: 1,
    flexible: 1.1,
  },
  timeOfTheDay: {
    morning: 1,
    afternoon: 1.125,
    after_work_hours: 1.15,
  },
  daysPerWeek: [1.05, 1.025, 1, 0.95, 0.9, 0.85, 0.75],
  hoursEachClass: {
    "30_minutes": 0.525,
    "1_hour": 1,
    "90_minutes": 1.35,
    "2_hours": 1.7,
  },
  paymentOptions: {
    every_class: 1.2,
    every_10_hours: 1,
    every_20_hours: 0.9,
    every_50_hours: 0.8,
    every_month: 0.8,
  },
  postponeOptions: {
    none: 0.9,
    "1-2": 1,
    "3-4": 1.1,
    unlimited: 1.2,
  },
};

interface FormSelector {
  name: string;
  label: string;
  data: string;
  options: options[];
  handleUpdateForm: (field: string, value: string) => void;
}
interface FormCheckbox {
  name: string;
  label: string;
  data: string[];
  options: options[];
  setDaysOfTheWeek: (value: string[]) => void;
}

interface StepTracker {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
}

const FromSelector = (props: FormSelector) => {
  const data = props.data;
  return (
    <div className="div-form">
      <div className="form">
        <label htmlFor="">
          <strong>{props.label}</strong>
        </label>

        <div className="form-options form-grid-4">
          {props.options.map((opt) => (
            <div
              className={`form-option ${opt.label} ${
                opt.label.toLowerCase() === data && "option-selected"
              }`}
              key={opt.text}
              onClick={() => {
                props.handleUpdateForm(
                  props.name,
                  opt.label.toLocaleLowerCase()
                );
              }}
            >
              <label htmlFor="">
                {opt.label.toLowerCase() === data ? (
                  <>
                    {" "}
                    <strong>{opt.label}</strong> <p>{opt.text}</p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="option-p-main">{opt.label}</p>{" "}
                    <p>{opt.text}</p>
                  </>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FormCheckbox = (props: FormCheckbox) => {
  const data = props.data;
  return (
    <div className="div-form">
      <div className={`form ${data}`}>
        <label htmlFor="">
          <strong>{props.label}</strong>
          <p>{props.data.length} days a week</p>
        </label>

        <div className="form-options form-grid-4">
          {props.options.map((opt) => (
            <div
              className={`form-option ${opt.label} ${
                data.includes(opt.label.toLowerCase()) && "option-selected"
              }`}
              key={opt.text}
              onClick={() => {
                const daysOfTheWeek = [...props.data];

                if (daysOfTheWeek.includes(opt.label.toLocaleLowerCase())) {
                  props.setDaysOfTheWeek(
                    daysOfTheWeek.filter(
                      (a) => a !== opt.label.toLocaleLowerCase()
                    )
                  );
                } else {
                  daysOfTheWeek.push(opt.label.toLowerCase());

                  props.setDaysOfTheWeek(daysOfTheWeek);
                }
              }}
            >
              <input
                type="checkbox"
                name={props.name}
                checked={props.data.includes(opt.label.toLocaleLowerCase())}
              />
              <label htmlFor="">
                <strong>{opt.label}</strong> <p>{opt.text}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StepTracker = (props: StepTracker) => {
  const setStep = props.setStep;
  const step = props.step;

  return (
    <div className="step-tracker-container">
      {step > 1 ? (
        <button
          className="btn wordle-button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </button>
      ) : (
        <div></div>
      )}
      <div className="step-tracker-inner">
        <div
          className="div-step"
          onClick={() => {
            setStep(1);
          }}
        >
          {step === 1 ? <Bs1CircleFill /> : <Bs1Circle />}
        </div>
        <div
          className="div-step"
          onClick={() => {
            setStep(2);
          }}
        >
          {step === 2 ? <Bs2CircleFill /> : <Bs2Circle />}
        </div>
        <div
          className="div-step"
          onClick={() => {
            setStep(3);
          }}
        >
          {step === 3 ? <Bs3CircleFill /> : <Bs3Circle />}
        </div>
      </div>
      {step < 3 && (
        <button
          className="btn wordle-button"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(0);
  const base = 300;
  const [typeOfClass, settypeOfClass] = useState("private");
  const [numberOfStudents, setNumberOfStudents] = useState("1");
  const [ageGroup, setageGroup] = useState("adult");
  const [skillLevel, setskillLevel] = useState("intermediate");
  const [typeOfLesson, settypeOfLesson] = useState("business english");
  const [scheduleType, setscheduleType] = useState("fixed");
  const [hoursEachClass, setHoursEachClass] = useState("90 minutes");
  const [timeOfTheDay, settimeOfTheDay] = useState("after work hours");
  const [paymentOptions, setpaymentOptions] = useState("every month");
  const [postponeOptions, setpostponeOptions] = useState("1-2");

  const [daysOfTheWeek, setDaysOfTheWeek] = useState<string[]>([
    "monday",
    "tuesday",
    "wednesday",
  ]);
  const handleUpdateForm = (field: string, value: string) => {
    if (field === "typeOfClass") {
      settypeOfClass(value);
    }
    if (field === "numberOfStudents") {
      setNumberOfStudents(value);
    }
    if (field === "ageGroup") {
      setageGroup(value);
    }
    if (field === "skillLevel") {
      setskillLevel(value);
    }
    if (field === "typeOfLesson") {
      settypeOfLesson(value);
    }
    if (field === "scheduleType") {
      setscheduleType(value);
    }
    if (field === "HoursEachClass") {
      setHoursEachClass(value);
    }
    if (field === "timeOfTheDay") {
      settimeOfTheDay(value);
    }
    if (field === "paymentOptions") {
      setpaymentOptions(value);
    }
    if (field === "postponeOptions") {
      setpostponeOptions(value);
    }
  };

  useEffect(() => {
    const newPrice =
      base *
      pricingJSON.typeOfClass[
        typeOfClass.replaceAll(" ", "_") as keyof typeof pricingJSON.typeOfClass
      ] *
      pricingJSON.ageGroup[
        ageGroup.replaceAll(" ", "_") as keyof typeof pricingJSON.ageGroup
      ] *
      pricingJSON.skillLevel[
        skillLevel.replaceAll(" ", "_") as keyof typeof pricingJSON.skillLevel
      ] *
      pricingJSON.typeOfLesson[
        typeOfLesson.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.typeOfLesson
      ] *
      pricingJSON.scheduleType[
        scheduleType.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.scheduleType
      ] *
      pricingJSON.hoursEachClass[
        hoursEachClass.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.hoursEachClass
      ] *
      pricingJSON.timeOfTheDay[
        timeOfTheDay.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.timeOfTheDay
      ] *
      pricingJSON.paymentOptions[
        paymentOptions.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.paymentOptions
      ] *
      pricingJSON.postponeOptions[
        postponeOptions.replaceAll(
          " ",
          "_"
        ) as keyof typeof pricingJSON.postponeOptions
      ] *
      (scheduleType === "flexible"
        ? 1
        : daysOfTheWeek.length > 0
        ? pricingJSON.daysPerWeek[daysOfTheWeek.length - 1]
        : 0);

    setPrice(Math.ceil(newPrice / 5) * 5);
  }, [
    typeOfClass,
    ageGroup,
    skillLevel,
    typeOfLesson,
    scheduleType,
    hoursEachClass,
    timeOfTheDay,
    paymentOptions,
    postponeOptions,
    daysOfTheWeek,
  ]);

  useEffect(() => {
    if (paymentOptions === "every class") {
      setpostponeOptions("unlimited");
    } else if (paymentOptions === "every month") {
      setpostponeOptions("none");
    }
  }, [paymentOptions]);
  return (
    <>
      <div className="get-quote-container">
        <ToastContainer />
        <div className="get-quote-header">
          <h3 className="get-quote-header-title">Get a Quote</h3>

          <div className="div-quote">
            {["every 10 hours", "every 20 hours", "every 50 hours"].includes(
              paymentOptions
            ) && (
              <h3>
                {price * Math.floor(parseInt(paymentOptions.split(" ")[1]))}{" "}
                {paymentOptions}
              </h3>
            )}

            {paymentOptions === "every month" && (
              <h3>
                {price *
                  8 *
                  Math.floor(
                    pricingJSON.hoursEachClass[
                      hoursEachClass.replaceAll(
                        " ",
                        "_"
                      ) as keyof typeof pricingJSON.hoursEachClass
                    ]
                  )}
                /month
              </h3>
            )}
            {typeOfClass === "group" ? (
              <p>
                {parseInt(numberOfStudents) * price} baht/ {hoursEachClass} (
                {price} baht/per person)
              </p>
            ) : typeOfClass === "double" ? (
              <p>
                {2 * price} baht/ {hoursEachClass} ({price} baht/per person)
              </p>
            ) : (
              <p>
                {price} baht / {hoursEachClass}
              </p>
            )}
          </div>

          <div className="div-contact">
            <h3>Get a free trial class!</h3>
            <a href="https://line.me/ti/p/Jq_GQiOr3e">
              <FaLine />
              <p>Message me on Line</p>
            </a>
          </div>
        </div>
        <StepTracker step={step} setStep={setStep} />

        {step === 1 && (
          <>
            <FromSelector
              data={typeOfClass}
              handleUpdateForm={handleUpdateForm}
              label="Type of class"
              name="typeOfClass"
              options={[
                {
                  label: "Private",
                  value: 1,
                  text: "One-on-one class",
                },
                {
                  label: "Double",
                  value: 1,
                  text: "Share with a friend",
                },
                {
                  label: "Group",
                  value: 1,
                  text: "3-5 students studying together",
                },
                {
                  label: "Shared",
                  value: 1,
                  text: "Private classes, shared cost with friends",
                },
              ]}
            />

            {typeOfClass === "group" && (
              <FromSelector
                data={numberOfStudents}
                label="Number of Students"
                name="numberOfStudents"
                handleUpdateForm={handleUpdateForm}
                options={[
                  {
                    label: "3",
                    value: 1,
                    text: "3 students",
                  },
                  {
                    label: "4",
                    value: 1,
                    text: "4 students",
                  },
                  {
                    label: "5",
                    value: 1,
                    text: "5 students",
                  },
                  {
                    label: "6",
                    value: 1,
                    text: "6 students",
                  },
                ]}
              />
            )}

            <FromSelector
              data={ageGroup}
              handleUpdateForm={handleUpdateForm}
              label="Age Group"
              name="ageGroup"
              options={[
                {
                  label: "Young Learner",
                  value: 1,
                  text: "7-11 yrs",
                },
                {
                  label: "Teenager",
                  value: 1,
                  text: "11+ yrs",
                },
                {
                  label: "Adult",
                  value: 1,
                  text: "20+ yrs",
                },
              ]}
            />

            <FromSelector
              data={skillLevel}
              handleUpdateForm={handleUpdateForm}
              name="skillLevel"
              label="Skill Level"
              options={[
                {
                  label: "Beginner",
                  value: 1,
                  text: "Just starting English",
                },
                {
                  label: "Intermediate",
                  value: 1,
                  text: "Can talk a little",
                },
                {
                  label: "Advanced",
                  value: 1,
                  text: "Want to stay fluent",
                },
              ]}
            />

            <FromSelector
              data={typeOfLesson}
              handleUpdateForm={handleUpdateForm}
              name="typeOfLesson"
              label="Type of Lesson"
              options={[
                {
                  label: "Business English",
                  value: 1,
                  text: "For work communication",
                },
                {
                  label: "Daily Life",
                  value: 1,
                  text: "For everyday talk",
                },
                {
                  label: "For Schoolwork",
                  value: 1,
                  text: "Help with homework",
                },
                {
                  label: "Refreshment English",
                  value: 1,
                  text: "Practice talking",
                },
                {
                  label: "Preparation",
                  value: 1,
                  text: "For job or exams",
                },
              ]}
            />
          </>
        )}
        {step === 2 && (
          <>
            <FromSelector
              data={scheduleType}
              handleUpdateForm={handleUpdateForm}
              name="scheduleType"
              label="Schedule Type"
              options={[
                {
                  label: "Fixed",
                  value: 1,
                  text: "Same time weekly",
                },
                {
                  label: "Flexible",
                  value: 1,
                  text: "Pick time per class",
                },
              ]}
            />

            {scheduleType === "fixed" && (
              <FormCheckbox
                data={daysOfTheWeek}
                setDaysOfTheWeek={setDaysOfTheWeek}
                name="daysOfTheWeek"
                label="Days of the Week"
                options={[
                  {
                    label: "Monday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Tuesday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Wednesday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Thursday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Friday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Saturday",
                    value: 1,
                    text: "",
                  },
                  {
                    label: "Sunday",
                    value: 1,
                    text: "",
                  },
                ]}
              />
            )}

            <FromSelector
              data={hoursEachClass}
              handleUpdateForm={handleUpdateForm}
              name="HoursEachClass"
              label="Hours Each Class"
              options={[
                {
                  label: "30 minutes",
                  value: 1,
                  text: "",
                },
                {
                  label: "1 hour",
                  value: 1,
                  text: "",
                },
                {
                  label: "90 minutes",
                  value: 1,
                  text: "",
                },
                {
                  label: "2 hours",
                  value: 1,
                  text: "",
                },
              ]}
            />

            <FromSelector
              data={timeOfTheDay}
              handleUpdateForm={handleUpdateForm}
              name="timeOfTheDay"
              label="Time of the Day"
              options={[
                {
                  label: "Morning",
                  value: 1,
                  text: "8:00-11:00",
                },
                {
                  label: "Afternoon",
                  value: 1,
                  text: "12:00-16:00",
                },
                {
                  label: "After Work Hours",
                  value: 1,
                  text: "17:00-22:00",
                },
              ]}
            />
          </>
        )}
        {step === 3 && (
          <>
            <FromSelector
              data={paymentOptions}
              handleUpdateForm={handleUpdateForm}
              name="paymentOptions"
              label="Payment Options"
              options={[
                {
                  label: "Every class",
                  value: 1,
                  text: "Pay after each class",
                },
                {
                  label: "Every 10 hours",
                  value: 1,
                  text: "Prepay 10 hours",
                },
                {
                  label: "Every 20 hours",
                  value: 1,
                  text: "Prepay 20 hours",
                },
                {
                  label: "Every 50 hours",
                  value: 1,
                  text: "Cheaper option",
                },
                {
                  label: "Every month",
                  value: 1,
                  text: "Pay monthly",
                },
              ]}
            />
            {!["every class", "every month"].includes(paymentOptions) && (
              <FromSelector
                data={postponeOptions}
                handleUpdateForm={handleUpdateForm}
                name="postponeOptions"
                label="Postpone Options"
                options={[
                  {
                    label: "1-2",
                    value: 1,
                    text: "Postpone up to 2 times",
                  },
                  {
                    label: "3-4",
                    value: 1,
                    text: "Postpone up to 4 times",
                  },
                  {
                    label: "None",
                    value: 1,
                    text: "Charged for missed classes",
                  },
                  {
                    label: "Unlimited",
                    value: 1,
                    text: "Cancel anytime free",
                  },
                ]}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
