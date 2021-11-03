import {Subject} from 'rxjs';

class WssData {
  data = new Subject<any>();
  currencyMap = new Map<any, any>();
  updateCurrencyMap(data: any) {
    const currencyData = JSON.parse(data.data);

    const quote = currencyData[2];
    const currencyPairId = quote && quote[0];
    // const currencyPairId = quote && quote[0];
    const packetType = currencyData[0];

    console.log(currencyData);

    if (packetType === 1002) {
      this.currencyMap.set(currencyPairId, quote);
    }
  }
}

const wssdataserv = new WssData();

export default wssdataserv;
