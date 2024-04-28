document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    // Hiển thị thông điệp trên trang web khi nhấn vào nút "Đồng ý"
    document.querySelector('.container').innerHTML = '<h2>Chúng ta sẽ mãi mãi bên nhau! 💖</h2>';
});
