const btn = document.querySelector('button')
import addNewItem from './newItem.js'

const date = document.getElementById('appDate');
const d = new Date();


date.textContent = d.toDateString();;

btn.addEventListener('click', addNewItem ) 




