/*
const form = document.getElementsByTagName('form')[0];
//not sure why line below isn't working
const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

input.addEventListener('change', () => alert('changed'), false);
*/

const form = document.forms['search'];
form.addEventListener('submit', search, false);

function search() {
    alert('Form Submitted');
}