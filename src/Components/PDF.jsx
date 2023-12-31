import React from 'react';
import './pdf.css';
import logo from './logo2.png';
import sign from './sign.png';
import stamp from './stamp.png';
import UserData from './UserData';

const PDF = ({ formData }) => {
  console.log('hello', formData);
  return (
    <div
      className="container pdf-content printable-content canvas"
      style={{ position: 'relative' }}
    >
      <h6
        style={{
          color: '#146c95',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)  scale(2, 2)',
          opacity: 0.2,
          fontSize: '2.5rem',
          fontWeight: 'bold',
          // font,
        }}
      >
        Health India Medical Center
      </h6>
      <div className="d-flex justify-content-around align-items-end">
        <div className="logo">
          <img src={logo} alt="Logo" height={125} width={125} />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h1
            className=""
            style={{ color: '#146c95', fontSize: '3rem', fontWeight: 'bold' }}
          >
            Health India Medical Center
          </h1>
          <h4>Shop No 07, Khan Complex, Shilphata, Mumbra, Thane 400612</h4>
          <h4>Phone: +91 - 8451985813</h4>
          <h4>Email - healthindia8451@gmail.com</h4>
        </div>
      </div>
      <h4 style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        TEST REPORT
      </h4>
      <div className="d-flex flex-row border">
        <div className="d-flex border-end" style={{ flex: 0.2 }}></div>
        <div className="d-flex flex-column " style={{ flex: 1 }}>
          <div className="d-flex flex-row border-bottom pt-1 px-3 align-items-end">
            <div style={{ flex: 1.5 }}>
              <h4>Name : {formData?.name}</h4>
              <div className="d-flex align-items-center">
                <h4>Passport No : </h4>
                <h4>{formData?.passportNumber}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Profession Agency : </h4>
                <h4>{formData?.profession}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Recruiting Agency : </h4>
                <h4>{formData?.recruitingAgency}</h4>
              </div>
            </div>
            <div style={{ flex: 0.5 }}>
              <div className="d-flex align-items-center">
                <h4>Age : </h4>
                <h4>{formData?.age}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Gender : </h4>
                <h4>{formData?.gender}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Weight : </h4>
                <h4>{formData?.weight}</h4>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="d-flex align-items-center">
                <h4>ID : </h4>
                <h4>{formData?.id}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Exam Date : </h4>
                <h4>{formData?.examDate}</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4>Height : </h4>
                <h4>{formData?.height}</h4>
              </div>
            </div>
          </div>
          <div className="px-3 pt-1">
            <h4>History of any significant past illness including :</h4>
            <div className="d-flex justify-content-between">
              <div className="" style={{}}>
                <h5>
                  1. Psychiatry & Neurological Disorders (Epilepsy, Depression
                  etc) :
                </h5>
                <h5>2. Allergy :</h5>
                <h5>3. Any Other :</h5>
              </div>
              <div className="" style={{}}>
                <h5>Nil</h5>
                <h5>Nil</h5>
                <h5>Nil</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-top-0">
        <h5>
          I hereby permit, NeoCare Diagnostic Pvt. Ltd. and the undersigned
          physician to furnish such information the company may need
          pertainingtomy health status and other medical findings and to hereby
          release them . from any and all lrgal resposibility by doing so. I
          also certifythat mymedical history contained above is true and any
          false statement will disqualify me from my employment, benefits and
          claims.
        </h5>
        <h5 className="d-flex justify-content-center">
          Signature of Candidate :
        </h5>
      </div>
      <div className="">
        <div className="border border-top-0 d-flex justify-content-evenly">
          <h4>MEDICAL EXAMINATION</h4>
          <h4>LABORATORY INVESTIGATIONS</h4>
        </div>
        <div className="d-flex border-bottom" style={{}}>
          <div className="d-flex" style={{ flex: 1 }}>
            <div
              className="d-flex flex-column border-end border-start"
              style={{ flex: 1 }}
            >
              <div className="d-flex border-bottom">
                <div
                  className="d-flex justify-content-center"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <h4>TYPE OF MEDICAL EXAMINATION</h4>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h4>Result</h4>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex justify-content-around">
                    <h4>EYE</h4>
                    <div className="d-flex flex-column">
                      <h4>R-EYE</h4>
                      <h4>L-EYE</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column">
                    <h5>{formData?.reye}</h5>
                    <h5>{formData?.leye}</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex justify-content-around">
                    <h4>EAR</h4>
                    <div className="d-flex flex-column">
                      <h4>R-EAR</h4>
                      <h4>L-EAR</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column">
                    <h5>{formData?.rear}</h5>
                    <h5>{formData?.lear}</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>SYSTEMATIC EXAM</h4>
                    <h5>CARDIOVASCULAR</h5>
                    <h5>BP</h5>
                    <h5>HEART</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.cardiovascular}</h5>
                  <h5>{formData?.bp}</h5>
                  <h5>{formData?.heart}</h5>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>RESPIRATORY SYSTEM</h4>
                    <h5>LUNGS</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.lungs}</h5>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>CHEST X-RAY</h4>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.xray}</h5>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>GASTROINTESTINAL</h4>
                    <h5>ABDOMEN</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.abdomen}</h5>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>OTHERS</h4>
                    <h5>HERNIA</h5>
                    <h5>VERICOSE VEINS</h5>
                    <h5>EXTREMITIES</h5>
                    <h5>DEFORMITIES</h5>
                    <h5>SKIN</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.hernia}</h5>
                  <h5>{formData?.vericose}</h5>
                  <h5>{formData?.extermities}</h5>
                  <h5>{formData?.deformities}</h5>
                  <h5>{formData?.skin}</h5>
                </div>
              </div>
              <div className="d-flex border-bottom">
                <div
                  className="border-end"
                  style={{ flex: 1, paddingTop: '1px' }}
                >
                  <div className="d-flex flex-column ps-5">
                    <h4>VENERAL DISEASES</h4>
                    <h5>CLINICAL</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-end"
                  style={{ flex: 0.5, paddingTop: '1px' }}
                >
                  <h5>{formData?.clinical}</h5>
                </div>
              </div>
              <div className="d-flex mt-2">
                <h3
                  className="ps-5"
                  style={{
                    color: formData.fit == 'true' ? 'black' : 'red',
                    fontWeight: 'bolder',
                  }}
                >
                  {formData.fit == 'true' ? 'FIT' : 'UNFIT'}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column border-end border-start"
            style={{ flex: 1, paddingTop: '1px' }}
          >
            <div className="d-flex border-bottom">
              <div
                className="d-flex border-end justify-content-center"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <h4>TYPE OF LAB INVESTIGATION</h4>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h4>Result</h4>
              </div>
            </div>

            <div className="d-flex border-bottom">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex ps-5">
                  <div className="col-3" style={{}}>
                    <h4>URINE</h4>
                  </div>
                  <div
                    className="d-flex flex-column col-7 mt-1"
                    style={{ flex: 1, paddingTop: '1px' }}
                  >
                    <h5>SUGAR</h5>
                    <h5>ALBUMIN</h5>
                    <h5 className="">BILHARZIASIS (IF ENDEMIC)</h5>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.sugar}</h5>
                <h5>{formData?.albumin}</h5>
                <h5>{formData?.bilharziasis}</h5>
              </div>
            </div>
            <div className="d-flex border-bottom">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex flex-column ps-5">
                  <h4>STOOL ROUTINE</h4>
                  <h5>HELMINTHES</h5>
                  <h5>GIARDIA</h5>
                  <h5 className="">BILHARZIASIS (IF ENDEMIC) CULTURE</h5>
                  <h5>SALMONELLA</h5>
                  <h5>SHIGELLA</h5>
                  <h5 className="">V. CHOLERA (IF ENDEMIC)</h5>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.helminthes}</h5>
                <h5>{formData?.giardia}</h5>
                <h5>{formData?.bilharziasisCulture}</h5>
                <h5>{formData?.salmonella}</h5>
                <h5>{formData?.shigella}</h5>
                <h5>{formData?.cholera}</h5>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex ps-5">
                  <div className="col-5" style={{}}>
                    <h4>HEMATOLOGY</h4>
                  </div>
                  <div
                    className="d-flex flex-column col-7 mt-1"
                    style={{ flex: 1, paddingTop: '1px' }}
                  >
                    <h5>HAEMOGLOBIN</h5>
                    <h5>BLOODGROUP</h5>
                    <div className="" style={{ marginLeft: '-2rem' }}>
                      <h5>THICK FILM FOR</h5>
                    </div>
                    <h5>1. MALERIA</h5>
                    <h5>2. MICRO FILARIA</h5>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.haemoglobin} g/dL</h5>
                <h5>{formData?.bloodGroup}</h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
                <h5>{formData?.maleria}</h5>
                <h5>{formData?.microFilaria}</h5>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex ps-5">
                  <div className="col-5" style={{}}>
                    <h4>BIOCHEMISTRY</h4>
                  </div>
                  <div className="d-flex flex-column col-7" style={{ flex: 1 }}>
                    <h5>1. RBS</h5>
                    <h5>2. LFT</h5>
                    <h5>3. CREATININE</h5>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.rbs} mg/dL</h5>
                <h5>{formData?.lft}</h5>
                <h5>{formData?.creatinine} mg/dL</h5>
              </div>
            </div>
            <div className="d-flex border-bottom">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex ps-5">
                  <div className="col-5" style={{}}>
                    <h4>SEROLOGY</h4>
                  </div>
                  <div
                    className="d-flex flex-column col-7"
                    style={{ flex: 1, paddingTop: '1px' }}
                  >
                    <h5>1. HIV 1I & II</h5>
                    <h5>2. HBsAg</h5>
                    <h5>3. ANTI HCV</h5>
                    <h5>4. VDRL</h5>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.hiv}</h5>
                <h5>{formData?.hbsag}</h5>
                <h5>{formData?.antiHcv}</h5>
                <h5>{formData?.vdrl}</h5>
              </div>
            </div>
            <div className="d-flex border-bottom">
              <div
                className="border-end"
                style={{ flex: 1, paddingTop: '1px' }}
              >
                <div className="d-flex ps-5">
                  <h4>PREGNANCY TEST</h4>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-end"
                style={{ flex: 0.5, paddingTop: '1px' }}
              >
                <h5>{formData?.pregnancy}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom border-secondary border-2 mt-2">
        <div className="d-flex">
          <h4 className="mb-1">REMARKS:</h4>
          <h4 className="">
            {formData?.remark?.length > 0
              ? formData.remark
              : 'The medical report indicates that the person may be fit for the above mentioned job'}
          </h4>
        </div>
        <div
          className="d-flex justify-content-end align-items-center"
          style={{
            marginTop: '5rem',
            marginRight: '5rem',
            position: 'relative',
          }}
        >
          <img
            style={{ position: 'absolute', right: 150, bottom: 1, zIndex: 9 }}
            src={stamp}
            alt="stamp"
            height={90}
            width={90}
          />
          <img
            style={{ position: 'absolute', right: 10, bottom: 40 }}
            src={sign}
            alt="sign"
            height={50}
            width={100}
          />
          <div className="contaienr dr2 d-flex flex-column align-items-center">
            <h4>Dr.(Mrs) Anjum A Sharif</h4>
            <h4>M.B.B.S, M.D(Path)</h4>
          </div>
        </div>
      </div>
      <h4 className="d-flex justify-content-center mt-1">
        Shop No 07, Khan Complex, Shilphata, Mumbra, Thane 400612
      </h4>
    </div>
  );
};

export default PDF;
