function fetchSimpsonJSON(){
    const simpsonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?${count=simpsonId}`;
    axios.get(url)
        .then(function(response){
            return response.data; //instead of response.json() with fetch
        })
        .then (function(simpson){
            console.log('image URL encoded from JSON:', simpson[0]);
        
        const simpsonHtml = `
        <p><strong>${simpson[0].quote}</strong>
        <img src="${simpson[0].image}"/></p>`;

        document.querySelector('#simpson').innerHTML = simpsonHtml;

        });
}

fetchSimpsonJSON();