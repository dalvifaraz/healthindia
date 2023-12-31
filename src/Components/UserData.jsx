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
  extremities: '',
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
  fit: false,
  remark: '',
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
      <select
        id={name}
        value={userData[name]}
        onChange={(e) => handleOnChange(e)}
        class="form-select mb-3"
        required
        aria-label="Default select example"
      >
        <option selected value="">
          Open this select menu
        </option>
        <option value="NAD">NAD</option>
        <option value="SRN">SRN</option>
        <option value="Positive">Positive</option>
        <option value="Negative">Negative</option>
        <option value="Detected">Detected</option>
        <option value="Not Detected">Not Detected</option>
        <option value="Absent">Absent</option>
        <option value="Present">Present</option>
        <option value="Reactive">Reactive</option>
        <option value="Non Reactive">Non Reactive</option>
        <option value="Nil">Nil</option>
        <option value="Normal">Normal</option>
        <option value="NA">NA</option>
        <option value="">Other</option>
      </select>
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
          <select
            id="bloodGroup"
            value={userData.bloodGroup}
            onChange={(e) => handleOnChange(e)}
            class="form-select mb-3"
            aria-label="Default select example"
            required
          >
            <option selected value="">
              Open this select menu
            </option>
            <option value="O Positive">O Positive</option>
            <option value="O Negative">O Negative</option>
            <option value="A Positive">A Positive</option>
            <option value="A Negative">A Negative</option>
            <option value="B Positive">B Positive</option>
            <option value="B Negative">B Negative</option>
            <option value="AB Positive">AB Positive</option>
            <option value="AB Negative">AB Negative</option>
            <option value="---">---</option>
          </select>
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
          {/* {commonForm('creatinine')} */}
          <input
            className="form-control"
            type="number"
            id="creatinine"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.creatinine}
            onChange={(e) => handleOnChange(e)}
            required
          />
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
        <div className="mb-3">
          <label className="form-label">FIT*:</label>
          <select
            id={'fit'}
            value={userData.fit}
            onChange={(e) => handleOnChange(e)}
            class="form-select mb-3"
            required
            aria-label="Default select example"
          >
            <option selected value="">
              Open this select menu
            </option>
            <option value="true">Fit</option>
            <option value="false">Unfit</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Remark:</label>
          <input
            className="form-control"
            type="text"
            id="remark"
            placeholder="Please Provice data as it need to be shown..."
            value={userData.remark}
            onChange={(e) => handleOnChange(e)}
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
