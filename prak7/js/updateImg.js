async function updateImg() {
    const randomParam = Math.random();
    let imageUrl;
    imageUrl = `http://127.0.0.1:5000/get_cat?random=${randomParam}`;

    document.getElementById('catImage').src = imageUrl;
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(imageElement);
}

// Установка интервала для выполнения запроса каждые 5 секунд (5000 миллисекунд)
setInterval(updateImg, 3000);

// Выполнение запроса при загрузке страницы
document.addEventListener('DOMContentLoaded', updateImg);