const url = "https://api.nasa.gov/planetary/apod?api_key=SIr7JuFHbz0Kphrd1s1OEND6vSPBrliogAvpKvJj&count=1";
const url1 = "https://api.countapi.xyz/update/ichernyy/space?amount=1";
const xhr = new XMLHttpRequest();

function main(){
    //xhr.open('GET', url1);
    //xhr.send()
    console.log('start');
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.onload = () => {
        let img = document.getElementById('img');
        let titl = document.getElementById('titl');
        let ops = document.getElementById('op');
        let date = document.getElementById('date');
        console.log(xhr.response);
        titl.innerHTML = xhr.response[0].title;
        ops.innerHTML = xhr.response[0].explanation;
        date.innerHTML = xhr.response[0].date;
        img.src = xhr.response[0].hdurl;
    }

    xhr.onerror = () => {
        console.log(xhr.response);
    }

    xhr.send()
}
