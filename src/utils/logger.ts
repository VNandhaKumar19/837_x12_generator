import * as fs from 'fs';
// Backup the original console methods
const originalConsole: Console = { ...console };
const FOLDER_PATH = './files/appLogs/clearing_house_service/';

// Override console methods
console.log = function (...message: any[]) {
    originalConsole.log(...message);
    logToFile(`INFO`, ...message);
};

console.error = function (...message: any[]) {
    originalConsole.error(...message);
    logToFile(`ERROR`, ...message);
};

console.warn = function (...message: any[]) {
    originalConsole.warn(...message)
    logToFile(`WARNING`, ...message);
}

if (!fs.existsSync(FOLDER_PATH)) {
    fs.mkdirSync(FOLDER_PATH, {recursive: true});
}

export function logToFile(level: string, ...message: any[]) {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = (currentDate.getMonth() + 1) > 9 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`;
    const year =  currentDate.getFullYear();
    const fileName = `${date}-${month}-${year}.log`;
    if (!fs.existsSync(`${FOLDER_PATH}/${fileName}`)) {
        fs.writeFileSync(`${FOLDER_PATH}/${fileName}`, '');
    }
    fs.appendFile(`${FOLDER_PATH}/${fileName}`, `${new Date().toISOString()} ${level}: ${message}\n`, (err) => {
        if (err) {
            originalConsole.error('ERROR WRITING TO LOG FILE:', err);
        }
    });
}
