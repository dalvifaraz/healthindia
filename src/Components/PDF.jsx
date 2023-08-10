import React from 'react';
import './pdf.css';

const PDF = ({ formData }) => {
  return (
    <div className="container pdf-content printable-content canvas border mt-5">
      <div className="d-flex flex-row">
        <div className="d-flex border-end" style={{ flex: 0.2 }}></div>
        <div className="d-flex flex-column" style={{ flex: 1 }}>
          <div className="d-flex flex-row p-3 align-items-end">
            <div style={{ flex: 1.5 }}>
              <h4>Name : {formData.name}</h4>
              <div className="d-flex align-items-center">
                <h4>Passport No : </h4>
                <h5>{formData.passportNumber}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Profession Agency : </h4>
                <h5>{formData.profession}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Recruiting Agency : </h4>
                <h5>{formData.recruitingAgency}</h5>
              </div>
            </div>
            <div style={{ flex: 0.5 }}>
              <div className="d-flex align-items-center">
                <h4>Age : </h4>
                <h5>{formData.age}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Gender : </h4>
                <h5>{formData.gender}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Weight : </h4>
                <h5>{formData.weight}</h5>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="d-flex align-items-center">
                <h4>ID : </h4>
                <h5>{formData.id}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Exam Date : </h4>
                <h5>{formData.examDate}</h5>
              </div>
              <div className="d-flex align-items-center">
                <h4>Height : </h4>
                <h5>{formData.height}</h5>
              </div>
            </div>
          </div>
          <div className="p-3 border-top">
            <h4>History of any significant past illness including :</h4>
            <div className="d-flex justify-content-between">
              <div className="" style={{}}>
                <h4>
                  1. Psychiatry & Neurological Disorders (Epilepsy, Depression
                  etc) :
                </h4>
                <h4>2. Allergy :</h4>
                <h4>3. Any Other :</h4>
              </div>
              <div className="" style={{}}>
                <h4>Nil</h4>
                <h4>Nil</h4>
                <h4>Nil</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDF;
