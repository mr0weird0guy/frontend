import React from "react";
import { Layout, Table } from "../../components";
import { useNavigate } from "react-router-dom";

const ManageForm = () => {
  const navigate = useNavigate();
  const forms = [
    {
      slno: 1,
      FormName: "Form 1",
      status: "Active",
      duration: "2024-25",
    },
    {
      slno: 2,
      FormName: "Form 2",
      status: "Inactive",
      duration: "2023-24",
    },
    {
      slno: 3,
      FormName: "Form 3",
      status: "Active",
      duration: "2024-25",
    },
    {
      slno: 4,
      FormName: "Form 4",
      status: "Inactive",
      duration: "2023-24",
    },
    {
      slno: 5,
      FormName: "Form 5",
      status: "Active",
      duration: "2024-25",
    },
  ];

  return (
    <Layout>
      <div className="my-6 mx-4">
        {/* Task Table with Filter Integration */}
        <div className="d-flex justify-content-end align-items-center mb-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/edit-form/${forms.length + 1}`)}>
            New Form
          </button>
        </div>
        <Table
          onClick={(form) => navigate(`/edit-form/${form.slno}`)}
          name="Forms"
          data={forms}
        />
      </div>
    </Layout>
  );
};

export default ManageForm;
