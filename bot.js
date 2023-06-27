const { Telegraf } = require('telegraf')

const bot = new Telegraf("6286392838:AAEbculwlD7DSOwD0cIDJiJjfe_xnKX-P4k") // инициализация бота

bot.start(ctx => {
    const user_name = ctx.from.first_name
    const buttons = [
        { text: 'Нумерология', callback_data: 'numberology' },
        { text: 'Нутрициология', callback_data: 'nutrition' },
        { text: 'Траволечение', callback_data: 'herbal_treatment' }
    ]
    const keyboard = {
        reply_markup: {
            inline_keyboard: [buttons]
        },
        parse_mode: 'HTML'
    }
    ctx.reply(`Добро пожаловать, ${user_name}! 🌟\nЯ здесь, чтобы поделиться знаниями о <b>нумерологии</b>, <b>нутрициологии</b> и <b>траволечении</b>.\nВыбери интересующее направление и вперед к новым знаниям! 💪✨`,keyboard)
})

bot.action('numberology', ctx => {
    ctx.replyWithHTML(`Присоединяйся к нашему курсу по 👉<a href='https://ihclick.ru/?p=253394&o=277936&idp=124458'>нумерологии</a>👈`)
    ctx.replyWithHTML(`🔢💫 <b>Отличный выбор!</b> 💫🔢\n\nВыбрав этот курс, вы открываете дверь в мир <b>нумерологии</b>, где числа раскроют перед вами свои тайны. \n\n🚀 <b>Погрузитесь</b> в увлекательное путешествие и расширьте свои знания о себе и окружающем мире! 🌟🌎`, { parse_mode: 'HTML' })
})

bot.action('nutrition', ctx => {
    ctx.replyWithHTML(`Присоединяйся к нашему курсу по 👉<a href='https://ihclick.ru/?p=288387&o=288781&idp=124458'>нутрициологии</a>👈`)
    ctx.replyWithHTML(`🍎🥦<b>Великолепный выбор!</b> 🌱🍇\n\nДанный курс предлагает глубокие знания в области <b>нутрициологии</b>. \n\n💡 <b>Вы узнаете</b>, как правильное питание и выбор продуктов влияют на ваше здоровье и благополучие. 🥗💪 \n\n👩‍🍳 Приготовьтесь к открытию новых вкусов и пользы для организма! 🌿🌟`, { parse_mode: 'HTML' })
})

bot.action('herbal_treatment', ctx => {
    ctx.replyWithHTML(`Присоединяйся к нашему курсу по 👉<a href='https://ihclick.ru/?p=276326&o=298346&idp=124458'>траволечению</a>👈`)
    ctx.replyWithHTML(`🌿🌱 <b>Отличный выбор!</b> 🌱🌿\n\nДанный курс приглашает вас в мир <b>траволечения</b>, где вы откроете для себя силу природы. \n\n💫 <b>Узнайте</b> о лечебных свойствах различных трав и растений, их использовании в народной медицине и создайте свой собственный набор лекарственных трав! 🌼💚`, { parse_mode: 'HTML' })
})

bot.command('help', ctx => {
    ctx.reply(`Я помогу тебе узнать о курсах по нумерологии, нутрициологии и траволечению. Выбери интересующее направление и вперед к новым знаниям! 💪✨`)
})

bot.on('text', ctx => {
    ctx.reply(`Я не понимаю. Выбери одно из предложений!`)
})

bot.launch() // запустить бота