export class NumberUtils {

  /**
   * Return the number corresponding to a string under 10.
   *
   * @param str - The string to convert into number.
   */
  static stringToNumbers(str: string): number {
    switch (str) {
      case 'one':
        return 1;
      case 'two':
        return 2;
      case 'three':
        return 3;
      case 'four':
        return 4;
      case 'five':
        return 5;
      case 'six':
        return 6;
      case 'seven':
        return 7;
      case 'height':
        return 8;
      case 'nine':
        return 9;
    }
  }
}
