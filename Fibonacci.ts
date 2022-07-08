function fib(num: number) {
  function fibHelper(num: number, fibMap: Map<number, number>): number {
    if (num == 0 || num == 1) return num;

    if (fibMap.has(num)) return Number(fibMap.get(num));

    fibMap.set(num, fibHelper(num - 1, fibMap) + fibHelper(num - 2, fibMap));

    return Number(fibMap.get(num));
  };

  return fibHelper(num, new Map<number, number>());
};