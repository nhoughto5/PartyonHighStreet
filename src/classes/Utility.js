export default class Utility {
  static randomNumFromRange(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  static randomHexNum() {
    return Math.floor(Math.random() * 16777215);
  }

  static randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  static getDOMHeight() {
    const { body, documentElement } = document;

    return Math.max(
      body.scrollHeight, body.offsetHeight,
      documentElement.clientHeight, documentElement.scrollHeight, documentElement.offsetHeight,
    );
  }

  static getRandomIntFromRange(min, max) {
    return parseInt(Utility.randomNumFromRange(min, max), 10);
  }
}
