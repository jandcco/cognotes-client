import axios from "axios";

const getUsers = async (token) => {
  console.log('cookies::::::', document.cookie)
  try{
    const response = await axios.get("http://localhost:3001/users", {
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