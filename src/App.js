import React from 'react';
import './App.css';
import Text from './Text'
import DetailedText from './DetailedText'

let App = () =>(<div>
  <Text greeter="Hallo"></Text>
  <Text greeter="Hello"></Text>

  <DetailedText greeter="This" detail="is some detailed text"></DetailedText>
</div>);

export default App;
