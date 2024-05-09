document.addEventListener("DOMContentLoaded", function() {
    const values = {
        supply: '1000000000',
        lp: '60%',
        tv: '9%',
        presale: '20%',
        marketing: '3%',
        liq: '5%',
        pd: '3%'
    };

    // Функция для форматирования чисел с точками как разделителями для 'supply'
    function formatNumber(value, type) {
        if (type === 'supply') {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        } else {
            return parseInt(value).toLocaleString('en-US') + '%';
        }
    }

    // Функция для анимации значений
    function animateValue(obj, start, end, duration, type) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const multiplier = type === 'supply' ? 1000000 : 1; // Ускоряем анимацию для 'supply'
        const timer = setInterval(() => {
            current += increment * multiplier;
            if ((increment > 0 && current > end) || (increment < 0 && current < end)) {
                current = end; // Убедимся, что мы точно достигли конечного значения
            }
            obj.textContent = formatNumber(current, type);
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime / multiplier);
    }

    // IntersectionObserver для запуска анимации
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
                const digit = entry.target;
                const type = digit.getAttribute('ass-timer-type');
                const finalValue = values[type].replace(/[%,]/g, '');
                const startValue = 0;
                const duration = 2000; // Длительность анимации в миллисекундах
                animateValue(digit, startValue, parseInt(finalValue), duration, type);
                observer.unobserve(digit);
            }
        });
    }, { threshold: 0.8 });

    // Добавляем элементы к наблюдателю
    document.querySelectorAll('.ass-timer-digit').forEach(digit => {
        observer.observe(digit);
    });
});
