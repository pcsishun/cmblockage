function showData(data){
    // console.log(data)
    let gitdata = document.querySelector('#git-api-data')
    data.forEach(element => {
        // console.log(element)
        let tagP = document.createElement('p');
        tagP.innerText = `User: ${element.login}`;
        // console.log(tagP.innerText)
        // console.log(tagP)
        gitdata.appendChild(tagP);
    });
}


fetch("https://api.github.com/users")
.then(res => res.json())
.then(data => {
    const data_limite = data.slice(0,5);
    showData(data_limite)
})