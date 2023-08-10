import React, { useState } from 'react';

export const userInitialState = {
  name: '',
  passportNumber: '',
  profession: '',
  recruitingAgency: '',
  age: '',
  gender: '',
  weight: '',
  height: '',
  illness: [
    {
      phychiatry: false,
      allergy: false,
      other: false,
    },
  ],
  examDate: '',
  id: '',
};

const UserData = ({ onSubmit }) => {
  const [userData, setUserData] = useState(userInitialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(userData);
  };

  const handleOnChange = (event) => {
    console.log(event.target);
    const id = event.target.id;
    const value = event.target.value;
    setUserData({ ...userData, [id]: value });
  };

  React.useEffect(() => {
    console.log('hello', userData);
  }, [userData]);

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID*:</label>
          <input
            className="form-control"
            type="text"
            id="id"
            value={userData.id}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Exam Date*:</label>
          <input
            className="form-control"
            type="date"
            id="examDate"
            value={userData.examDate}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name*:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={userData.name}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Passport Number*:</label>
          <input
            className="form-control"
            type="text"
            id="passportNumber"
            value={userData.passportNumber}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profession*:</label>
          <input
            className="form-control"
            type="text"
            id="profession"
            value={userData.profession}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Recruiting Agency*:</label>
          <input
            className="form-control"
            type="text"
            id="recruitingAgency"
            value={userData.recruitingAgency}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age*:</label>
          <input
            className="form-control"
            type="text"
            id="age"
            value={userData.age}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className="mb-3 d-flex">
          <label className="form-label">Gender*:</label>
          <div className="form-check mx-5">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Male"
              onChange={(e) => handleOnChange(e)}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check mx-5">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Female"
              onChange={(e) => handleOnChange(e)}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Weight*:</label>
          <input
            className="form-control"
            type="text"
            id="weight"
            placeholder="KG"
            value={userData.weight}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Height*:</label>
          <input
            className="form-control"
            type="text"
            placeholder="CM"
            id="height"
            value={userData.height}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Submit
          </button>
          <button type="reset" className="btn btn-primary w-100">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserData;
