/**
 * The function getCurrentDate returns the current date in a specified format, defaulting to YYYYMMDD.
 * @param {string} [type] - The `type` parameter in the `getCurrentDate` function is an optional
 * parameter that specifies the format in which the current date should be returned. If the `type` is
 * set to 'isa', the date will be formatted as YYMMDD, removing the hyphens and only keeping the last
 * @returns The `getCurrentDate` function returns the current date in a formatted string based on the
 * optional `type` parameter. If the `type` parameter is 'isa', the function returns the date in a
 * specific format with the last 6 characters of the date string after removing hyphens. Otherwise, it
 * returns the date string without hyphens.
 */
export function getCurrentDate(type?: string) {
    let formattedDate
    const date = new Date().toISOString();
    if (type == 'isa') formattedDate = date.split('T')[0].replace(/-/g, '').slice(-6);
    else formattedDate = date.split('T')[0].replace(/-/g, '');
    return formattedDate;
}

/**
 * The function getCurrentTime returns the current time in UTC format with hours and minutes
 * concatenated.
 * @returns The `getCurrentTime` function returns the current time in UTC format without colons, for
 * example, "HHMM" where HH represents hours and MM represents minutes.
 */
export function getCurrentTime() {
    const date = new Date();
    const formattedTime = ('0' + date.getUTCHours()).slice(-2) + ('0' + date.getUTCMinutes()).slice(-2);
    return formattedTime;
}

/**
 * The function `getControlNumber` generates a random 9-digit control number as a string.
 * @returns A randomly generated control number as a string.
 */
export function getControlNumber() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}

/**
 * The `formatObject` function takes an object or array and returns a string by joining non-empty and
 * non-null values with an asterisk delimiter.
 * @param {{ [s: string]: unknown; } | ArrayLike<unknown>} obj - The `formatObject` function takes an
 * object or an array-like object as its parameter. The function then iterates over the key-value pairs
 * of the object, checks if the value is not an empty string or null, and concatenates the values into
 * a string separated by "*". Finally, it returns
 * @returns The `formatObject` function returns a string that is created by joining the values of the
 * input object or array-like object with an asterisk (*) separator. The function filters out empty
 * strings and null values before joining the values.
 */
export function formatObject(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
    const segmentString = Object.entries(obj)
        .map(([key, value]) => {
            if (typeof value === "object" && value !== null) {
                return Object.values(value).filter(v => v !== "").join(":");
            }
            return value !== "" && value !== null ? `${value}` : "";
        })
        .join("*");
    return segmentString;
}