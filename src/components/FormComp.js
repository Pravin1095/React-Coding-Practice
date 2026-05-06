import { useState } from "react";

const FormComp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [showData, setShowData] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isDisabled = () => {
    return formData?.email?.length === 0 || formData?.password?.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setErrMsg("Password should be greater than 6 characters");
      return;
    }
    setShowData(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="text"
        />
        <button disabled={isDisabled()} type="submit">
          Submit
        </button>
      </form>
      {errMsg && <h3>{errMsg}</h3>}
      {showData && (
        <>
          <h2>{`Email: ${formData.email}`}</h2>
          <h2>{`Password: ${formData.password}`}</h2>
        </>
      )}
    </>
  );
};

export default FormComp;
