import { Routes, Route } from "react-router-dom";
import { Login, Dashboard, Form, Review, ManageForm, EditForm } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/form/*" element={<Form />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/review/:id"
        element={
          <ProtectedRoute>
            <Review />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-form"
        element={
          <ProtectedRoute>
            <ManageForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-form/:id"
        element={
          <ProtectedRoute>
            <EditForm />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<ProtectedRoute />} />
    </Routes>
  );
};

export default App;
