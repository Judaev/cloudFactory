import React, {FunctionComponent, memo} from 'react';
import {Text, View} from 'react-native';

interface IQuotesItem {
  currencyPair: any;
  lastTradePrice: number;
  lowestAsk: any;
  highestBid: any;
  percentChange: any;
}

const QuotesItem: FunctionComponent<IQuotesItem> = function QuotesItem({
  currencyPair,
  lastTradePrice,
  lowestAsk,
  highestBid,
  percentChange,
}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{borderWidth: 1}}>{currencyPair}</Text>
      <Text style={{borderWidth: 1}}>{Number(lastTradePrice).toFixed(1)}</Text>
      <Text style={{borderWidth: 1}}>{Number(lowestAsk).toFixed(1)}</Text>
      <Text style={{borderWidth: 1}}>{Number(highestBid).toFixed(1)}</Text>
      <Text style={{borderWidth: 1}}>{Number(percentChange).toFixed(1)}</Text>
    </View>
  );
};

export default QuotesItem;
