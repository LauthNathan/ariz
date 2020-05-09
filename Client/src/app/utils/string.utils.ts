export class StringUtils {
  /**
   * Check if the string contain an uppercase.
   *
   * @param str - The string to check.
   */
  static containUppercase(str: string): boolean {
    return !!str.match('[A-Z]');
  }

  /**
   * Check if the string contain a normal case.
   *
   * @param str - The string to check.
   */
  static containNormalCase(str: string): boolean {
    return !!str.match('[a-z]');
  }

  /**
   * Check if the string contain a number.
   *
   * @param str - The string to check.
   */
  static containNumber(str: string): boolean {
    return !!str.match('[0-9]');
  }

  /**
   * Check if the string contain 6 chars or more.
   *
   * @param str - The string to check.
   */
  static containSixChars(str: string): boolean {
    return str.length >= 6;
  }

  /**
   * Check if the string contain an uppercase, a normal case and a number.
   *
   * @param str - The string to check.
   */
  static checkPassword(str: string): boolean {
    return this.containUppercase(str) && this.containNormalCase(str) && this.containNumber(str) && this.containSixChars(str);
  }
}
