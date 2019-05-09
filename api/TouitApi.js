/*\
------------------------------------------------------------------------------
TouitAPI.js
------------------------------------------------------------------------------
Cette classe sert à gérer tous les échanges d'informations avec l'API
------------------------------------------------------------------------------
\*/

/*\
Imports
------------------------------------------------------------------------------
\*/
import {
    API_PROTOCOL,
    API_DOMAIN,
    API_PORT,
    API_SEND_PATH,
    API_LIST_PATH,
} from './apiParams';

/*\
Classe
------------------------------------------------------------------------------
\*/
class TouitApi {

    /**
     * Récupération des messages
     */
    httpGetMessages(timestamp, callback) {
        const request = new XMLHttpRequest();
        request.open('GET', API_PROTOCOL + API_DOMAIN + API_PORT + API_LIST_PATH + '?ts=' + encodeURIComponent(timestamp), true);
        request.addEventListener('readystatechange', function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.send();
    }

    /**
     * Envoie des nouveaux messages
     */
    httpSendMessage(name, message, callback) {
        const request = new XMLHttpRequest();
        request.open('POST', API_PROTOCOL + API_DOMAIN + API_PORT + API_SEND_PATH, true);
        request.addEventListener('readystatechange', function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('name=' + encodeURIComponent(name) + '&message=' + encodeURIComponent(message));
    }
}

/*\
Export
------------------------------------------------------------------------------
\*/
export default TouitApi;
