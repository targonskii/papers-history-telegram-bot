const TelegramApi = require("node-telegram-bot-api");
const {
    catalog,
    boxesCatalog,
    cardsCatalog,
    papersCatalog,
} = require("./options");

const TOKEN = "6361131921:AAGXI19nDaNZNu5lwEcPp4NCR1yyjhdKUfg";

const bot = new TelegramApi(TOKEN, { polling: true });

const start = () => {
    bot.setMyCommands([
        {
            command: "/start",
            description: "Начальное приветствие",
        },
        {
            command: "/catalog",
            description: "Каталог товаров и услуг",
        },
    ]);

    bot.on("message", async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === "/start") {
            if (msg.from.last_name) {
                await bot.sendSticker(chatId, "./assets/gift.tgs");
                return bot.sendMessage(
                    chatId,
                    `${msg.from.first_name} ${msg.from.last_name}, добро пожаловать в магазин "Бумажные истории!`
                );
            } else {
                await bot.sendSticker(chatId, "./assets/gift.tgs");
                return bot.sendMessage(
                    chatId,
                    `${msg.from.first_name}, добро пожаловать в магазин "Бумажные истории!`
                );
            }
        }

        if (text === "/catalog") {
            return bot.sendMessage(
                chatId,
                "Выберите интересующий вас товар",
                catalog
            );
        }

        return bot.sendMessage(
            chatId,
            "Я вас не понял, сделайте ваш запрос еще раз!"
        );
    });

    bot.on("callback_query", async (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        switch (data) {
            case "boxes":
                await bot.sendMessage(
                    chatId,
                    "Выберите размер коробки",
                    boxesCatalog
                );
                break;
            case "cards":
                await bot.sendMessage(
                    chatId,
                    "Выберите открытку",
                    cardsCatalog
                );
                break;
            case "papers":
                await bot.sendMessage(chatId, "Выберите бумагу", papersCatalog);
                break;
        }
    });
};

start();
