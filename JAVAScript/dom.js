let nam ='Harry';
let name2 = 'Hemant';


// let nam ='Harry';
    // let name2 = 'Hemant';
    // document.getElementsByTagName('h1')[1].innerHTML = nam;
    // document.getElementsByTagName('h1')[2].innerHTML = name2;
    // document.querySelector('h1').innerHTML = name2;
    // document.querySelector('.h1').innerHTML = name2;
    // document.querySelector('#h1').innerHTML = name2;
    // document.querySelectorAll('h1 ')[0].innerHTML = nam;
    // let names = document.querySelectorAll('h1 ')[3];
    // names.innerHTML = nam;
    // names.style.color = 'red';

    
    
    // const head = document.createElement('h1');
    // console.log(head);
    // const txt = document.createTextNode("Hello duniya")
    // console.log(txt)
    // head.appendChild(txt);
    // document.body.appendChild(head); 

    // const img = document.createElement('img');
    // console.log(img);
    // const alt = document.createAttribute('alt');
    // console.log(alt);
    // alt.value='404 not found';
    // img.setAttribute(alt);
    
    document.addEventListener('click',function run(){
        document.getElementsByTagName('h1').style.backgroundColor='Black';
    })
    
document.getElementsByTagName('h1')[0].innerHTML = nam;

function img(){
    document.getElementsByTagName('img')[0].style.width='500px';
    document.getElementsByTagName('img')[0].style.height='3 00px';
}