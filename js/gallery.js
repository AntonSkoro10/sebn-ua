const images = [
{ url: '../img/peopels.jpg', alt: 'Employees of the company',},
{ url: '../img/tsekh-1.jpg', alt: 'Workshop', },
{ url: '../img/tsekh-2.jpg', alt: 'Second workshop', },
]

const gallery = document.querySelector('ul.gallery-list')
const fragment = document.createDocumentFragment()

images.forEach(image => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = image.url
    img.alt = image.alt
    img.width = 390
    img.height = 200
    li.appendChild(img)
    fragment.appendChild(li)
})

gallery.appendChild(fragment)