import axios  from 'axios';
export const login = async (email, password) => {

     try {
      const res =await  axios({
        method: 'POST',
        url:'http://127.0.0.1:3000/api/v1/users/login',
        data:{
            email,
            password
        }
    });
    console.log(res);
} catch(err){
    console.log(err);
}
};

