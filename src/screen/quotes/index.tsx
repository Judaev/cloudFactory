import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {ScrollView, Text, View} from 'react-native';
import QuotesItem from '../../components/QuotesItem';
import {rws} from '../../configuration/websocket';
import wssdataserv from '../../rx';

const QuotesScreen: FunctionComponent = function QuotesScreen() {
  const [currencyList, setCurrencyList] = useState<any>([]);

  useEffect(() => {
    const time = setInterval(() => {
      setCurrencyList(
        Array.from(wssdataserv.currencyMap).filter(item => {
          return (
            [322, 573, 609, 615, 626, 631, 656, 497, 606, 581].indexOf(
              item[0],
            ) !== -1
          );
        }),
      );
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const renderItem = useCallback(
    (item, index) => {
      return (
        <QuotesItem
          key={index}
          currencyPair={item[0]}
          lastTradePrice={item[1][1]}
          lowestAsk={item[1][2]}
          highestBid={item[1][3]}
          percentChange={item[1][4]}
        />
      );
    },
    [currencyList],
  );

  return (
    <ScrollView style={{paddingHorizontal: 20}}>
      <Text>{rws.OPEN}</Text>
      <Text>ticket, last, hight, percentChange</Text>
      <View style={{height: 25}} />
      {currencyList.map(renderItem)}
    </ScrollView>
  );
};

export default QuotesScreen;

// .filter(item => {
//   return [322].indexOf(item[0]) !== -1;
// }),
