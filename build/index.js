"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var findBoxInDb = require("./findBoxModule.ts");
var TOKEN = require("./token.ts").TOKEN;
var TelegramApi = require("node-telegram-bot-api");
var _a = require("./options.ts"), menu = _a.menu, catalog = _a.catalog, boxesCatalog = _a.boxesCatalog, packingCatalog = _a.packingCatalog, papersCatalog = _a.papersCatalog;
var fileOptions = {
    filename: "price_boxes.pdf",
    contentType: "application/pdf",
};
var bot = new TelegramApi(TOKEN, { polling: true });
var regex = /^(?:100|[1-9][0-9]?)\D+(?:100|[1-9][0-9]?)\D+(?:100|[1-9][0-9]?)$/;
console.log(findBoxInDb);
var start = function () {
    bot.setMyCommands([
        {
            command: "/start",
            description: "Начальное приветствие",
        },
    ]);
    bot.on("message", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var text, chat, chatId, boxMessage, _a, stickerNum, firstName, lastName, welcomeMessage, addressMessage, workHoursMessage, instagramMessage, catalogMessage, errorMessage;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    text = msg.text, chat = msg.chat;
                    chatId = chat.id;
                    console.log(text);
                    if (!text.match(regex)) return [3 /*break*/, 1];
                    boxMessage = "d";
                    // const boxMessage = "Верный ввод";
                    return [2 /*return*/, bot.sendMessage(chatId, boxMessage)];
                case 1:
                    _a = text;
                    switch (_a) {
                        case "/start": return [3 /*break*/, 2];
                        case "🏠 Адрес": return [3 /*break*/, 4];
                        case "🕙 Режим работы:": return [3 /*break*/, 5];
                        case "📷 Мы в Instagram": return [3 /*break*/, 6];
                        case "🗂 Каталог товаров и услуг": return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 2:
                    stickerNum = Math.floor(Math.random() * 10);
                    firstName = (_b = msg.from) === null || _b === void 0 ? void 0 : _b.first_name;
                    lastName = ((_c = msg.from) === null || _c === void 0 ? void 0 : _c.last_name) || "";
                    return [4 /*yield*/, bot.sendSticker(chatId, "./assets/gift".concat(stickerNum, ".tgs"))];
                case 3:
                    _d.sent();
                    welcomeMessage = lastName
                        ? "\uD83D\uDC4B \u041F\u0440\u0438\u0432\u0435\u0442, ".concat(firstName, " ").concat(lastName, "!\n\n\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432!\n\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0432\u043E\u043B\u0448\u0435\u0431\u0441\u0442\u0432\u043E \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0441\u043B\u0443\u0447\u0430\u044F. \u0420\u0430\u0434\u044B \u0431\u044B\u0442\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u0432\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u044B\u0445 \u043C\u043E\u043C\u0435\u043D\u0442\u043E\u0432!\n\n\u0421 \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C\u0438,\n\u041A\u043E\u043C\u0430\u043D\u0434\u0430 '\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438!'")
                        : "\uD83D\uDC4B \u041F\u0440\u0438\u0432\u0435\u0442, ".concat(firstName, "!\n\n\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432!\n\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0432\u043E\u043B\u0448\u0435\u0431\u0441\u0442\u0432\u043E \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0441\u043B\u0443\u0447\u0430\u044F. \u0420\u0430\u0434\u044B \u0431\u044B\u0442\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u0432\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u044B\u0445 \u043C\u043E\u043C\u0435\u043D\u0442\u043E\u0432!\n\n\u0421 \u043D\u0430\u0438\u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C\u0438,\n\u041A\u043E\u043C\u0430\u043D\u0434\u0430 '\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438!'");
                    return [2 /*return*/, bot.sendMessage(chatId, welcomeMessage, menu)];
                case 4:
                    {
                        addressMessage = "📍 Наш магазин подарков находится по адресу: \nул. Притыцкого, 156, ТЦ «Грин Сити», Минск, Беларусь, \n\n🗺 https://yandex.by/maps/-/CHdRr~a";
                        return [2 /*return*/, bot.sendMessage(chatId, addressMessage)];
                    }
                    _d.label = 5;
                case 5:
                    {
                        workHoursMessage = "🕙 Мы рады видеть Вас на нашем корнере ежедневно с 10.00 до 22.00";
                        return [2 /*return*/, bot.sendMessage(chatId, workHoursMessage)];
                    }
                    _d.label = 6;
                case 6:
                    {
                        instagramMessage = "📷 Именно здесь вы найдете самые крутые идеи для оформления своих подарков, узнаете о первых новинках и сможете выиграть крутые призы: \n\nhttps://instagram.com/bymaga_shop";
                        return [2 /*return*/, bot.sendMessage(chatId, instagramMessage)];
                    }
                    _d.label = 7;
                case 7:
                    {
                        catalogMessage = "🛒 Выберите интересующий вас товар";
                        return [2 /*return*/, bot.sendMessage(chatId, catalogMessage, catalog)];
                    }
                    _d.label = 8;
                case 8:
                    {
                        errorMessage = "Я вас не понял, сделайте ваш запрос еще раз!";
                        return [2 /*return*/, bot.sendMessage(chatId, errorMessage)];
                    }
                    _d.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); });
    bot.on("callback_query", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
        var data, chatId, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    data = msg.data;
                    chatId = (_b = msg.message) === null || _b === void 0 ? void 0 : _b.chat.id;
                    _a = data;
                    switch (_a) {
                        case "boxes": return [3 /*break*/, 1];
                        case "stickers": return [3 /*break*/, 4];
                        case "papers": return [3 /*break*/, 7];
                        case "catalog": return [3 /*break*/, 9];
                        case "packing": return [3 /*break*/, 11];
                        case "price_boxes": return [3 /*break*/, 14];
                        case "price_packing": return [3 /*break*/, 16];
                        case "find_box": return [3 /*break*/, 18];
                    }
                    return [3 /*break*/, 20];
                case 1: return [4 /*yield*/, bot.sendPhoto(chatId, "./assets/box.jpeg")];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, bot.sendMessage(chatId, "📦 У нас огромный выбор классных подарочных картонных коробок, которые идеально подходят для упаковки любых подарков. Все коробки сделаны из прочного картона высокого качества, чтобы ваш подарок был надежно защищен. В нашем каталоге много разных размеров, форм и стилей, чтобы удовлетворить все ваши предпочтения и вкусы. Эти стильные коробки помогут сделать ваш подарок особенным и запоминающимся.\n\nАссортимент коробок и цены вы можете узнать из нашего прайс-листа 👇🏼", boxesCatalog)];
                case 3:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 4: return [4 /*yield*/, bot.sendPhoto(chatId, "./assets/stickers.jpg")];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, bot.sendMessage(chatId, "🩵 Наш ассортимент объемных наклеек предлагает разнообразные дизайны и включает сердечки, цветы, фрукты, интересные надписи и знаки зодиака. Эти наклейки идеально подходят для украшения чехлов телефонов, а также могут использоваться для украшения блокнотов, лэптопов, фотоальбомов и других предметов. Цена за каждую наклейку составляет от 1 до 2,5 рублей, что делает их доступными и привлекательными для широкой аудитории.")];
                case 6:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 7: return [4 /*yield*/, bot.sendMessage(chatId, "📃 Выберите бумагу", papersCatalog)];
                case 8:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 9: return [4 /*yield*/, bot.sendMessage(chatId, "🛒 Выберите интересующий вас товар", catalog)];
                case 10:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 11: return [4 /*yield*/, bot.sendPhoto(chatId, "./assets/packing.jpg")];
                case 12:
                    _c.sent();
                    return [4 /*yield*/, bot.sendMessage(chatId, "У нас есть уникальное предложение для упаковки ваших подарков. Наша команда талантливых упаковщиков заботливо обернет каждый подарок в качественную бумагу, чтобы подчеркнуть его стиль и особенности. Мы обращаем внимание на каждую деталь и используем элегантные ленты и банты, чтобы создать привлекательный и роскошный внешний вид. Результатом нашей работы станет упаковка, которая не только порадует вас, но и добавит особую изысканность вашим подаркам.", packingCatalog)];
                case 13:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 14: return [4 /*yield*/, bot.sendDocument(chatId, "./assets/prices/price_boxes.pdf")];
                case 15:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 16: return [4 /*yield*/, bot.sendDocument(chatId, "./assets/prices/price_packing.pdf")];
                case 17:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 18: return [4 /*yield*/, bot.sendMessage(chatId, "Напишите, пожалуйста, габаритные размеры (длина, ширина и высота) необходимой вам коробки в сантиметрах, например 10/10/10")];
                case 19:
                    _c.sent();
                    return [3 /*break*/, 20];
                case 20: return [2 /*return*/];
            }
        });
    }); });
};
start();
