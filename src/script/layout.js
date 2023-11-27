export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if(className) {
        elem.className = className
    }

    if(text) {
        elem.innerHTML = text
    }

    return elem
}

//=====

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: '/svg/arrow-back.svg',
    },
    {
        width: 24,
        height: 24,
        src: '/svg/IMG_4.svg',
    },
]

export const createHeader = () => {
    const header = createElement('header', 'header')

    HEADER_BUTTON_LIST.forEach((params) => {
        const button = createElement('button', 'button')
        const img = createElement('img')

        Object.entries(params).forEach(([key, value]) => {
            img[key] = value
        })

        button.append(img)
        header.append(button)
    })

    return header
}

//=====

// const CARD_ICONS = [
//     {
//         class: 'page__icons-yellow',
//         text: 'Важливо',
//     },
//     {
//         class: 'page__icons-pink',
//         text: 'Нова',
//     },
//     {
//         class: 'page__icons-date',
//         text: '15.01',
//     },
// ]

// export const createCard = () => {
//     const card = createElement('div', 'page__card')
//     const icons = createElement('div', 'page__icons page__icons-info')
//     CARD_ICONS.forEach((params) => {
//         const icon = createElement('span', params.class, params.text)
//         icons.append(icon)
//         card.append(icons)
//     })

//     const info = createElement('div', 'page__promoText', 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.')
//     card.append(info)
//     return card
// }

//=====

const POST_LIST = [
    {
        category: [
            {text: 'Важливо', id: 1,},
            {text: 'Нова', id: 2,},
        ],
        info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
        date: '25.01',
        viewed: false,
    },
    {
        category: [{text: 'Нова', id: 2,},],
        info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
        date: '24.01',
        viewed: true,
    },
]

export const createPost = () => {
    const postList = createElement('main', 'post__list')

    POST_LIST.forEach((postData) => {
        const post = createElement(
            'div',
            postData.viewed 
            ? 'post button post--viewed' 
            : 'post button'
        )

        const postHeader = createElement('div', 'post__header')

        const categoryList = createElement('div', 'post__category-list')

        postData.category.forEach((category) => {
            const categorySpan = createElement(
                'span',
                `post__category post__category--${category.id}`,
                category.text,
            )
            categoryList.append(categorySpan)
        })

        const dateSpan = createElement(
            'span', 
            'post__date', 
            postData.date,
        )

        postHeader.append(categoryList, dateSpan)

        const infoParagraph = createElement('p', 'post__info', postData.info,)

        post.append(postHeader, infoParagraph)

        postList.append(post)
    })

    return postList
}

//=========================================

const TAB_PAGE = [
    {text: 'База знань', id: 1, viewed: true,},
    {text: 'Інформація', id: 2, viewed: false,},
]

export const createTab = () => {
    const tabList = createElement('main', 'content')

    const tabTitle = createElement('div', 'tabs')

    TAB_PAGE.forEach((tabData) => {
        const tab = createElement(
            'button',
            tabData.viewed 
            ? 'tabs tabs__button tabs__button--viewed' 
            : 'tabs tabs__button',
            tabData.text
        )
        tabTitle.append(tab)
    })

    const tabContent = createElement('div', 'tab__contents content')

    const img = createElement('img')
    img.src = './img/ourComunity.png'
    img.alt = 'Image'

    const infoTitle = createElement('h2', 'title', 'Що таке база знань?')
    const infoParagraph = createElement('p', 'paragraph', 'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.')
    const tabButton = createElement('button', 'button--orange', `Перейти до ком'юніті у Телеграм`)

    tabContent.append(img, infoTitle, infoParagraph, tabButton)

    tabList.append(tabTitle, tabContent)

    return tabList
}