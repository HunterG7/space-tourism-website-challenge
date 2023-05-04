const sitePages = document.querySelectorAll('.nav-item');

// adds underline to nav bar item to indicate the active page
window.addEventListener('load',(e)=>{
    let pagePath = e.currentTarget.location.pathname;
    let pageName = pagePath.substring(33, pagePath.length - 5);
    sitePages.forEach((page)=>{
         if (page.classList.contains('active')){
             page.classList.remove('active');
         }
    });
    switch (pageName) {
        case 'index':
            sitePages[0].classList.add('active');
            break;
        case 'destination':
            sitePages[1].classList.add('active');
            break;
        case 'crew':
            sitePages[2].classList.add('active');
            break;
        case 'technology':
            sitePages[3].classList.add('active');
            break;
    }
});


