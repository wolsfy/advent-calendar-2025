const tasks = {
    // ВАЖНО: Начинаем с 8 декабря
    8: {
        title: "Задание на 8 декабря: 😋 Секретное признание",
        task: "Выбери одну из подруг в чате и напиши ей в личные сообщения один искренний комплимент или поблагодари за что-то, о чем не говорила. Потом в общем чате напиши 'Миссия выполнена'.",
    },
    9: {
        title: "Задание на 9 декабря: 🎶 Музыкальная пауза",
        task: "Поделись в чате треком, который был для тебя главным в этом декабре.",
    },
    10: {
        title: "Задание на 10 декабря: 🖼️ Окно охуенное",
        task: "Сделай фото из окна с самым красивым (или странным) видом.",
    },
    11: {
        title: "Задание на 11 декабря: 😴 Экстра-Чилл",
        task: "Сегодня делать ничего не нужно – просто отдохни :)",
    },
    12: {
        title: "Задание на 12 декабря: 🛒 Виш-лист",
        task: "Поделись ссылкой на вещь, которую ты давно хочешь, но не покупаешь.",
    },
    13: {
        title: "Задание на 13 декабря: 🧦 Футфетиш",
        task: "Сфотографируй свою любимую пару носков.",
    },
    14: {
        title: "Задание на 14 декабря: 🖼️ Мой внутренний кринж",
        task: "Создай коллаж из трех случайных фотографий из галереи (не переделывай!)",
    },
    15: {
        title: "Задание на 15 декабря: 🍦 Дело вкуса",
        task: "Придумай новый, смешной вкус мороженого.",
    },
    16: {
        title: "Задание на 16 декабря: ❓",
        task: "Какой вопрос ты бы задала Новому 2026 году?",
    },
    17: {
        title: "Задание на 17 декабря: 🏠 Домашний Уют",
        task: "Покажи свой любимый уголок дома, который дарит чувство покоя.",
    },
    18: {
        title: "Задание на 18 декабря: 💰 Кто хочет стать миллионером?",
        task: "Расскажи, на что потратишь 'виртуальный миллион рублей', если бы у тебя он, конечно, был.",
    },
    19: {
        title: "Задание на 19 декабря: 📸 В моменте",
        task: "Сфотографируй 'то, что ты видишь прямо сейчас'.",
    },
    20: {
        title: "Задание на 20 декабря: 😅",
        task: "Изобрази эмодзи-последовательностью свой день.",
    },
    21: {
        title: "Задание на 21 декабря: 🛑",
        task: "Какое место ты ненавидишь посещать (банк, почта, стоматолог, работа)?",
    },
    22: {
        title: "Задание на 22 декабря: 🛠️ Бабота: странный артефакт",
        task: "Назови самый странный предмет, который есть у тебя на работе.",
    },
    23: {
        title: "Задание на 23 декабря: 🛍️ Обзор покупо4ек чееек",
        task: "Назвать самый странный (или самый полезный) предмет, который вы купили в этом году.",
    },
    24: {
        title: "Задание на 24 декабря: 🎅 КиноТерапия",
        task: "Напиши свой любимый новогодний фильм/мультфильм/видеоролик/рекламу и т.д.",
    },
    25: {
        title: "Задание на 25 декабря: 😋 Вкусно и точка",
        task: "Сфотографирую свою любимую еду, которую ты покупаешь только перед Новым годом или Рождеством.",
    },
    26: {
        title: "Задание на 26 декабря: 🏝️ Место для нас",
        task: "Поделись местом (фото, описание), куда бы ты хотела пригласить всех нас, чтобы провести там время вместе. Напиши почему именно там.",
    },
    27: {
        title: "Задание на 27 декабря: 😂 Мемная папка",
        task: "Поделись самым смешным мемом, который ты сохранила недавно.",
    },
    28: {
        title: "Задание на 28 декабря: 🎨 Проективная методика",
        task: "Изобрази уходящий 2025 год в виде какого-либо рисунка. Расскажи, почему этот образ суммирует год.",
    },
    29: {
        title: "Задание на 29 декабря: 🧹 Чистка 2025",
        task: "Назови то, что ты хотела бы оставить в 2025 году (с чем не хотелось бы идти в новый).",
    },
    
    // СПЕЦИАЛЬНЫЕ ФИНАЛЬНЫЕ ЗАДАНИЯ
    30: {
        title: "Задание на 30 декабря: 🎨",
        task: "Нарисуй ожидаемый 2026 в виде какого-либо образа (животного, растения, предмета и т.д.). Опубликуй рисунок и объясни, почему ты выбрала именно этот 'Талисман-картошку'. <br><br> <img src='image_2b8d16.jpg' alt='Кот под елкой' style='width: 100%; max-width: 400px; border-radius: 8px; margin-top: 15px;'>",
    },
    31: {
        title: "Задание на 31 декабря: 💌 Новогодняя открытка",
        task: "Отправь свою самую любимую фотографию этого года",
    }
};

