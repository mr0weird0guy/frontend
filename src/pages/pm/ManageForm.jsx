import React from "react";
import { Layout, FormItem } from "../../components";

const ManageForm = () => {
  const defaultQuestion = [
    {
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
      question: "Please fill the story points delivered for each sprint.",
      responceType: "number",
      options: [{ maxValue: 10 }],
      scoring: {
        max: 8,
        min: 0,
      },
    },
    {
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
      question: "No. of TMs mentored/Coached",
      responceType: "number",
    },
    {
      question:
        "Total number of minutes contributed to the team learning sessions",
      responceType: "time",
    },
    {
      question:
        "Total number of minutes contributed to the team learning sessions",
      responceType: "time",
    },
    {
      question:
        "Certification Details/ for no certificate - resource links during the year, each in new Line",
      responceType: "paragraph",
    },
    {
      question: "List of Programs joined during the year, each in new Line",
      responceType: "paragraph",
    },
    {
      question: "Total time(HH:mm) of interviews taken during the year.",
      responceType: "time",
    },
    {
      question:
        "Any other contribution not listed.(each no more than 50 characters in new line)",
      responceType: "paragraph",
    },
  ];

  return (
    <Layout>
      <div className="my-6 mx-4">
        <div className="d-flex justify-content-end align-items-center mb-4">
          <button>Share Form</button>
        </div>
        {defaultQuestion.map((item, index) => (
          <FormItem
            key={index}
            qType={item.responceType}
            initialQuestion={item.question}
            initialOptions={item.options}
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

export default ManageForm;
