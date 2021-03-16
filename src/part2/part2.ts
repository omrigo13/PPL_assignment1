import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (s: string) => number = (s) => {
    const lowerArr: string[] = stringToArray(s.toLowerCase());
    const vowelsArr: string[] = lowerArr.filter((cur: string): boolean => (cur === 'a' || cur === 'e' || cur === 'i' || cur === 'o' || cur === 'u'));
    return vowelsArr.length;
};

/* Question 2 */
export const runLengthEncoding = undefined;

/* Question 3 */
export const isPaired = undefined;