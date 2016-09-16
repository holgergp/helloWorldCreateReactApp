import React, { Component } from 'react';

import Text from './Text';

let DetailedText = (props) => <pre><Text greeter={props.greeter}></Text><span>{props.detail}</span></pre>

export default DetailedText;
