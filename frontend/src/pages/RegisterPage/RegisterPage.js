import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
  };
  const [formData, handleInputChange, handleSubmit, finalData] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Company Name:{" "}
          <input
            type="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Owner Operator:{" "}
          <input
            type="dispatcher"
            name="is_owner_operator"
            value={finalData.is_owner_operator}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" data-testid="submit btn">Register</button>        
      </form>
    </div>
  );
};

export default RegisterPage;
