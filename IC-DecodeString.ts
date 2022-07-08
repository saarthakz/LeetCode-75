function decodeString(str: string): string {

  const strStack = new Array<string>();
  const multiplierStack = new Array<string>();
  const ctrStack = new Array<number>();

  let ctr = 0;

  for (let idx = 1; idx < str.length; idx++) {
    if (str[idx] == "[") {
      multiplierStack.push(str[idx - 1]);
      ctr = 0;
    };

    if (str[idx] == "]") {
      const multiplier = Number(multiplierStack.pop());
      let ctr = Number(ctrStack.pop());
      let tempString = new Array<string>();

      while (ctr > 0) {
        tempString.push(String(strStack.pop()));
        ctr -= 1;
      };


    }
  };

};

