import fetch from "node-fetch";

const fetchApi = 
fetch('http://3.37.245.109:3000/room/leagueoflegends')
.then(res => {
    console.log(res);
    return res.json();
})
.then(json => {
    const length = Object.keys(json.data).length;
    console.log(Object.keys(json.data).length)
    for (var i=0; i<length; i++) {
        console.log(json.data[i].code);
    }
    // return data;
})
.catch(err => {
    console.log('Fetch error', err);
});

export default fetchApi;
