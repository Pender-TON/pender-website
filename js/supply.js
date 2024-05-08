    // function updateSupplyBar(percent) {
    //     const spanElement = document.querySelector('.supply-bar-line-text'); // Упрощённый селектор
    //     const barInsideElement = document.querySelector('.supply-bar-line-inside');
    //     const barLineElement = document.querySelector('.supply-bar-line');

    //     if (!spanElement || !barInsideElement || !barLineElement) {
    //         console.error('One of the elements was not found in the DOM.');
    //         return;
    //     }

    //     // Обновляем текст и ширину в соответствии с процентом
    //     spanElement.textContent = percent + '%';
    //     barInsideElement.style.width = percent + '%';

    //     // Управляем классами в зависимости от значения процента
    //     if (percent > 17) {
    //         spanElement.classList.remove('sblt-start');
    //     } else {
    //         if (!spanElement.classList.contains('sblt-start')) {
    //             spanElement.classList.add('sblt-start');
    //         }
    //     }

    //     if (percent > 75) {
    //         barInsideElement.classList.add('sbli-finish');
    //         barLineElement.classList.add('sbl-finish');
    //     } else {
    //         barInsideElement.classList.remove('sbli-finish');
    //         barLineElement.classList.remove('sbl-finish');
    //     }
    // }

    // // Устанавливаем начальное значение percent вручную в коде
    // var percent = 1; // Установите это значение по желанию
    // updateSupplyBar(percent);




    function updateSupplyBar(percent) {
        const spanElement = document.querySelector('.supply-bar-line-text');
        const barInsideElement = document.querySelector('.supply-bar-line-inside');
        const barLineElement = document.querySelector('.supply-bar-line');

        if (!spanElement || !barInsideElement || !barLineElement) {
            console.error('One of the elements was not found in the DOM.');
            return;
        }

        // Плавное изменение числа в span
        let currentPercent = 0;
        const interval = setInterval(() => {
            if (currentPercent <= percent) {
                spanElement.textContent = currentPercent + '%';
                barInsideElement.style.width = currentPercent + '%';
                currentPercent++;
            } else {
                clearInterval(interval);
            }
        }, 40); // 20 миллисекунд для каждого шага инкремента

        // Управление классами после завершения анимации
        setTimeout(() => {
            if (percent > 17) {
                spanElement.classList.remove('sblt-start');
            } else {
                if (!spanElement.classList.contains('sblt-start')) {
                    spanElement.classList.add('sblt-start');
                }
            }

            if (percent > 75) {
                barInsideElement.classList.add('sbli-finish');
                barLineElement.classList.add('sbl-finish');
            } else {
                barInsideElement.classList.remove('sbli-finish');
                barLineElement.classList.remove('sbl-finish');
            }
        }, 2000); // Совпадает с продолжительностью анимации width
    }

    // Intersection Observer setup
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = 10; // Установка начального значения percent
                updateSupplyBar(percent); // Запуск анимации
                observer.unobserve(entry.target); // Перестать наблюдать после запуска
            }
        });
    }, {
        threshold: 0.8 // Элемент должен быть виден на 50% перед началом анимации
    });

    // Наблюдаем за элементом supply-container
    const supplyContainer = document.querySelector('.supply-container');
    observer.observe(supplyContainer);





// function updateSupplyBar(percent) {
//     const spanElement = document.querySelector('.supply-bar-line-text');  // Упростил селектор для надёжности
//     const barInsideElement = document.querySelector('.supply-bar-line-inside');
//     const barLineElement = document.querySelector('.supply-bar-line');

//     if (!spanElement || !barInsideElement || !barLineElement) {
//         console.error('One of the elements was not found in the DOM.');
//         return;
//     }

//     // Обновляем текст и ширину в соответствии с процентом
//     spanElement.textContent = percent + '%';
//     barInsideElement.style.width = percent + '%';

//     // Управляем классами в зависимости от значения процента
//     if (percent > 17) {
//         spanElement.classList.remove('sblt-start');
//     } else {
//         if (!spanElement.classList.contains('sblt-start')) {
//             spanElement.classList.add('sblt-start');
//         }
//     }

//     if (percent > 75) {
//         barInsideElement.classList.add('sbli-finish');
//         barLineElement.classList.add('sbl-finish');
//     } else {
//         barInsideElement.classList.remove('sbli-finish');
//         barLineElement.classList.remove('sbl-finish');
//     }
// }

// // Вызовите эту функцию в консоли для проверки различных значений процента
// window.updateSupplyBar = updateSupplyBar;
