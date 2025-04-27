import React, { useState } from "react";

const FormItem = ({
  initialQuestion,
  initialOptions = ["Option 1"],
  questionType = "sLine",
  questions = [],
}) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [options, setOptions] = useState(initialOptions);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length >= 5) {
      alert("Maximum 5 options allowed.");
      return;
    }
    setOptions([...options, ""]);
  };

  const handleDeleteOption = (index) => {
    if (options.length <= 1) {
      alert("At least one option is required.");
      return;
    }
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const renderOptions = () => {
    if (questionType === "multipleChoice") {
      return (
        <div className="form-group">
          {options.map((option, index) => (
            <div key={index} className="mb-3">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="radio" disabled />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={option.label}
                  onChange={(e) =>
                    handleOptionChange(index, "label", e.target.value)
                  }
                  placeholder={`Option ${index + 1} Label`}
                />
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => handleDeleteOption(index)}>
                  &times;
                </button>
                <input
                  type="text"
                  className="form-control"
                  value={option.value}
                  onChange={(e) =>
                    handleOptionChange(index, "value", e.target.value)
                  }
                  placeholder={`Option ${index + 1} Value`}
                />
              </div>
            </div>
          ))}

          <button className="btn btn-link" onClick={handleAddOption}>
            Add option
          </button>
        </div>
      );
    } else if (questionType === "shortAnswer") {
      return (
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Short answer text"
          disabled
        />
      );
    } else if (questionType === "paragraph") {
      return (
        <textarea
          className="form-control mt-2"
          placeholder="Long answer text"
          rows="3"
          disabled
        />
      );
    } else if (questionType === "number") {
      return (
        <input
          type="number"
          className="form-control mt-2"
          placeholder="Number input"
          min={0}
          max={options.maxValue}
          disabled
        />
      );
    } else if (questionType === "boolean") {
      return questions.map((item, index) => (
        <div className="form-check mt-2" key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            id="booleanCheck"
            disabled
          />
          <label className="form-check-label" htmlFor="booleanCheck">
            Yes completed {item}
          </label>
        </div>
      ));
    } else if (questionType === "time") {
      return (
        <input
          type="time"
          className="form-control mt-2"
          placeholder="Time input"
          disabled
        />
      );
    }
  };

  return (
    <div className="card p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control me-3"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />
      </div>

      {renderOptions()}

      <div className="d-flex justify-content-end align-items-center mt-3">
        <div>
          <button className="btn btn-outline-success me-2">Save</button>
          <button className="btn btn-outline-danger">Hide Question</button>
        </div>
      </div>
    </div>
  );
};

export default FormItem;
