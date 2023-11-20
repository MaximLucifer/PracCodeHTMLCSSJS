async function get_cat() {
    formData.append('token', 'тут типа лежит твой уникальный, персональный токен (со всей любовью)')
    formData.append('code', '102')
    fetch('http://127.0.0.1:5000/get_cat', {
        method: 'post',
        body: formData
    }).then(response => response.blob()).then(data => {
        const imageUrl = URL.createObjectURL(data);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.id = 'catImage';
        document.getElementById("container").appendChild(imageElement)
    })
}
