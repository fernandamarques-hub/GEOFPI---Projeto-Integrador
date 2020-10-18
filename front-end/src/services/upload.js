import api from './api';

export const upload = async (formdata) => {
    try{
        const response = await api.post('/shpRead', formdata);
        console.log(response);
        return response;
      }
      catch (err) {
          console.log(err);
          return err;
      }
}