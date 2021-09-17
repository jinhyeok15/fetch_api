import fetch from "node-fetch";

const fetchApi = () => {
    fetch('http://3.37.245.109:3000/room/leagueoflegends')
    .then(res => {
        // console.log(res);
        return res.json();
    })
    .then(json => {
        // console.log(json.data)
        console.log(json.data);
    })
    .catch(err => {
        console.log('Fetch error', err);
});
};

export default fetchApi;