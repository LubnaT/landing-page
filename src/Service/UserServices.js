import axios from 'axios';

class UserServices{

    userSignUpAdd(user){
        console.log(user);
        return axios.post('http://localhost:8083/api/signup', user)
    }

    userSignInExist(user){
        console.log(user);
        return axios.post('http://localhost:8083/api/signin', user)
       
    }

    getAllUsers(){
        return  axios.get("http://localhost:8083/api/users")
    }
}
export default new UserServices();