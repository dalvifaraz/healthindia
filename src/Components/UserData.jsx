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
  leye: '',
  lear: '',
  reye: '',
  rear: '',
  cardiovascular: '',
  bp: '',
  heart: '',
  lungs: '',
  xray: '',
  abdomen: '',
  hernia: '',
  vericose: '',
  extermities: '',
  deformities: '',
  skin: '',
  clinical: '',
  sugar: '',
  albumin: '',
  bilharziasis: '',
  helminthes: '',
  giardia: '',
  bilharziasisCulture: '',
  salmonella: '',
  shigella: '',
  cholera: '',
  haemoglobin: '',
  bloodGroup: '',
  maleria: '',
  microFilaria: '',
  rbs: '',
  lft: '',
  creatinine: '',
  hiv: '',
  hbsag: '',
  antiHcv: '',
  vdrl: '',
  pregnancy: '',
};

const UserData = ({ onSubmit }) => {
  const [userData, setUserData] = useState(userInitialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(userData);
  };

  const handleOnChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setUserData({ ...userData, [id]: value });
  };

  // React.useEffect(() => {
  //   console.log('hello', userData);
  // }, [userData]);

  const commonForm = (name) => {
    return (
      <div className="d-flex flex-wrap">
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="NAD"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">NAD</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="SRN"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">SRN</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Positive"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Positive</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Negative"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Negative</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Absent"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Absent</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Present"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Present</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Detected"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Detected</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Not Detected"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Not Detected</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Reactive"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Reactive</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Non Reactive"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Non Reactive</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="NA"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">NA</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Nil"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Nil</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="Normal"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Normal</label>
        </div>
        <div className="form-check mx-5">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={name}
            value="other"
            onChange={(e) => handleOnChange(e)}
          />
          <label className="form-check-label">Other</label>
        </div>
      </div>
    );
  };

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
            type="number"
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
            type="number"
            placeholder="CM"
            id="height"
            value={userData.height}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Left EYE*:</label>
          {commonForm('leye')}
          <input
            className="form-control"
            type="text"
            id="leye"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.leye}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Right EYE*:</label>
          {commonForm('reye')}
          <input
            className="form-control"
            type="text"
            id="reye"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.reye}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Left EAR*:</label>
          {commonForm('lear')}
          <input
            className="form-control"
            type="text"
            id="lear"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.lear}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Right EAR*:</label>
          {commonForm('rear')}
          <input
            className="form-control"
            type="text"
            id="rear"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.rear}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CARDIOVASCULAR*:</label>
          {commonForm('cardiovascular')}
        </div>
        <div className="mb-3">
          <label className="form-label">BP*:</label>
          {/* {commonForm('bp')} */}
          <input
            className="form-control"
            type="text"
            id="bp"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.bp}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">HEART*:</label>
          {commonForm('heart')}
        </div>
        <div className="mb-3">
          <label className="form-label">LUNGS*:</label>
          {commonForm('lungs')}
        </div>
        <div className="mb-3">
          <label className="form-label">CHEST X-RAY*:</label>
          {commonForm('xray')}
        </div>
        <div className="mb-3">
          <label className="form-label">ABDOMEN*:</label>
          {commonForm('abdomen')}
        </div>
        <div className="mb-3">
          <label className="form-label">HERNIA*:</label>
          {commonForm('hernia')}
        </div>
        <div className="mb-3">
          <label className="form-label">VERICOSE VEINS*:</label>
          {commonForm('vericose')}
        </div>
        <div className="mb-3">
          <label className="form-label">EXTREMITIES*:</label>
          {commonForm('extremities')}
        </div>
        <div className="mb-3">
          <label className="form-label">DEFORMITIES*:</label>
          {commonForm('deformities')}
        </div>
        <div className="mb-3">
          <label className="form-label">SKIN*:</label>
          {commonForm('skin')}
        </div>
        <div className="mb-3">
          <label className="form-label">CLINICAL*:</label>
          {commonForm('clinical')}
        </div>
        <div className="mb-3">
          <label className="form-label">SUGAR*:</label>
          {commonForm('sugar')}
        </div>
        <div className="mb-3">
          <label className="form-label">ALBUMIN*:</label>
          {commonForm('albumin')}
        </div>
        <div className="mb-3">
          <label className="form-label">BILHARZIASIS*:</label>
          {commonForm('bilharziasis')}
        </div>

        <div className="mb-3">
          <label className="form-label">HELMINTHES*:</label>
          {commonForm('helminthes')}
        </div>
        <div className="mb-3">
          <label className="form-label">GIARDIA*:</label>
          {commonForm('giardia')}
        </div>
        <div className="mb-3">
          <label className="form-label">BILHARZIASIS CULTURE*:</label>
          {commonForm('bilharziasisCulture')}
        </div>
        <div className="mb-3">
          <label className="form-label">SALMONELLA*:</label>
          {commonForm('salmonella')}
        </div>
        <div className="mb-3">
          <label className="form-label">SHIGELLA*:</label>
          {commonForm('shigella')}
        </div>
        <div className="mb-3">
          <label className="form-label">CHOLERA*:</label>
          {commonForm('cholera')}
        </div>
        <div className="mb-3">
          <label className="form-label">HAEMOGLOBIN*:</label>
          {/* {commonForm('haemoglobin')} */}
          <input
            className="form-control"
            type="number"
            id="haemoglobin"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.haemoglobin}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">BLOODGROUP*:</label>
          <div className="d-flex flex-wrap">
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="O Positive"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">O Positive</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="O Negativ"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">O Negativ</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="A Positive"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">A Positive</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="A Negative"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">A Negative</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="B Positive"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">B Positive</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="B Negative"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">B Negative</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="AB Positive"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">AB Positive</label>
            </div>
            <div className="form-check mx-5">
              <input
                className="form-check-input"
                type="radio"
                name="bloodGroup"
                id="bloodGroup"
                value="AB Negative"
                onChange={(e) => handleOnChange(e)}
              />
              <label className="form-check-label">AB Negative</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">MALERIA*:</label>
          {commonForm('maleria')}
        </div>

        <div className="mb-3">
          <label className="form-label">MICRO FILARIA*:</label>
          {commonForm('microFilaria')}
        </div>
        <div className="mb-3">
          <label className="form-label">RBS*:</label>
          {/* {commonForm('rbs')} */}
          <input
            className="form-control"
            type="number"
            id="rbs"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.rbs}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">LFT*:</label>
          {commonForm('lft')}
        </div>
        <div className="mb-3">
          <label className="form-label">CREATININE*:</label>
          {commonForm('creatinine')}
        </div>
        <div className="mb-3">
          <label className="form-label">HIV*:</label>
          {commonForm('hiv')}
        </div>
        <div className="mb-3">
          <label className="form-label">HBsAg*:</label>
          {commonForm('hbsag')}
        </div>
        <div className="mb-3">
          <label className="form-label">ANTI HCV*:</label>
          {commonForm('antiHcv')}
        </div>
        <div className="mb-3">
          <label className="form-label">VDRL*:</label>
          {commonForm('vdrl')}
        </div>
        <div className="mb-3">
          <label className="form-label">PREGNANCY TEST*:</label>
          {commonForm('pregnancy')}
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
