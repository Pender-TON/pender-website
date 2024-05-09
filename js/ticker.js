document.addEventListener("DOMContentLoaded", function() {
    const tickers = document.querySelectorAll('.ticker-list');

    tickers.forEach(tickerList => {
        const moveLeft = Math.random() < 0.5; // Рандомизация направления: true для движения влево, false для вправо
        let speed = 1; // Скорость движения в пикселях за кадр
        let currentPosition = 0; // Начальное положение списка

        function animate() {
            currentPosition += moveLeft ? -speed : speed; // Обновляем позицию в зависимости от направления
            tickerList.style.transform = `translateX(${currentPosition}px)`; // Применяем сдвиг

            // Определяем ширину релевантного элемента с учетом margin
            const targetCont = moveLeft ? tickerList.firstElementChild : tickerList.lastElementChild;
            const targetContWidth = targetCont.offsetWidth + parseInt(getComputedStyle(targetCont).marginRight);

            // Проверяем, если элемент полностью вышел за пределы видимой части
            if (moveLeft ? -currentPosition >= targetContWidth : currentPosition >= targetContWidth) {
                if (moveLeft) {
                    tickerList.appendChild(targetCont); // Перемещаем первый элемент в конец списка при движении влево
                    currentPosition += targetContWidth; // Корректируем позицию
                } else {
                    tickerList.insertBefore(targetCont, tickerList.firstChild); // Перемещаем последний элемент в начало списка при движении вправо
                    currentPosition -= targetContWidth; // Корректируем позицию
                }
            }

            requestAnimationFrame(animate); // Повторяем анимацию
        }

        animate(); // Запускаем анимацию для каждого ticker-list
    });
});
