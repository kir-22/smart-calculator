class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.val=initialValue;
  }

  add(number) {
    // your implementation
    this.val += `+${number}`;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.val += `-${number}`;
    return this;
  }

  multiply(number) {
    // your implementation
    this.val += `*${number}`;
    return this;
  }

  devide(number) {
    // your implementation
    this.val += `/${number}`;
    return this;
  }

  pow(number) {
    // your implementation
    this.val += `**${number}`; 
    return this;
  }
  toString(){
    //преобразуем строку в число, метод должен вызываться автоматически
    return eval(this.val);
  }
}

module.exports = SmartCalculator;
