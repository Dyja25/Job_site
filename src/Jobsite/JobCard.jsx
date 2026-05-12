import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleCandidateApplyModal,handleEmailFormModal } from "./JobAction";
import moment from "moment";
import {getJobCardDetails,setCardData,getRolesName,getCountries} from "./JobAction";
import AddEmailFormModal from "./AddEmailFormModal.jsx";
import { Field, Formik } from "formik";
import { FormattedMessage } from "react-intl";


function Job(props) {
  const data2 = [
    // {
    //   workpreference: "All",
    // },
    {
      workpreference: "Remote",
    },
    {
      workpreference: "Hybrid",
    },
    {
      workpreference: "Office",
    },
  ];
// const [filterText, setFilterText] = useState('');
useEffect(()=>{
  props.getJobCardDetails()
  props.getRolesName();
  props.getCountries();
},[])
const [selectedOption, setSelectedOption] = useState('');
const options = ['Remote', 'Hybrid', 'Office'];

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};
const [selectedRole, setSelectedRole] = useState('');
  

const [selectedCountry, setSelectedCountry] = useState('');
const [filterText, setFilterText] = useState('');
const [filteredData, setFilteredData] = useState(props.jobData);
const [selectedPreference, setSelectedPreference] = useState('');
console.log(props.jobData)
console.log(filteredData)
const handlePreferenceChange = (event) => {
  const preference = event.target.value;
  setSelectedPreference(preference);

  if (preference === '') {
    setFilteredData(props.jobData);
  } else {
    const filteredJobs = props.jobData.filter((job) => job.workPreference === preference);
    setFilteredData(filteredJobs);
  }
};


