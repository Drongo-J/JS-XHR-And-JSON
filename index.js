// let jsonText = `
//     {
//         "students":[
//             {"name":"Akif", "surname":"Akifli"},
//             {"name":"Leyla", "surname":"Eliyeva"},
//             {"name":"Memmed", "surname":"Memmedli"},
//             {"name":"Axmed", "surname":"Axmedlinsky"}
//         ]
//     }
// `;

// let h1 = document.getElementById('demo');
// let obj = JSON.parse(jsonText);
// console.log(obj);

// // h1.innerHTML = obj.students[0].name;

// obj.students.forEach(s => {
//     h1.innerHTML += s.name+" - ";
//     h1.innerHTML += s.surname+"</br>";
// });

// let h1 = document.getElementById('demo');

// let student = {
//     "name": "John",
//     "surname": "Johnlu",
//     "age": 25,
//     "scores": [100, 99, 98]
// }

// let jsonText = JSON.stringify(student);
// // console.log(jsonText);
// h1.innerHTML = jsonText;

// let h1 = document.getElementById('demo');

// async function MyFunctionAsync() {
//     throw "Some Error";
//     return 1;
// }

// async function ForCallAsync() {
//     let result = await MyFunctionAsync();
//     h1.innerHTML = result;
// }

// ForCallAsync().then(() => {
//     setTimeout(() => {
//         console.log("Completed callback");
//     }, 2000);
// }).catch((e) => {
//     console.log(`Error : ${e}`);
// }).finally(() => {
//     console.log("End");
// }); 

// let myFunc=(async(e) =>{

// });

// let h1 = document.getElementById('demo');

// async function getCarsCall() {
//     let url = "http://127.0.0.1:5500/api/cars.json";
//     const xhr = new XMLHttpRequest
//     xhr.open('GET', url, true);
//     xhr.onload = () => {
//         setTimeout(() => {
//             setTimeout
//             const data = JSON.parse(xhr.responseText);
//             console.log(data);
//             h1.innerHTML = xhr.responseText;
//         }, 5000);
//     }
//     xhr.send();
// }

// function getCars() {
//     getCarsCall()
//         .then(() => {
//             h1.innerHTML += "</br> <h2 style='color:green;'>Success</h2>";
//         })
//         .catch((e) => {
//             h1.innerHTML = e;
//         })
//         .finally(() => {
//             console.log('ended');
//         });
// }


let h1 = document.getElementById('demo');
let content = "";

async function GetMovies() {
    let movie = document.getElementById('movie').value;
    let url = `http://www.omdbapi.com/?apikey=d5254632&s=${movie}&plot=full`;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    let section = document.getElementById('result');
    xhttp.onload = () => {
        const obj = JSON.parse(xhttp.responseText);
        obj.Search.forEach(m => {
            content = `
        <div class="card m-5" style="width: 18rem; display: flex; flex-wrap:wrap;">
            <img class="card-img-top" src="${m.Poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <p class="card-text">${m.Year}</p>
                <a href="#" class="btn btn-primary">Watch Movie</a>
            </div>
            </div>
        `;

            console.log(obj.Search);

            section.innerHTML += content;
        });

    }
    xhttp.send();
}

async function GetMoviesCall() {
    await GetMovies();
}

function getCarsTxt() {
    const url = "http://127.0.0.1:5500/api/car.txt";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function(){
        // for txt files
        let data = this.response;
        h1.innerHTML = data;
    };
    xhttp.send()
}