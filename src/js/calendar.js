const calendarDays = document.getElementById('calendar-days');
const monthYear = document.getElementById('month-year');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
  calendarDays.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth();

  monthYear.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Отримуємо перший день тижня (неділя = 0)
  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Пусті клітинки на початку
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.innerHTML += '<div class="empty"></div>';
  }

  // Числа місяця
  for (let i = 1; i <= lastDay; i++) {
    const dayEl = document.createElement('div');
    dayEl.textContent = i;
    dayEl.classList.add('day');

    if (
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayEl.classList.add('today');
    }

    calendarDays.appendChild(dayEl);
  }
}

prev.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

next.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

renderCalendar(currentDate);
