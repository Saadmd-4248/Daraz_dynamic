function createNavbar() {
    navbar = document.getElementById('navbar')

    var navbarDiv = document.createElement('nav')

    var txtDiv = document.createElement('div');
    txtDiv.classList.add('text');

    var nav_ul = document.createElement('ul');
    nav_ul.classList.add('ul');

    var links = [
       { text: 'Save More on App', href: '#' },
       { text: 'Sell On Daraz', href: '#' },
       { text: 'Help & Support', href: '#' },
       { text: 'LOGIN', href: '#' },
       { text: 'SIGN UP', href: '#' },
       { text: 'زبان تبدیل کریں', href: '#' }
    ];
    links.forEach(link => {
        var nav_li = document.createElement('li');
        nav_li.classList.add('li');

        var nav_a = document.createElement('a');
        nav_a.classList.add('a');
        nav_a.setAttribute('href', link.href);
        nav_a.textContent = link.text;

        nav_li.appendChild(nav_a);
        nav_ul.appendChild(nav_li);
    });
    
    var logo = document.createElement('img');
    logo.src = 'https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png';
    logo.alt = 'Daraz Logo';
    logo.style.height = '48px';
    logo.style.marginRight = '50px';
    logo.style.marginBottom = '20px';
    
    
    var search = document.createElement('div');
    search.classList.add('main');
    var input = document.createElement('input')
    input.type = 'search';
    input.placeholder = 'Search in Daraz';
    input.classList.add('user')

    var button = document.createElement('button');
    button.style.backgroundColor = '#f9ebe7';
    button.style.border = 'none';
    button.style.padding = '10px 15px';
    button.style.height = '45px';
    button.style.borderRadius = '0 3px 3px 0';
    button.style.marginBottom = '20px';
    button.style.cursor = 'pointer';

    var icon = document.createElement('img');
    icon.src = 'https://i.pinimg.com/originals/1a/8d/ca/1a8dca37b36db96cad1b9ff3713dcd99.png';
    icon.alt = 'Search Icon';
    icon.style.height = '25px';
    icon.style.width = '25px';
    button.appendChild(icon);

    txtDiv.appendChild(nav_ul);
    search.appendChild(logo);
    search.appendChild(input)
    search.appendChild(button)
    navbarDiv.appendChild(txtDiv)
    navbarDiv.appendChild(search)
    navbar.appendChild(navbarDiv);
}

