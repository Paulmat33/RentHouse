import  api  from "./base";
// import axios from "axios";



export const signupActionTenant = (data) => {
  return api.post("/auth/signup/tenant", data);
};

export const signupActionLandlord = (data) => {
  return api.post("/auth/signup/landlord", data);
};

export const loginAction = (data) => {
  return api.post("/auth/login", data);
};
export const createProperty = (propertyData, token) =>{
  return api.post("/properties", propertyData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}