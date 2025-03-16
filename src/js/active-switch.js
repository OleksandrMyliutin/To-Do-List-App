const findTypes = document.querySelector('.schedule-note');
findTypes.addEventListener('click', (e) => {
    const switchActive = e.target.closest('.schedule-note-style');
    if (!switchActive) return;

    findTypes.querySelectorAll('.schedule-note-style').forEach((item) => {
        item.classList.remove('active');
    });

    switchActive.classList.add('active');
});
