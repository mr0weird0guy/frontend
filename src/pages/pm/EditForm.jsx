import React, { useState } from "react";
import { Layout, FormItem } from "../../components";

const EditForm = () => {
  const [formState, setFormState] = useState({
    formName: "Form 1",
    status: "Active",
    duration: "2024-25",
  });
  const defaultQuestion = [
    {
      topic: "Name",
      question: "Please fill your Name.",
      responceType: "shortAnswer",
      options: [{ maxValue: 60 }],
      scoring: {
        max: 0,
        min: 0,
      },
    },
    {
      topic: "Leaves",
      question:
        "Please fill the number of leaves taken from Jan 2022 to Dec 2022. Please attach the screenshot of the leaves taken from leave portal.",
      responceType: "number",
      options: [{ maxValue: 60 }],
      scoring: {
        max: 15,
        min: 0,
      },
    },
    {
      topic: "Story Points",
      question: "Please fill the story points delivered for each sprint.",
      responceType: "number",
      options: [{ maxValue: 10 }],
      scoring: {
        max: 8,
        min: 0,
      },
    },
    {
      topic: "Code Quality",
      question:
        "Respond with Yes/No if each parameter is followed for more than 80% of the times",
      questions: [
        "Code Review",
        "Unit Testing",
        "Integration Testing",
        "Code Coverage",
      ],
      responceType: "boolean",
    },
    {
      topic: "Mentoring",
      question: "No. of TMs mentored/Coached",
      responceType: "number",
    },
    {
      topic: "Team Learning",
      question:
        "Total number of minutes contributed to the team learning sessions",
      responceType: "time",
    },
    {
      topic: "Certification",
      question:
        "Certification Details/ for no certificate - resource links during the year, each in new Line",
      responceType: "paragraph",
    },
    {
      topic: "Programs",
      question: "List of Programs joined during the year, each in new Line",
      responceType: "paragraph",
    },
    {
      topic: "Interviews",
      question: "Total time(HH:mm) of interviews taken during the year.",
      responceType: "time",
    },
    {
      topic: "Others",
      question:
        "Any other contribution not listed.(each no more than 50 characters in new line)",
      responceType: "paragraph",
    },
  ];

  const handleFormName = (name) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        formName: name,
      };
    });
  };

  const handleFormState = () => {
    setFormState((prevState) => {
      return {
        ...prevState,
        status: prevState.status === "Active" ? "Inactive" : "Active",
      };
    });
  };

  return (
    <Layout>
      <div className="my-6 mx-4">
        <div className="d-flex justify-content-end align-items-center mb-4">
          <div class="form-check form-switch">
            <label class="form-check-label">Form Name</label>
            <input
              type="text"
              className="form-control d-inline-block w-auto mt-2"
              onClick={(name) => handleFormName(name)}
              value={formState.formName}
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              onClick={() => handleFormState()}
              role="switch"
              checked={formState.status === "Active" ? true : false}
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {formState.status}
            </label>
          </div>
          <button>Share Form</button>
        </div>
        {defaultQuestion.map((item, index) => (
          <FormItem
            key={index}
            topic={item.topic}
            questionType={item.responceType}
            initialQuestion={item.question}
            initialOptions={item.options}
            scoring={item.scoring}
            questions={item.questions ? item.questions : []}
          />
        ))}
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </Layout>
  );
};

export default EditForm;
