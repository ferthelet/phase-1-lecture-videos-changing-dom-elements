// js

function updateWeekDay(day) {
    let h4 = document.querySelector('h4');
    h4.innerHTML = `
        <h1>${day}</h1>
        <p> TGIF </p>
        `
}

function updateWeekDayOld(day) {
    let h4 = document.querySelector('h4');
    h4.innerText = day.toLowerCase();
    h4.id = day;
    h4.className = 'title';
    h4.style.color = 'blue';
}

updateWeekDay('Friday');

function addImage(img_url) { 
    let img = document.querySelector('img');
    img.src = img_url;
}

addImage("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg");

