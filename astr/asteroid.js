let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date={0}&end_date={1}&api_key=SIr7JuFHbz0Kphrd1s1OEND6vSPBrliogAvpKvJj';
const xhr = new XMLHttpRequest();


let code1 = "{0}";

function start(){
    let date = document.getElementById('date');
    date.value = '2022-05-02';
    main();
}

function main(){
    let date = document.getElementById('date');
    let d = date.value;
    if(d == null){
        alert('Enter date');
    }else{
    console.log(d);
    url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + d + '&end_date=' + d + '&api_key=SIr7JuFHbz0Kphrd1s1OEND6vSPBrliogAvpKvJj'
    console.log(url);
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
        cont = document.getElementById('cont');
        cont.innerHTML = '';
        n = xhr.response['element_count'];
        for (let i = 0; i < n; i++){
            let name = xhr.response['near_earth_objects'][d][i]['name'];
            let maxd = parseFloat(xhr.response['near_earth_objects'][d][i]['estimated_diameter']['meters']['estimated_diameter_max']).toFixed(3);
            let mind = parseFloat(xhr.response['near_earth_objects'][d][i]['estimated_diameter']['meters']['estimated_diameter_min']).toFixed(3);
            let dang = xhr.response['near_earth_objects'][d][i]['is_potentially_hazardous_asteroid'];
            let speed = parseFloat(xhr.response['near_earth_objects'][d][i]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour']).toFixed(3);
            console.log(xhr.response);
            let dist = parseFloat(xhr.response['near_earth_objects'][d][i]['close_approach_data'][0]['miss_distance']['kilometers']).toFixed(3);
            cont.innerHTML += createTemplate(name, maxd, mind, dang, speed, dist); 
        }
    }
    xhr.send();
}
}


function createTemplate(name, maxdiameter, mindiameter, dangerous, speed, sdistance){
    div = '<div class="astr">Name: <name>'+ name + '<name><br>Max diameter: <maxdiameter>' + maxdiameter + '</maxdiameter> m<br>Min diameter: <mindiameter>' + mindiameter + '</mindiameter> m<br>Dangerous: <dangerous>' + dangerous + '</dangerous><br>Speed: <speed>' + speed + '</speed> km/h<br>Span distance: <sdistance>' + sdistance + '</sdistance> km </div>';
    return div   
}