const FIRST_DAY = 8;
const LAST_DAY = 31;
const TOTAL_DAYS = LAST_DAY - FIRST_DAY + 1;

// ========== ЭФФЕКТ ПАДАЮЩЕГО СНЕГА ==========
function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        
        const size = Math.random() * 0.8 + 0.5;
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.cssText = `
            left: ${startPosition}%;
            font-size: ${size}em;
            animation-duration: ${animationDuration}s;
            animation-delay: ${animationDelay}s;
            opacity: ${opacity};
        `;
        
        snowContainer.appendChild(snowflake);
    }
}

// ========== ЭФФЕКТ МЕРЦАЮЩЕЙ ГИРЛЯНДЫ ==========
function createChristmasLights() {
    const lightsContainer = document.createElement('div');
    lightsContainer.className = 'lights-container';
    document.body.appendChild(lightsContainer);

    const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 20; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        
        const color = colors[i % colors.length];
        const position = (i / 20) * 100;
        const animationDelay = Math.random() * 2;
        
        light.style.cssText = `
            left: ${position}%;
            background-color: ${color};
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
            animation-delay: ${animationDelay}s;
        `;
        
        lightsContainer.appendChild(light);
    }
}

// ========== ПРОГРЕСС-БАР И ЗАМОЧКИ ==========
function initProgress(calendarDays) {
    const progressText = document.getElementById('progress-text');
    const progressPercent = document.getElementById('progress-percent');
    const progressFill = document.getElementById('progress-fill');

    const openedDays = new Set(JSON.parse(localStorage.getItem('openedDays') || '[]'));

    const updateProgressUI = () => {
        const openedCount = openedDays.size;
        const percent = Math.round((openedCount / TOTAL_DAYS) * 100);

        if (progressText) {
            progressText.textContent = `Открыто дней: ${openedCount} из ${TOTAL_DAYS}`;
        }
        if (progressPercent) {
            progressPercent.textContent = `${percent}%`;
        }
        if (progressFill) {
            progressFill.style.width = `${percent}%`;
        }
    };

    const updateDayLockState = () => {
        const now = new Date();
        const currentDay = now.getDate();
        const currentMonth = now.getMonth() + 1;

        console.log('Текущая дата:', currentDay, 'декабря');

        calendarDays.forEach(button => {
            const day = parseInt(button.getAttribute('data-day'));
            const isAvailable = currentMonth === 12 && day >= FIRST_DAY && day <= currentDay;
            const isOpened = openedDays.has(day);

            // Удаляем все классы состояния
            button.classList.remove('day-locked', 'day-opened');

            if (isOpened) {
                button.classList.add('day-opened');
                console.log(`День ${day}: открыт`);
            } else if (!isAvailable) {
                button.classList.add('day-locked');
                console.log(`День ${day}: заблокирован`);
            } else {
                console.log(`День ${day}: доступен`);
            }
        });
    };

    updateProgressUI();
    updateDayLockState();

    return {
        openedDays,
        updateProgressUI,
        updateDayLockState,
        save() {
            localStorage.setItem('openedDays', JSON.stringify(Array.from(openedDays)));
        }
    };
}

// ... Основная логика календаря ...
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    createChristmasLights();
    
    const calendarDays = document.querySelectorAll('.calendar-day');
    const modal = document.getElementById('task-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalTask = document.getElementById('modal-task');

    const progress = initProgress(calendarDays);

    const openTask = (day) => {
        const taskData = tasks[day];
        if (taskData) {
            modalTitle.textContent = taskData.title;
            modalTask.innerHTML = taskData.task; 
            modal.style.display = "block";

            const numericDay = parseInt(day);
            if (!progress.openedDays.has(numericDay)) {
                progress.openedDays.add(numericDay);
                progress.save();
                progress.updateProgressUI();
                progress.updateDayLockState();
            }
        } else {
            alert("Задание для этого дня пока не готово! Создатель забыл его добавить. 😉");
        }
    };

    calendarDays.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            const currentDay = new Date().getDate(); 
            const currentMonth = new Date().getMonth() + 1; 

            if (currentMonth === 12 && parseInt(day) >= FIRST_DAY && parseInt(day) <= currentDay) {
                openTask(day);
            } else if (currentMonth !== 12) {
                 alert("Календарь можно будет открывать только в декабре!");
            } else if (parseInt(day) < FIRST_DAY) {
                 alert("Этот календарь начинается только с 8 декабря!");
            } else {
                alert("Это окошко еще закрыто! Придется подождать до " + day + " декабря.");
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
