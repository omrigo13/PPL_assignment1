import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (s: string) => number = (s) => {
    const lowerArr: string[] = stringToArray(s.toLowerCase());
    const vowelsArr: string[] = lowerArr.filter((ch: string): boolean => (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'));
    return vowelsArr.length;
};

/* Question 2 */
export const runLengthEncoding = (s: string): string => {
    return stringToArray(s).reduce((acc: string, cur: string): string => acc[acc.length - 2] === cur ?
    acc.substring(0, acc.length - 1) + (Number(acc[acc.length - 1]) + 1) : acc + cur + 1, "").split('1').join('');
};

/* Question 3 */
export const isPaired = undefined;