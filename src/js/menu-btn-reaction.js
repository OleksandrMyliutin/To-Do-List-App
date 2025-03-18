const findMenuBtn = document.querySelector('.menu-btn-style');
findMenuBtn.addEventListener('click', (e) => {
    const findMenuContainer = document.querySelector('.menu-list-container');
    const findMenuList = document.querySelector('.menu-list');
    const getCurrentBottom = getComputedStyle(findMenuContainer).bottom;
    if (getCurrentBottom === "140px") {
        findMenuList.style.display = 'flex';
        findMenuContainer.style.bottom = '208px';
    }
    else {
        findMenuList.style.display = 'none';
        findMenuContainer.style.bottom = '140px';
    }
})