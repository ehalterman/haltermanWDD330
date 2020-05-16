const body = document.body;
console.log(typeof body);
//two lines below not working. Unsure why
//console.log(body.nodeType);
//console.log(body.nodeName);


for (let i=0; i <document.images.length; i++) {
    //manipulate list of images
}

//why is this returning 0 instead of 2?
console.log(document.getElementsByClassName('pic').length);

console.log(document.querySelectorAll('.pic'));
