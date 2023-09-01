const database = require("./db");

type Box = {
    size: string;
    priceCraft: number;
    priceColor: number;
};

const parseSize = (size: string): [number, number, number] => {
    const reg = /[^0-9\s]/;
    const [length, width, height] = size.split(reg).map(Number);
    return [length, width, height];
};

const calculateVolume = (size: string): number => {
    const [length, width, height] = parseSize(size);
    return length * width * height;
};

const findBox = (size: string): Box | string => {
    const volume = calculateVolume(size);
    const [length, width, height] = parseSize(size);
    const suitableBoxes = database.filter((box: Box): boolean => {
        const [boxL, boxW, boxH] = parseSize(box.size);
        return boxL >= length && boxW >= width && boxH >= height;
    });

    if (suitableBoxes.length === 0) {
        return "Пожалуйста, убедитесь в правильности введенных размеров коробки. Если все верно, то у нас, к сожалению, нет подходящей коробки для ваших нужд.";
    }
    const nearestBox = suitableBoxes.reduce((prev: Box, curr: Box) => {
        const prevVolumeDiff = calculateVolume(prev.size) - volume;
        const currVolumeDiff = calculateVolume(curr.size) - volume;
        return Math.abs(currVolumeDiff) < Math.abs(prevVolumeDiff)
            ? curr
            : prev;
    });
    return nearestBox;
};

exports.findBox = findBox;
