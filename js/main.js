
/* Navigation */

window.addEventListener('scroll', function() {
    let nav = document.querySelector('.header-nav');
    let navAdjust = document.querySelector('.nav-scroll-adjust')
    console.log(navAdjust)
    
    if(window.pageYOffset > 100) {
        nav.classList.add('nav-scroll');
        navAdjust.style.marginTop = "80px";
    } else {
        nav.classList.remove('nav-scroll');
        navAdjust.style.marginTop = 0;
    }
})

/* Hotel Page */

class Tablink {
    constructor(element) {
        this.tabElement = element;
        this.tabData = document.querySelector(`.tabs-link[data-tab='${element.dataset.tab}']`);

        if (this.tabData.dataset.tab === 'all') {
            this.hotels = document.querySelectorAll('.hotel-item');
        } else {
            this.hotels = document.querySelectorAll(`.hotel-item[data-tab='${element.dataset.tab}']`)
        }
        
        this.hotels = Array.from(this.hotels).map( hotel => new HotelItem(hotel));

        this.tabElement.addEventListener('click', () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tabs-link');
        tabs.forEach( item => item.classList.remove('tabs-link-selected'));
        console.log(tabs)
        const hotels = document.querySelectorAll('.hotel-item');
        hotels.forEach(item => item.style.display = 'none');

        this.tabElement.classList.add('tabs-link-selected');

        this.hotels.forEach(element => element.selectItem());
    }
}

class HotelItem {
    constructor(hotelElement) {
        this.hotelElement = hotelElement;
    }

    selectItem() {
        this.hotelElement.style.display = 'flex';
    }
}

let tabs = document.querySelectorAll(".tabs-link")
                    .forEach(item => new Tablink(item));

