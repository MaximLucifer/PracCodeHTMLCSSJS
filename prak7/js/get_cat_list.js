let formData = new FormData()
async function get_cat_list() {
    formData.append('token', 'тут типа лежит твой уникальный, персональный токен (со всей любовью)')
    fetch('http://127.0.0.1:5000/get_cat_list', {
        method: 'post',
        body: formData
    }).then(response => response.text()).then(data => {
        alert(data)
    })
}