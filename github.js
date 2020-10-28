fetch('https://api.github.com/users/alexjbustillos')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})

.catch(error => {
    console.log(error);
});