function createSlider() {
    const sliderDiv = document.getElementById('slider');

    const carousel = document.createElement('div');
    carousel.id = 'carouselExampleInterval';
    carousel.className = 'carousel slide';
    carousel.setAttribute('data-bs-ride', 'carousel');

    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';

    const slides = [
        { src: 'https://img.lazcdn.com/us/domino/c529e8e6-b40a-49c3-8fce-eefc0ff4cb8f_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: true },
        { src: 'https://img.lazcdn.com/us/domino/c7486b40-4d14-4894-b473-7f95081f683c_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/441ea01c-7b04-4d21-831f-f9541633b806_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/86de7066-4812-4884-b668-5111c00191f7_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/cb8e34c7-6039-47eb-98e4-c15b33e75a52_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/919eb3f8-a69d-459f-9c9d-ef94f3a7e8a1_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/5c42d06a-bc1f-4f64-a1d3-2bd3e4611f07_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
        { src: 'https://img.lazcdn.com/us/domino/239b9fac-166a-41e1-a3fd-56def0409832_PK-1976-688.jpg_2200x2200q80.jpg_.webp', interval: 2000, active: false },
    ];

    slides.forEach((slide, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item${slide.active ? ' active' : ''}`;
        carouselItem.setAttribute('data-bs-interval', slide.interval);

        const img = document.createElement('img');
        img.src = slide.src;
        img.className = 'd-block w-100';
        img.alt = `Slide ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-control-prev';
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#carouselExampleInterval');
    prevButton.setAttribute('data-bs-slide', 'prev');

    const prevIcon = document.createElement('span');
    prevIcon.className = 'carousel-control-prev-icon';
    prevIcon.setAttribute('aria-hidden', 'true');
    const prevText = document.createElement('span');
    prevText.className = 'visually-hidden';
    prevText.textContent = 'Previous';

    prevButton.appendChild(prevIcon);
    prevButton.appendChild(prevText);

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-control-next';
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#carouselExampleInterval');
    nextButton.setAttribute('data-bs-slide', 'next');

    const nextIcon = document.createElement('span');
    nextIcon.className = 'carousel-control-next-icon';
    nextIcon.setAttribute('aria-hidden', 'true');
    const nextText = document.createElement('span');
    nextText.className = 'visually-hidden';
    nextText.textContent = 'Next';

    nextButton.appendChild(nextIcon);
    nextButton.appendChild(nextText);

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    sliderDiv.appendChild(carousel);
}

function cardsAPI(img, description, price) {
    this.img = img;
    this.description = description;
    this.price = price;
}
function DynamicCards() {
    for (var i = 0; i < Data.length; i++) {
        var parent = document.getElementById('parent');
        parent.classList.add('parent');
        

        var cartDiv = document.createElement('div');
        cartDiv.classList.add('card', 'cart');

        var imgDiv = document.createElement('img');
        imgDiv.classList.add('card-img-top', 'customimage');
        imgDiv.setAttribute('src', Data[i].img);
        cartDiv.appendChild(imgDiv);

        var contentDiv = document.createElement('div');
        contentDiv.classList.add('card-body', 'customcontent');

        var para = document.createElement('p');
        para.classList.add('card-text', 'parafont');
        var paraText = document.createTextNode(Data[i].description); 
        para.appendChild(paraText);

        var heading = document.createElement('p');
        heading.classList.add('pricefont');
        var headingText = document.createTextNode(Data[i].price);
        heading.appendChild(headingText);

        contentDiv.appendChild(para);
        contentDiv.appendChild(heading);
        cartDiv.appendChild(contentDiv);

        parent.appendChild(cartDiv);
        
    }
}
const Data = [
    card1 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/b2e4e9bb0e1ce1eeefbb67f01772c0fb.jpg_720x720q80.jpg_.webp',
        'Decorative Butterfly Wall Shelf, Decoration...',
        'Rs.1,235'
    ),
    card2 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/b42f0ce5c12709787bb21ebbc81793fd.jpg_400x400q80.jpg_.webp',
        'Infinix Hot 40i - 8GB RAM+128GB ROM...',
        'Rs.25,380'
    ),
    card3 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/95c1d4cbbe9d1aa3a3df97680a1e1455.jpg_400x400q80.jpg_.webp',
        "L'Oreal Paris - L'Oreal Elvive Extraordinary Oil...",
        'Rs.684'
    ),
    card4 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/e5cb2c8fa6b9c6f99a027ea965cb85b9.jpg_200x200q80.jpg_.webp',
        "MH Fashion Panel Style Zipper For Man & Boys",
        'Rs.1,750'
    ),
    card5 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/cdb510fc63e62388a2d3401b93b0b067.jpg_200x200q80.jpg_.webp',
        "T800/T900/U8 Ultra Smart Watch for M...",
        'Rs.3,290'
    ),
    card6 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/42af3489c5ee4280e3507b3306654283.jpg_200x200q80.jpg_.webp',
        'Mobile & Tablet Holder | Premier Quality Pro...',
        'Rs.195'
    ),
    card7 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/4eed21c18a3322d6ca5603dbab88c51b.png_200x200q80.png_.webp',
        'Automatic Counting And Non Counting Han...',
        'Rs.260'
    ),
    card8 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/10c3566d70bf40cb170cc94a7932b5d1.jpg_200x200q80.jpg_.webp',
        'Golden Pearl Urgent Facial Fruity 75 ml tube..',
        'Rs.340'
    ),
    card9 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_200x200q80.jpg_.webp',
        'P47 Wireless Headset Bluetooth Foldable He...',
        'Rs.890'
    ),
    card10 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/79abf72c348111400e3e33639b6aaf92.jpg_200x200q80.jpg_.webp',
        'Transparent Silicone Case For iPhone Mobi...',
        'Rs.130'
    ),
    card11 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/6ee1135333bd276e93b57abdab31e529.jpg_200x200q80.jpg_.webp',
        'RGB Gaming Keyboard & Mouse Combo - Col...',
        'Rs.1,378'
    ),
    card12 = new cardsAPI(
        'https://img.drz.lazcdn.com/g/kf/Sc87def5fed974f0790e61f6123a3ac72d.jpg_200x200q80.jpg_.webp',
        'RGB Gaming Keyboard & Mouse Combo - Col...',
        'Rs.1,378'
    ),
    card13 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/6ee1135333bd276e93b57abdab31e529.jpg_200x200q80.jpg_.webp',
        'RGB Gaming Keyboard & Mouse Combo - Col...',
        'Rs.1,378'
    ),
    card14 = new cardsAPI(
        'https://img.drz.lazcdn.com/g/kf/Sc87def5fed974f0790e61f6123a3ac72d.jpg_200x200q80.jpg_.webp',
        'RGB Gaming Keyboard & Mouse Combo - Col...',
        'Rs.1,378'
    ),
    card15 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_200x200q80.jpg_.webp',
        'P47 Wireless Headset Bluetooth Foldable He...',
        'Rs.890'
    ),
    card16 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/e5cb2c8fa6b9c6f99a027ea965cb85b9.jpg_200x200q80.jpg_.webp',
        "MH Fashion Panel Style Zipper For Man & Boys",
        'Rs.1,750'
    ),
    card17 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_200x200q80.jpg_.webp',
        'P47 Wireless Headset Bluetooth Foldable He...',
        'Rs.890'
    ),
    card18 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_200x200q80.jpg_.webp',
        'P47 Wireless Headset Bluetooth Foldable He...',
        'Rs.890'
    ),
    card19 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/e5cb2c8fa6b9c6f99a027ea965cb85b9.jpg_200x200q80.jpg_.webp',
        "MH Fashion Panel Style Zipper For Man & Boys",
        'Rs.1,750'
    ),
    card20 = new cardsAPI(
        'https://img.drz.lazcdn.com/static/pk/p/13537ff39a839e435836f3d7944958ae.jpg_200x200q80.jpg_.webp',
        'P47 Wireless Headset Bluetooth Foldable He...',
        'Rs.890'
    ),
]

createNavbar();
createSlider();
DynamicCards();