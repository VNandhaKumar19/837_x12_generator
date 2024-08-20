import { DateString, Email, RawDateString, RawHourString } from "../models/common.model";

export const isString = (value: any): value is string => typeof value === 'string';
export const isNumberString = (value: any): value is string => typeof value === 'string' && /^\d+$/.test(value);
export const isNumber = (value: any): value is string => typeof value === 'number';
export const isEmail = (value: any): value is Email => isString(value) && /\S+@\S+\.\S+/.test(value);
export const isArray = <T>(value: any, validator: (item: any) => item is T): value is T[] => Array.isArray(value) && value.every(validator);
export const isOptional = <T>(validator: (value: any) => value is T) => (value: any): value is T | undefined => value === undefined || validator(value);
export const isAny = (value: any): value is any => true;

/**
 * Validator for RawDateString type (YYYYMMDD)
 */
export function isRawDateString(value: string): value is RawDateString {
    return /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(value);
}

/**
 * Validator for DateString type (YYYY-MM-DD)
 */
export function isDateString(value: string): value is DateString {
    return /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(value);
}

/**
 * Validator for RawHourString type (hhmm)
 */
export function isRawHourString(value: string): value is RawHourString {
    return /^(0\d|1\d|2[0-3])[0-5]\d$/.test(value);
}