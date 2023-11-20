async function get_token() {
    fetch('http://127.0.0.1:5000/login', {
        method: 'post'
    }).then(response => response.text()).then(data => {
        alert(data);
    })
}