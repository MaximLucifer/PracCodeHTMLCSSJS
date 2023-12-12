async function get_cat() {
    let data = new FormData(get_cat_form)
    data.append('token', 'тут типа лежит твой уникальный, персональный токен (со всей любовью)')
    // formData.append('code', '0')
    fetch('http://127.0.0.1:5000/get_cat', {
        method: 'post',
        body: data
    }).then(response => response.blob()).then(data => {
        const imageUrl = URL.createObjectURL(data);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        document.getElementById("container").appendChild(imageElement)
    })
}
