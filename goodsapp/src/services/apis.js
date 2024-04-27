const BASE_URL=process.env.REACT_APP_BASE_URL

export const categories={
    CATEGORIES_API:BASE_URL+"/course/showAllCategories",
};

export const userendpoints={
    LOGIN_API:BASE_URL+"/user/login",
    SIGNUP_API:BASE_URL+"/user/signup",
    SENDOTP_API: BASE_URL + "/user/sendotp",
   
    CHANGE_PASSWORD_API: BASE_URL + "/user/changepassword",
}

export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
    GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
  }


  export const productEndpoints = {
    GET_ALL_COURSE_API: BASE_URL + "/product/getallproducts",
    COURSE_DETAILS_API: BASE_URL + "/prduct/getproductDetails",

    COURSE_CATEGORIES_API: BASE_URL + "/product/showAllCategories",
    CREATE_COURSE_API: BASE_URL + "/product/createproduct",
   
  
    DELETE_COURSE_API: BASE_URL + "/product/deleteproduct",
    // GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    //   BASE_URL + "/course/getFullCourseDetails",
    CREATE_RATING_API: BASE_URL + "/product/createRating",
  }
  
  export const ratingsEndpoints = {
    REVIEWS_DETAILS_API: BASE_URL + "/product/getallratings",
  }
  export const catalogData = {
    CATALOGPAGEDATA_API: BASE_URL + "/product/getCategoryPageDetails",
  }


  export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/user/contact",
  }
  

  export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateprofilepic",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateprofile",
    
    UPDATE_EWS_CERTIFICATE: BASE_URL + "/profile/updateewspic",
    RESETPASSTOKEN_API: BASE_URL + "/profile/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/profile/reset-password",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
  }


