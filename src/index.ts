const findBoxInDb = require("./findBoxModule.ts");
const { TOKEN } = require("./token.ts");
const TelegramApi = require("node-telegram-bot-api");
const {
    menu,
    catalog,
    boxesCatalog,
    packingCatalog,
    papersCatalog,
    wantToBuy,
} = require("./options.ts");

const fileOptions = {
    filename: "price_boxes.pdf",
    contentType: "application/pdf",
};

const bot = new TelegramApi(TOKEN, { polling: true });
const regex =
    /^(?:100|[1-9][0-9]?)\D+(?:100|[1-9][0-9]?)\D+(?:100|[1-9][0-9]?)$/;

const start = () => {
    bot.setMyCommands([
        {
            command: "/start",
            description: "Начальное приветствие",
        },
    ]);

    bot.on("message", async (msg: any) => {
        const { text, chat } = msg;
        const chatId = chat.id;
        console.log(text);

        if (text.match(regex)) {
            const boxFound = await findBoxInDb.findBox(text);
            let boxMessage;

            if (typeof boxFound === "string") {
                boxMessage = boxFound;
            } else {
                boxMessage =
                    `🥳 УРА! Мы нашли подходящую вам коробку! \nЕе размеры ${boxFound.size} см. \n\n💵 Цена коробки:\nиз цветного картона ${boxFound.priceColor} BYN` +
                    (boxFound.priceCraft
                        ? `, \nиз крафтового картона ${boxFound.priceCraft} BYN`
                        : "");
            }
            return bot.sendMessage(chatId, boxMessage, wantToBuy);
        } else {
            switch (text) {
                case "/start": {
                    const stickerNum = Math.floor(Math.random() * 10);
                    const firstName = msg.from?.first_name;
                    const lastName = msg.from?.last_name || "";

                    await bot.sendSticker(
                        chatId,
                        `./assets/gift${stickerNum}.tgs`
                    );
                    const welcomeMessage = lastName
                        ? `👋 Привет, ${firstName} ${lastName}!\n\nДобро пожаловать в наш магазин упаковки подарков!\nМы создаем волшебство в каждой упаковке. Наша команда готова помочь вам выбрать идеальную упаковку для любого случая. Рады быть частью ваших особых моментов!\n\nС наилучшими пожеланиями,\nКоманда 'Бумажные истории!'`
                        : `👋 Привет, ${firstName}!\n\nДобро пожаловать в наш магазин упаковки подарков!\nМы создаем волшебство в каждой упаковке. Наша команда готова помочь вам выбрать идеальную упаковку для любого случая. Рады быть частью ваших особых моментов!\n\nС наилучшими пожеланиями,\nКоманда 'Бумажные истории!'`;

                    return bot.sendMessage(chatId, welcomeMessage, menu);
                }
                case "🏠 Адрес": {
                    const addressMessage =
                        "📍 Наш магазин подарков находится по адресу: \nул. Притыцкого, 156, ТЦ «Грин Сити», Минск, Беларусь, \n\n🗺 https://yandex.by/maps/-/CHdRr~a";
                    return bot.sendMessage(chatId, addressMessage);
                }
                case "🕙 Режим работы:": {
                    const workHoursMessage =
                        "🕙 Мы рады видеть Вас на нашем корнере ежедневно с 10.00 до 22.00";
                    return bot.sendMessage(chatId, workHoursMessage);
                }
                case "📷 Мы в Instagram": {
                    const instagramMessage =
                        "📷 Здесь вы обретете вдохновение для оформления подарков, узнаете о новинках первыми и получите шанс выиграть удивительные призы: \n\nhttps://instagram.com/bymaga_shop";
                    return bot.sendMessage(chatId, instagramMessage);
                }
                case "🛍️ Каталог": {
                    const catalogMessage = "🛒 Выберите интересующий вас товар";
                    return bot.sendMessage(chatId, catalogMessage, catalog);
                }
                default: {
                    const errorMessage =
                        "Я вас не понял, сделайте, пожалуйста, ваш запрос еще раз!";
                    return bot.sendMessage(chatId, errorMessage);
                }
            }
        }
    });

    bot.on("callback_query", async (msg: any) => {
        const data = msg.data;
        const chatId = msg.message?.chat.id;

        switch (data) {
            case "boxes":
                await bot.sendPhoto(chatId, "./assets/box.jpeg");
                await bot.sendMessage(
                    chatId,
                    "📦 У нас огромный выбор подарочных коробок, которые идеально подходят для упаковки любых подарков. Все коробки сделаны из прочного картона высокого качества, чтобы ваш подарок был надежно защищен. В нашем каталоге много разных размеров, чтобы удовлетворить все ваши предпочтения и вкусы.\n\nАссортимент коробок и цены вы можете узнать из нашего прайс-листа 👇🏼",
                    boxesCatalog
                );
                break;
            case "stickers":
                await bot.sendPhoto(chatId, "./assets/stickers.jpg");
                await bot.sendMessage(
                    chatId,
                    "🩵 Наш ассортимент объемных наклеек предлагает разнообразные дизайны и включает сердечки 💕, цветы 🌼, фрукты 🍓, интересные надписи 🈵 и знаки зодиака ♊️. \n\nЭти наклейки идеально подходят для украшения чехлов телефонов, а также могут использоваться для украшения ноутбуков, кружек, подарков и других предметов. \n\nЦена за каждую наклейку составляет от 1 до 2,5 рублей, что делает их доступными и привлекательными для широкой аудитории."
                );
                break;
            case "papers":
                await bot.sendMessage(
                    chatId,
                    "📃 Выберите бумагу",
                    papersCatalog
                );
                break;
            case "catalog":
                await bot.sendMessage(
                    chatId,
                    "🛒 Выберите интересующий вас товар",
                    catalog
                );
                break;
            case "packing":
                await bot.sendPhoto(chatId, "./assets/packing.jpg");
                await bot.sendMessage(
                    chatId,
                    "У нас есть уникальное предложение для упаковки ваших подарков. Наша команда талантливых упаковщиков заботливо обернет каждый подарок в качественную бумагу, чтобы подчеркнуть его стиль и особенности. Мы обращаем внимание на каждую деталь и используем элегантные ленты и банты, чтобы создать привлекательный и роскошный внешний вид. Результатом нашей работы станет упаковка, которая не только порадует вас, но и добавит особую изысканность вашим подаркам.",
                    packingCatalog
                );
                break;
            case "price_boxes":
                await bot.sendDocument(
                    chatId,
                    "./assets/prices/price_boxes.pdf"
                );
                break;
            case "price_packing":
                await bot.sendDocument(
                    chatId,
                    "./assets/prices/price_packing.pdf"
                );
                break;
            case "find_box":
                await bot.sendMessage(
                    chatId,
                    "Пожалуйста, напишите габаритные размеры (длина, ширина и высота) необходимой вам коробки в сантиметрах, например 10/10/10"
                );
                break;
            case "buy":
                await bot.sendMessage(
                    chatId,
                    `Купить коробку можно на нашем корнере в ТЦ "Green" по адресу:\n\nул. Притыцкого, д. 156\n\nВ любой день с 10.00 до 22.00\n\n🗺 https://yandex.by/maps/-/CHdRr~a`
                );
                break;
        }
    });
};

start();
