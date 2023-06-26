<script>
  document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Перешкоджаємо стандартній поведінці форми

    // Отримуємо значення полів форми
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").value;

    // Створюємо новий коментар
    var comment = document.createElement("div");
    comment.className = "comment";
    comment.innerHTML = "<strong>" + name + ":</strong> " + content;

    // Додаємо новий коментар до блоку "comments-container"
    var commentsContainer = document.getElementById("comments-container");
    commentsContainer.appendChild(comment);

    // Очищаємо поля форми
    document.getElementById("name").value = "";
    document.getElementById("content").value = "";
  });

  function changePage(page) {
    const container = document.querySelector('.container');
    const buttons = document.querySelectorAll('.page-btn');

    // Змінюємо активну сторінку
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[page - 1].classList.add('active');

    // Обчислюємо відстань для переходу до відповідної сторінки
    const scrollDistance = (page - 1) * (container.offsetWidth + 20); // Ширина блоку + відступ

    // Здійснюємо перехід до відповідної сторінки
    container.scrollTo({
      left: scrollDistance,
      behavior: 'smooth'
    });
  }
</script>

    