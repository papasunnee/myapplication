import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Forms = () => {
  const [form, setForm] = useState({});
  const [eyeState, setEyeState] = useState(false);

  //   function handleChangeForFirstname(event) {
  //     setFirstname(event.target.value);
  //   }
  //   function handleChangeForLastname(event) {
  //     setLastname(event.target.value);
  //   }

  function handleChange(event) {
    console.log(event.target.name, event.target.value);
    // let name = event.target.name;
    // let value = event.target.value;
    let { name, value } = event.target;
    setForm((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  const handlePasswordState = () => {
    setEyeState(!eyeState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <label>
            Enter your password:
            <input
              type={eyeState ? "text" : "password"}
              name="password"
              className="border"
              value={form.password || ""}
              onChange={handleChange}
            />
          </label>
          {eyeState ? (
            <FaEyeSlash
              onClick={handlePasswordState}
              className="cursor-pointer text-red-700"
            />
          ) : (
            <FaEye
              onClick={handlePasswordState}
              className="cursor-pointer text-red-700"
            />
          )}
        </div>
        <div>
          <label className="text-red-600">
            Enter your first name:
            <input
              type="text"
              name="firstname"
              value={form.firstname || ""}
              className="border"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your last name:
            <input
              type="text"
              name="lastname"
              className="border"
              value={form.lastname || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <textarea
            value={form.textarea || ""}
            name="textarea"
            onChange={handleChange}
          />
        </div>
        <div>
          <select value={form.mycar || ""} name="mycar" onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Forms;
