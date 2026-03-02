import * as types from "./JobActionType";
import { base_url,key_url } from "../Config/Auth";
import axios from "axios";
import { message,notification  } from "antd";
import Swal from "sweetalert2";


export const setJobViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_JOB_VIEW_TYPE, payload: viewType });


  export const getdocumentdata = (data) => (dispatch) => {

  
    dispatch({
      type: types.GET_DOCUMENT_DATA_SUCCESS,
      payload:data,
    });

};

export const getSectors = () => (dispatch) => {
  dispatch({
    type: types.GET_SECTORS_REQUEST,
  });
  axios
    .get(`${base_url}/sector/website?url=${key_url}`,)

    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_SECTORS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_SECTORS_FAILURE,
        payload: err,
      });
    });
};

export const addCandidate = (data,cb) => (dispatch) => {
  dispatch({
    type: types.ADD_CANDIDATE_REQUEST,
  });
  axios
    .post(`${base_url}/candidate/website?url=${key_url}`, data)
    .then((res) => {
   
      dispatch({
        type: types.ADD_CANDIDATE_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.message)
      //  history.push("/success")
      // window.reload()
     cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_CANDIDATE_FAILURE,
        payload: err,
      });
      cb && cb();
    });
};

export const handleCandidateApplyModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CANDIDATE_APPLY_MODAL,
    payload: modalProps,
  });
};
export const getLibrarys = () => (dispatch) => {
  dispatch({
    type: types.GET_LIBRARYS_REQUEST,
  });
  axios
    .get(`${base_url}/candidate/defination/website?url=${key_url}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_LIBRARYS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_LIBRARYS_FAILURE,
        payload: err,
      });
    });
};

export const getIdProofs = () => (dispatch) => {
  dispatch({
    type: types.GET_PROOFS_REQUEST,
  });
  axios
    .get(`${base_url}/idProofType/all-list/website?url=${key_url}`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_PROOFS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_PROOFS_FAILURE,
        payload: err,
      });
    });
};
export const getDesignations = () => (dispatch) => {
  dispatch({
    type: types.GET_DESIGNATIONS_REQUEST,
  });
  axios               
    .get(`${base_url}/designation/website?url=${key_url}`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_DESIGNATIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DESIGNATIONS_FAILURE,
        payload: err,
      });
    });
};
export const getDepartments = () => (dispatch) => {
  dispatch({
    type: types.GET_DEPARTMENTS_REQUEST,
  });
  axios
    .get(`${base_url}/department/website?url=${key_url}`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_DEPARTMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DEPARTMENTS_FAILURE,
        payload: err,
      });
    });
};
export const getRoles = () => (dispatch) => {
  dispatch({
    type: types.GET_ROLES_REQUEST,
  });
  axios
    .get(`${base_url}/roleType/website?url=${key_url}`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ROLES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ROLES_FAILURE,
        payload: err,
      });
    });
};

export const getCurrency = () => (dispatch) => {
  dispatch({
    type: types.GET_CURRENCY_REQUEST,
  });
  axios
    .get(`${base_url}/currencies/website?url=${key_url}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CURRENCY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CURRENCY_FAILURE,
        payload: err,
      });
    });
};

export const getCountries = () => (dispatch) => {
  dispatch({
    type: types.GET_COUNTRIES_REQUEST,
  });
  axios
    .get(`${base_url}/countries/website?url=${key_url}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_COUNTRIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_COUNTRIES_FAILURE,
        payload: err,
      });
    });
};

export const addPartner = (data, cb) => (dispatch) => {
  dispatch({
    type: types.ADD_PARTNER_REQUEST,
  });

  axios
    .post(`${base_url}/partner/website?url=${key_url}`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.ADD_PARTNER_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.message)
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_PARTNER_FAILURE,
        payload: err,
      });
      cb && cb();
    });
};

export const AddEmail = (data,cb) => (dispatch) => {
  dispatch({
    type: types.ADD_EMAIL_REQUEST,
  });
  axios
    .post(`${base_url}/candidate/verify/email/website?url=${key_url}`, data)
    .then((res) => {
      dispatch({
        type: types.ADD_EMAIL_SUCCESS,
        payload: res.data,
      });
      
    
        Swal.fire({
  icon: "success",
  title: "Success",
  text: res.data.candidateInd === false ?
        "Thank you for applying to this position. You will hear from us shortly.":res.data.message,
  timer: 3000,
});
  
      cb && cb(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_EMAIL_FAILURE,
        payload: err,
      });
      cb && cb();
    });
};

export const handleEmailFormModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_EMAIL_FORM_MODAL,
    payload: modalProps,
  });
};

export const getJobCardDetails = (candidateId) => (dispatch) => {
  dispatch({
    type: types.GET_JOB_CARD_REQUEST,
  });
  axios
    .get(`${base_url}/recruitment/publish/website?url=${key_url}`,)

    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_JOB_CARD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_JOB_CARD_FAILURE,
        payload: err,
      });
    });
};

export const setCardData = (name) => (dispatch) => {
  dispatch({
    type: types.SET_CARD_DATA,
    payload: name,
  });
};

export const saveCandidateProcess = (data, cb) => (dispatch) => {
  dispatch({
    type: types.ADD_CANDIDATE_PROCESS_REQUEST,
  });
  axios
    .post(`${base_url}/candidate/save-add/process/website?url=${key_url}`, data)
    .then((res) => {
      dispatch({
        type: types.ADD_CANDIDATE_PROCESS_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.message)
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_CANDIDATE_PROCESS_FAILURE,
        payload: err,
      });
      cb && cb();
    });
};

export const addCustDetails =(data,cb)=>(dispatch)=>{
  dispatch({
    type:types.ADD_CUSTOMER_DETAILS_REQUEST,
  });
  axios.post(`${base_url}/aaddf`,data)
  .then((res)=>{
    dispatch({
      type:types.ADD_CUSTOMER_DETAILS_SUCCESS,
      payload:res.data,
    });
    cb && cb();
  })
  .catch((err)=>{
    dispatch({
      type:types.ADD_CUSTOMER_DETAILS_FAILURE,
      payload:err,
    })
    cb && cb();
  });
};

export const getRolesName = () => (dispatch) => {
  dispatch({
    type: types.GET_ROLES_NAME_REQUEST,
  });
  axios
     .get(`${base_url}/roleType/website?url=${key_url}`, {
    
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ROLES_NAME_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ROLES_NAME_FAILURE,
        payload: err,
      });
    });
};

export const getparsedata = (data) => (dispatch) => {

  
      dispatch({
        type: types.GET_PARSE_SUCCESS,
        payload:data,
      });
  
};

export const uploadJobDocument = (formData, cb) => (dispatch) => {
  dispatch({
    type: types.UPLOAD_JOB_DOCUMENT_REQUEST,
  });
  axios
  .post(`${base_url}/document/website/upload?url=${key_url}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      dispatch({
        type: types.UPLOAD_JOB_DOCUMENT_SUCCESS,
        payload: res.data,
      });
      // message.success(res.data.message)
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.UPLOAD_JOB_DOCUMENT_FAILURE,
        payload: err,
      });
    });
};