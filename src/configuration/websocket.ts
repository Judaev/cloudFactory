import {sha512} from 'js-sha512';
import ReconnectingWebSocket from 'reconnecting-websocket';
import wssdataserv from '../rx';

const options = {
  connectionTimeout: 1000,
  maxRetries: 10,
};

export const rws = new ReconnectingWebSocket(
  'wss://api2.poloniex.com',
  [],
  options,
);

const nonce = new Date().getTime();

const currentSign = sha512
  .update(
    '9d5b416ba4dbe3bb02678e5edc940d510fdc552399dd4e079dfa5de759b9a340693964b68046b1ee0981b07517d3f6f3666fb631ef96ed677fe6a0de1d47ccc1',
  )
  .update('nonce=' + nonce)
  .hex();

const subData = {
  command: 'subscribe',
  channel: '1002',
  sign: currentSign,
  payload: 'nonce=' + nonce,
  key: 'F5UHYF99-OORU5XKR-NJ56ELMU-L4YBK5YU',
};

rws.onopen = () => {
  rws.send(JSON.stringify(subData));
};

rws.onmessage = data => {
  wssdataserv.updateCurrencyMap(data);
};
