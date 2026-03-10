
fetch("https://meowfacts.herokuapp.com/").then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.data[0]);
})