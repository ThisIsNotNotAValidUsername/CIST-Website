function onload() {
    const element_page = document.getElementById('page');

    const element_body = document.body;
    const style_body = window.getComputedStyle(element_body);
    let bodyMargin = style_body.getPropertyValue('margin');
    bodyMargin = bodyMargin.slice(0, -2);
    bodyMargin = parseInt(bodyMargin)
    bodyMargin = bodyMargin * 2

    let viewportHeight = '' + (window.innerHeight - 100 - bodyMargin) + 'px';
    element_page.style.height = viewportHeight;
    console.log(element_body);
    console.log(bodyMargin);
}

function switchMenu(newMenu) {
    console.log(newMenu)
    document.getElementById('menu_main').style.display = 'none';
    document.getElementById('menu_time_management').style.display = 'none';
    document.getElementById('menu_university_resources').style.display = 'none';
    document.getElementById('menu_personal_experience').style.display = 'none';

    if (newMenu == 'menu_main') {
        document.getElementById('menu_main').style.display = 'block';
    }
    else if (newMenu == 'menu_time_management') {
        document.getElementById('menu_time_management').style.display = 'block';
    }
    else if (newMenu == 'menu_university_resources') {
        document.getElementById('menu_university_resources').style.display = 'block';
    }
    else if (newMenu == 'menu_personal_experience') {
        document.getElementById('menu_personal_experience').style.display = 'block';
    }
}