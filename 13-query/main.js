const objParameters = {
    search: "Name",
    old: 22,
    example: 'something'
}

let url = 'https://yandex.com/';

function fillSearchQuery(obj, link) {
    let count = 0;
		link += '?';
    for(const key of Object.keys(obj)) {
        count++
        link += `${key}=${obj[key]}`;
        if(count < Object.keys(obj).length) {
            link += '&';
        }
    }
    return link;
}

url = fillSearchQuery(objParameters, url);
console.log(url);