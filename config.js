const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y6rOBT8F78mfQlkASK1NEBIWLIRso/mwYABh7WxgZBW/n1E0q2+I82908OTZeM65ao65x2kGSbIRA0Yv4O8wBWkqF3SJkdgDOTS91EBusCDFIIxyJYlLCNmchUoakzD47XLwL5B1+xs4gqRjng952WSQi1WX8G9C/LSibH7G0BWqGZMdihwEfRn/d5GGZw2OA6cnSkiLBGIfYmsGHUk3wav4N4iQlzgNFDzECWogLGJmjXExffoKwtvNfUDk1HP7Gq57K+V3W6Nj1EdWKY6Pyed1FfNbKXKae979E2dHJiCViWbT/t5Hk5PvB0OLq45DbYTlhwstYnVQ3jIo+BJn+AgRZ7uoZRi2nxb944swPlVK2Mj6sxZlz/LTHkLaXnuvUWczxdH3UbQOfL91Poe8co+G+jcKNIww4zG8fpipM8jbqqYs4s12yzFTLvZ+dzhD6efia+Lz6xE/0f3N9lPznCtOuIpgYFhEZpM413gx8KS7EpyOQUbfR01c2M/+B79XQ9V/OBaQRSE+0iFI8Fy7F5P4ypbjpPi4K9no2Oy6pSp8EUf0rL4HUshX3GjEWKMPrXe5njD6t6K7pjUvBpmHCyDsqONvA0br3UtcnjH3mw2Mr42fsYeto3cOVfJcMZVJOs3bEDq49YYBooivT5eFKFG98CYvXdBgQJMaAEpztLHHtsF0Kts5BaIPtQFFm3Wy/C2wfJ6KPAXjdmHXD01Lg7myo4hb/ylrpzEBTqRxSvogrzIXEQI8jRMaFY0C0QIDBAB4z//6oIUXenTt7Zan+0CHxeE7tIyjzPofZr6eQhdNytTajepq7QLVIBx72sbUYrTgLQyliks3BBXSAkhJWDsw5igexd4qMIuavGAR62Ks0fUthShbxlBJaJtVbeUwyx9/sIil3c5v/fC+v7gZeAh90UcCN6LA/uI5QR2hDgEugB/tEx755cOSvUFKnCi1VLMiJTSnM4oDYZrousPF57SowJ5YEyLEnWBA92ozLdZhNLf4OaKbZbXjcd1NrJWejKzF2zn6mQj62fcp6Vg/P41ppTMa/EOnDmbzK0B6ILkkUDcvlwc8JzIi8NRbzge8X+QH3WrI8zzHymiLeyH5u0FD1GIY9LOsPVR6JwkTTUmo8KpZzNpF0hKIIEvjz6z/gyTvpjCsHF7jQx3+1sjKVKQHuI1t8/LTDptydQ5ulejlpqZ+vovIGAMtDctD7iNb1bW0BWP+/PkbR46577BnLE7q3fiFZXbN32vpgxebt3BYuo5iw61dOG619VyuTIsZVBOECssLEaILd3WplL92lZ7ZuUfxZSJWGmH0F6PAsGqo7k1P+4bbqPWt2M9qVW5Sa9TYXlJRkkjR6d4strzDL/grC059fpyUpwkRDIynd3WzG146UTqaa3Uzy58TIH4Y/riR4O8fyTLx+gxzFLYOvQf3vyc8d69+xPEx3T8RY5keyIfMjddLoJDPHWFQAp0g823YgydN2mm8vKB7S9sV1qEIbjf/+qCPIbUz4oEjAFMvSLDHuiCGBIqfbXpFieIUJjkYMzyfZ4VB7zQ64KkkfLcppB+djeQHt9OBve/Ad3r+cP4BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ꜱᴛᴀᴛᴜꜱ ᴋɪɴɢ ᴍᴀᴅᴜ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " ꜱᴛᴀᴛᴜꜱ ᴋɪɴɢ",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ꜱᴛᴀᴛᴜꜱ ᴋɪɴɢ ᴍᴀᴅᴜ ᴍᴅ',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'Recording',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

