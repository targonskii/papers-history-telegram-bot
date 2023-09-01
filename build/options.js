"use strict";
module.exports = {
    menu: {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "🗂 Каталог товаров и услуг",
                    },
                    {
                        text: "🏠 Адрес",
                    },
                ],
                [
                    {
                        text: "🕙 Режим работы:",
                    },
                    {
                        text: "📷 Мы в Instagram",
                    },
                ],
            ],
            resize_keyboard: true,
        }),
    },
    catalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "🎁 Упаковка подарков",
                        callback_data: "packing",
                    },
                ],
                [
                    {
                        text: "📦 Коробки",
                        callback_data: "boxes",
                    },
                ],
                [
                    {
                        text: "🩷 Объемные стикеры",
                        callback_data: "stickers",
                    },
                ],
                [
                    {
                        text: "📃 Бумага",
                        callback_data: "papers",
                    },
                ],
                [
                    {
                        text: "📃 Ассортимент подарков",
                        callback_data: "others",
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
                        text: "🎁 Подобрать коробку по размеру",
                        callback_data: "find_box",
                    },
                ],
                [
                    {
                        text: "📩 Полный прайс-лист на коробки .pdf",
                        callback_data: "price_boxes",
                    },
                ],
                [
                    {
                        text: "👈🏼 Вернуться в каталог",
                        callback_data: "catalog",
                    },
                ],
            ],
        }),
    },
    packingCatalog: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "📩 Прайс-лист на упаковку подарков .pdf",
                        callback_data: "price_packing",
                    },
                ],
                [
                    {
                        text: "👈🏼 Вернуться в каталог",
                        callback_data: "catalog",
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
};
