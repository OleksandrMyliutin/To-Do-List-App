const findMenuBtn = document.querySelector('.wrapper-action_menu-btn-style');
findMenuBtn.addEventListener('click', (e) => {
    const findMenuContainer = document.querySelector('.wrapper-action_menu');
    const findMenuList = document.querySelector('.wrapper-action_menu-list');
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