const button = document.getElementById("btn");
console.log(button);

button.addEventListener("click", function() {
    let input = document.getElementById('wordInput').value;

    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const Data = data;
        console.log(Data, "Data");
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; 
        let htmlContent = ''; 
        Data.forEach((element) => {
            const meaningsArray = element.meanings;
            meaningsArray.forEach((meaning) => {
                htmlContent += `<h3>${meaning.partOfSpeech}</h3>`;
                meaning.definitions.forEach((definition) => {
                    htmlContent += `<p>${definition.definition}</p>`;
                });
            });
        });
        resultsDiv.innerHTML = htmlContent; 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


















// const button = document.getElementById("btn");
// console.log(button);

// button.addEventListener("click", function() {
//     let input = document.getElementById('wordInput').value;

//     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         const Data = data;
//         console.log(Data, "Data");
//         const resultsDiv = document.getElementById('results');
//         resultsDiv.innerHTML = ''; 
//         let htmlContent = ''; 
//         Data.forEach((element) => {
//             const meaningsArray = element.meanings;
//             meaningsArray.forEach((meaning) => {
//                 htmlContent += `<h3>${meaning.partOfSpeech}</h3>`;
//                 meaning.definitions.forEach((definition) => {
//                     htmlContent += `<p>${definition.definition}</p>`;
//                 });
//             });
//         });
//         resultsDiv.innerHTML = htmlContent; 
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });


