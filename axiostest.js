import axios from "axios";

const fetchApi = async () => {
    try {
        const body = await axios.get('http://3.37.245.109:3000/room/leagueoflegends');
        if (body.status) {
            console.log(body.data.status);
            console.log(body.data.data);
        }
    } catch(error) {
        console.error(error);
    }
};

export default fetchApi;
