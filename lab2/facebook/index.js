document.addEventListener("DOMContentLoaded", () => {
    const logButton = document.getElementById('logo');
    const modalWindow = document.getElementById('window');
    const regis = document.querySelector(".regis");

    // Открытие окна
    function openFunc() {
        regis.style.display = "flex";
    }

    // Закрытие окна
    function closeFunc(event) {
        // Проверка, чтобы закрытие происходило только при клике вне окна
        if (event.target === modalWindow) {
            regis.style.display = "none";
        }
    }

    // Открытие по кнопке логотипа
    logButton.addEventListener("click", openFunc);
    // Закрытие при клике на фоновую область
    modalWindow.addEventListener("click", closeFunc);
});
