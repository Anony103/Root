import axios from 'axios';


export const SendEmail = async ({
  name,
  email,
  subject,
  message,
  setSend,
}) => {
  try {
    const datas = { name, email, subject, message };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};