import axios from "axios";

const get:Function = (url:string) => {
    axios.get(url)
        .then(function (response) {
            // sukces
            console.log(response);
        })
        .catch(function (error) {
            // error
            console.log(error);
        })
        .then(function () {
            // loading bar boolean
        });
};

export default get;