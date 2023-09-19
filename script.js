const { writeFile } = require("fs");
const axios = require("axios");

axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
        const json = response.data;
        writeFile("data.json", JSON.stringify(json), function (err) {
            if (err) {
                console.error("Failed");
            } else {
                console.log("Done");
            }
        });
    })
    .catch((error) => {
        console.error("Error :", error);
    });