const handleCountryChange = (event) => {
  const country = event.target.value;
  setSelectedCountry(country);

  const filteredJobs = props.jobData.filter((job) => {
    console.log(job.address.length && job.address[0].country);
    const preferenceMatch = selectedPreference === '' || job.workPreference === selectedPreference;
    const countryMatch = country === '' || job.address.length && job.address[0].country === country;
    return preferenceMatch && countryMatch;
  });

  setFilteredData(filteredJobs);
};
const handleRoleChange = (event) => {
  const role = event.target.value;
  setSelectedRole(role);

  const filteredJobs = props.jobData.filter((job) => {
    // console.log(job.address.length && job.address[0].country);
    const preferenceMatch = selectedPreference === '' || job.workPreference === selectedPreference;
    const roleMatch = role === '' || job.role === role;
    return preferenceMatch && roleMatch;
  });

  setFilteredData(filteredJobs);
};
useEffect(() => {
 
  const filteredJobs = props.jobData.sort((a, b) => {
    const indA = a.pingInd;
    const indB = b.pingInd;
    if (indA < indB) {
      return 1;
    }
    if (indA > indB) {
      return -1;
    }

    // ind must be equal
    return 0;
  });
  setFilteredData(filteredJobs);
}, [props.jobData, filterText]);

 

  const filterData = filteredData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(filterText.toLowerCase())
    )
  );
  const rolesNameOption = props.rolesname.map((item) => {
    return {
      label: `${item.roleType}`,
    //  value: item.roleTypeId,
    };
  });
  const countryNameOption = props.countries.map((item) => {
    return {
      label: `${item.countryName}`,
      //value: item.countryAlpha3Code,
    };
  });

  return (
    <React.Fragment>
      <Formik>
      <div className="wrapper">
    
        <div class="ml-9 flex items-center max-sm:flex-col max-sm:items-stretch max-sm:ml-0 max-sm:gap-3 max-sm:px-3">
        <div className=" h-8 w-48 flex-shrink-0 overflow-hidden rounded-sm border-2 border-gray-200 object-cover object-center ">
        <FormattedMessage id="app.sear" defaultMessage="sear">
        {sear=>( <input
        className="w-full h-full px-2"
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder={sear}
        />
        )}
        </FormattedMessage>
        </div>
<div className="h-8 w-40 max-sm:w-full ml-4 max-sm:ml-0 flex-shrink-0 overflow-hidden rounded-sm border-2 border-gray-200 object-cover object-center">        <FormattedMessage id="app.rolee" defaultMessage="rolee">
        {rolee=>( <select value={selectedRole} onChange={handleRoleChange}  className="w-full h-full px-1">
        <option value="">{rolee}</option>
        {rolesNameOption.map((roleOption, index) => (
          <option key={index} value={roleOption.value}>
            {roleOption.label}
          </option>
        ))}
      </select>
       )}
       </FormattedMessage>
       </div>
       
       
       {/* <select
  id="selectPreference"
  value={selectedPreference}
  onChange={handlePreferenceChange}
>
  <option value="" disabled selected>
    Select Preference
  </option>
  {data2.map((preference, index) => (
    <option key={index} value={preference.workpreference}>
      {preference.workpreference}
    </option>
  ))}
</select> */}

<div className="h-8 w-40 max-sm:w-full ml-4 max-sm:ml-0 flex-shrink-0 overflow-hidden rounded-sm border-2 border-gray-200 object-cover object-center">
  <FormattedMessage id="app.preference" defaultMessage="preference">
{preference=>(<select
  id="selectPreference"
  value={selectedPreference}
  onChange={handlePreferenceChange}
  className="w-full h-full px-1"
>
  <option value="" disabled>
    {preference}
  </option>
  <option value="">All</option>
  {data2.map((preference, index) => (
    <option key={index} value={preference.workpreference}>
      {preference.workpreference}
    </option>
  ))}
</select>
)}
</FormattedMessage>

                      </div>    
<div className="h-8 w-40 max-sm:w-full ml-4 max-sm:ml-0 flex-shrink-0 overflow-hidden rounded-sm border-2 border-gray-200 object-cover object-center">                      <FormattedMessage id="app.country" defaultMessage="country">
        {country=>( <select value={selectedCountry} onChange={handleCountryChange} className="w-full h-full px-1">
        <option value="">{country}</option>
        {countryNameOption.map((countryOption, index) => (
          <option key={index} value={countryOption.value}>
            {countryOption.label}
          </option>
        ))}
      </select>
        )}
        </FormattedMessage>
       </div>    
      </div>
     
      {filterData.map((item) => {
       const city=item.address.length&&item.address[0].city
        console.log(item.address.length&&item.address[0].city)
        return (
         <div className="h-64 max-sm:h-auto w-wk max-sm:w-full mt-2 flex-shrink-0 overflow-hidden rounded-sm border-2 border-gray-200 object-cover object-center max-sm:px-2">
          <div className="flex max-sm:flex-col md:flex-row w-wk max-sm:w-full justify-between mt-8 max-sm:gap-4">
           <div class="flex max-sm:flex-col justify-around m-4 md:w-2/5 max-sm:gap-4">
            <div class="max-sm:w-full md:w-2/5">
              <h3 className="job" ><b>Job ID</b>{item.jobOrder}</h3>
              <h3 className="crd mt-2"><b>
                {/* Job closed by */}
                <FormattedMessage
                  id="app.jobclosedby"
                  defaultMessage="jobclosedby"
                />
                </b> {` ${moment(item.closeByDate).format("ll")}`}</h3>
              <h3 className="crd mt-2"><b>
                {/* Work preference */}
                <FormattedMessage
                  id="app.workpreference"
                  defaultMessage="workpreference"
                />
                </b>{item.workPreference}</h3>
             
         
            {/* <h3 className="req"><b>Skills</b><h3 className=" overflow-auto">{item.skillName}</h3></h3> */}
            </div>
            <div class="max-sm:w-full md:w-2/4">
             
            <h3 className="req "><b>
    
              <FormattedMessage
                  id="app.jobtitle"
                  defaultMessage="jobtitle"
                />
              </b>{item.requirementName}</h3>
            <h3 className="loc mt-2"><b>
          
              <FormattedMessage
                  id="app.location"
                  defaultMessage="location"
                />
              </b>
              {city}</h3>
                
              <h3 className="avl mt-2"><b>
              <FormattedMessage
                  id="app.startdate"
                  defaultMessage="startdate"
                />
              </b>
              {` ${moment(item.avilableDate).format("ll")}`}
              </h3>
              
            </div>
            </div>
            <div class="flex max-sm:flex-col justify-around m-4 md:w-2/4 max-sm:gap-4">
            <div class="max-sm:w-full md:w-full max-sm:h-auto h-96 ">
            <h3><b><FormattedMessage
                  id="app.description"
                  defaultMessage="description"
                />
              </b></h3>
             <h3 className="whitespace-pre-line break-words md:text-justify max-sm:text-sm max-sm:leading-6">{item.description}</h3>
            </div>
            {/* <div class="mt-20 ml-4 max-sm:mt-4 max-sm:ml-0 max-sm:flex max-sm:justify-center">
              <a href="https://talent.tekorero.com/contact/" target="_blank">
            <Button
              type="primary"
              htmlType="submit"
            >
                <FormattedMessage
                  id="app.apply"
                  defaultMessage="apply"
                />
          
            </Button>
            </a>
            </div> */}
            <div class="mt-20 ml-4 max-sm:mt-4 max-sm:ml-0 max-sm:flex max-sm:justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="aply"
              onClick={() => {props.handleEmailFormModal(true)
              props.setCardData(item)
              }}
              style={{position: "static",width:"max-content"}}
              
             
            >
             <FormattedMessage
                  id="app.apply"
                  defaultMessage="apply"
                />
            </Button>
            </div>
            </div>
          </div>
          </div>
        );
      })}
      </div>
      </Formik>
      <AddEmailFormModal
    addEmailformModal={props.addEmailformModal}
    handleEmailFormModal={props.handleEmailFormModal}
    />
    </React.Fragment>
  );
}
const mapStateToProps = ({ job }) => ({
  addCandidateApply: job.addCandidateApply,
  addEmailformModal:job.addEmailformModal,
  jobData:job.jobData,
  rolesname:job.rolesname,
  countries: job.countries,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleCandidateApplyModal,
      handleEmailFormModal,
      getJobCardDetails,
      setCardData,
      getRolesName,
      getCountries
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);

