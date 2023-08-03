let url = "http://172.16.1.143:1952";
  
  const apiConfig = {

    signUp: `${url}/api/v1/user/signup`,
    forgotPassword:`${url}/api/v1/user/forgotPassword`,
    verifyOTP: `${url}/api/v1/user/verifyOTP`,
    login:`${url}/api/v1/user/login`,
    resendOTP:`${url}/api/v1/user/resendOTP`,
    resetPassword:`${url}/api/v1/user/resetPassword`,

   

  };
  export default apiConfig;