import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRAte) {
    return amount * conversionRAte;
  }
}
