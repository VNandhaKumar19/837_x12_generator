export type NumberString = `${number}`;

/**
 * The `StringObject` type in TypeScript represents an object with string keys and values of any type.
 * @property {any} [key: any] - The `StringObject` type you have defined is an object type with string
 * keys and values of any type. This means that you can store any type of value with a string key in an
 * object of type `StringObject`.
 */
export type StringObject = {
    [key: string]: any
}

export type Email = `${string}@${string}.${string}`;

type oneToNine = 1|2|3|4|5|6|7|8|9
type zeroToNine = 0|1|2|3|4|5|6|7|8|9

/**
 * Years
 */
type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`

/**
 * Months
 */
type MM = `0${oneToNine}` | `1${0|1|2}`

/**
 * Days
 */
type DD = `${0}${oneToNine}` | `${1|2}${zeroToNine}` | `3${0|1}`

/**
 * YYYYMMDD
 */
export type RawDateString = `${YYYY}${MM}${DD}`;

/**
 * YYYY-MM-DD
 */
export type DateString = `${YYYY}-${MM}-${DD}`;

/**
 * Hours
 */
type hh = `0${zeroToNine}` | `1${zeroToNine}` | `2${0|1|2|3}`;

/**
 * Minutes
 */
type mm = `0${zeroToNine}` | `1${zeroToNine}` | `2${zeroToNine}` | `3${zeroToNine}` | `4${zeroToNine}` | `5${zeroToNine}`;

/**
 * hhmm
 */
export type RawHourString = `${hh}${mm}`;
