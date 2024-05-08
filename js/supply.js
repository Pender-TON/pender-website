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

        // Управление классами
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
        }, 2000); // Задержка совпадает с продолжительностью анимации width
    }

    // Начальное значение для анимации
    var percent = 10; // Установите значение по желанию
    updateSupplyBar(percent);




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
