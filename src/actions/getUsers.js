import axios from "axios";

const getUsers = async (token) => {
  try{
    const response = await axios.get("http://cognotes.herokuapp.com/users", {
      withCredentials: true,
      params: {
        token
      }
    });
    console.log(response);
    return response;
  } catch (e){
    console.log(e);
    throw e;
  }
  
};

export default getUsers;