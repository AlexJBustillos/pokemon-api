const container = document.querySelector('.container');


fetch('https://api.github.com/users/alexjbustillos')
.then(response => {
    return response.json();
})
.then(githubData => {
    const alexObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(alexObj);
    // console.log(githubData);
    const newElement = document.createElement('p');
    newElement.textContent = alexObj.name;
    container.appendChild(newElement);

})

.catch(error => {
    console.log(error);
});