import React, {FunctionComponent, memo} from 'react';
import {Text, View} from 'react-native';

const AboutApplication: FunctionComponent = memo(function AboutApplication() {
  return (
    <View>
      <Text>About the application</Text>
    </View>
  );
});

export default AboutApplication;
