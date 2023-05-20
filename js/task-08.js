// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const loginForm = document.querySelector('.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    // Властивість elements DOM-елемента форми містить об'єкт з посиланнями на усі її елементи, які мають атрибут name.
    const {
        elements: { email, password }
    } = event.currentTarget;

    // отримуємо значення полів, звертаючись до email.value і password.value.
    if (email.value === "" || password.value === "") {
        return alert("All fields are to be filled!");
    } else {
        const credentials = {};
        credentials.email = email.value;
        credentials.password = password.value;
        console.log(credentials);
        event.currentTarget.reset();
    };
};

loginForm.addEventListener('submit', handleSubmit);