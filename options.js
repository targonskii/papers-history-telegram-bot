module.exports = {
    menu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "🗂 Каталог",
                        callback_data: "catalog",
                    },
                    {
                        text: "🏠 Адрес",
                        callback_data: "address",
                    },
                ],
                [
                    {
                        text: "🕙 Режим работы:",
                        callback_data: "open",
                    },
                    {
                        text: "📱 Позвонить нам",
                        callback_data: "phoneNumber",
                    },
                ],
            ],
        }),
    },
    catalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "Коробки 📦",
                        callback_data: "boxes",
                    },
                ],
                [
                    {
                        text: "Открытки 🔖",
                        callback_data: "cards",
                    },
                ],
                [
                    {
                        text: "Бумага 📃",
                        callback_data: "papers",
                    },
                ],
            ],
        }),
    },
    boxesCatalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "Крафтовые коробки",
                        callback_data: "craftBox",
                    },
                ],
                [
                    {
                        text: "Цветные коробки",
                        callback_data: "colorBox",
                    },
                ],
            ],
        }),
    },
    papersCatalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "Крафтовая бумага",
                        callback_data: "craftPaper",
                    },
                ],
                [
                    {
                        text: "Цветная бумага",
                        callback_data: "colorPaper",
                    },
                ],
            ],
        }),
    },
    cardsCatalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "С днем Рождения",
                        callback_data: "happyBirthdayCard",
                    },
                ],
                [
                    {
                        text: "С Новым Годом",
                        callback_data: "happyNewYearCard",
                    },
                ],
            ],
        }),
    },
};
