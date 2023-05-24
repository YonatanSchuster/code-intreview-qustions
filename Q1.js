/*  
in this code block i practice some js and react job intreview questions. 
i follow this video for example  https://www.youtube.com/watch?v=zue3lAZyAec&ab_channel=JustinLawrence

1. Q: how you would describe the diference betweem Context and State?
   A: State is at a component leve, where Context alllows as to share states thro the children components

2. Q: what is is the usually called when you like to pass down props like a bunch of chileds components?
   A: Props drilling

3. Q: what if we have a child component and the child component you want to trigger the state to change in the parent component
     How would you do that?
   A: we will have hook in the context provider or in the context that would change or effect that state,
      and then you would use that hook inside of the component that you would like to change the state

*/

import React from 'react';

export default function App() {
  const [longest, setLongest] = React.useState('');
  const [input, setInput] = React.useState('');

  const getLongestNonRepeatingChar = (str) => {
    let strArr = [];
    let subStr = '';

    for (let i = 0; i < str.length; i++) {
      let current = str[i];
      if (subStr.includes(current)) {
        strArr.push(subStr);
        subStr = current;
      } else {
        subStr += current;
      }
    }

    strArr.push(subStr);
    let maxLen = 0;
    let longestStr = '';

    for (let i = 0; i < strArr.length; i++) {
      let currentVal = strArr[i];
      if (currentVal.length > maxLen) {
        longestStr = currentVal;
        maxLen = currentVal.length; // Update maxLen as well
      }
    }
    setLongest(longestStr);
  };

  const handleButtonClick = () => {
    getLongestNonRepeatingChar(input);
  };

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleButtonClick}>Check</button>
      <h2>{longest}</h2>
    </div>
  );
}
