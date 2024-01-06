import axios from 'axios';

class UserServices{

    userSignUpAdd(user){
        return axios.post('/api/signup', user)
    }

    userSignInExist(user){
        return axios.post('/api/signin', user)
    }
}
export default new UserServices();