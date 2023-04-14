import charities from "./charities"

// console.log(charities);

const list = document.querySelector('.support-list');
// const item ='<li class="support-item"> ссылка на фонд <a class="support-link" href=""></a></li>';

// console.log(item);

// list.innerHTML += item;

const html = charities.map((element, index) => {
    return {
        ...element,
        index: (index+1).toString().padStart(2, '0')
    }
}).map((element) => {
    return `<li class="support-item">
        <span class="support-index">${element.index}</span>     
        <a class="support-link" href="${element.url}" target="_blank">
            <img
                srcset="${element.img.normal} 1x, ${element.img.retina} 2x"
                src="${element.img.normal}" alt="${element.title}">
        </a>             
    </li>`;
});

list.innerHTML = html.join('');
console.log(html);


// const str = charities.map((element, index) => {
//     return '<li class="support-item"> ссылка на фонд <a class="support-link" href=""></a></li>'
// });

// console.log(str);