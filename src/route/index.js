// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const firstPage = require('./firstPage')
const secondPage = require('./secondPage')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', firstPage)
router.use('/secondPage', secondPage)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
