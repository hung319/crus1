document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});
document.getElementById('yes-btn').addEventListener('click', function() {
    // Hiển thị một thông báo
    // alert('Cảm ơn bạn đã đồng ý! 💖');

    // Hoặc bạn có thể hiển thị một thông điệp trên trang web
    document.querySelector('.container').innerHTML = '<h2>Chúng ta sẽ mãi mãi bên nhau! 💖</h2>';

    // Hoặc chuyển hướng người dùng đến trang web khác
    // window.location.href = 'https://www.example.com';
});
