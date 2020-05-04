
let checked = document.querySelector('.checked'); //Галочка в промо
let checkbox = document.getElementById('checkbox'); // Чекбокс в промо
let checkedFooter = document.querySelector('.checked_footer'); //Галочка в подвале
let checkboxFooter = document.getElementById('checkbox_footer'); // Чекбокс в подвале

checkbox.onclick = function() { //Функция для проставления галочки в промо
    if (checkbox.checked == true){
        checked.style.display='block';
      } else {
        checked.style.display='none';
    }
}

checkboxFooter.onclick = function() { //Функция для проставления галочки в подвале
    if (checkboxFooter.checked == true){
        checkedFooter.style.display='block';
      } else {
        checkedFooter.style.display='none';
    }
}
