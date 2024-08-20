import { Dependent } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";
import { generate2010CA } from "./2010CA";

/**
 * The function `generate2000C` generates a formatted string based on input data for a dependent.
 * @param {Dependent} dependent - Dependent is an object that likely contains information about a
 * dependent individual, such as their name, relationship to the primary member, date of birth, etc.
 * @returns The `generate2000C` function is returning a formatted string that represents the data in
 * the `data` array. The data in the array is first mapped to a formatted string using the
 * `formatObject` function and then joined with a tilde (~) delimiter. The resulting string is then
 * returned by the function.
 */
export function generate2000C(dependent: Dependent) {
    let data =
        [
            {
                "Segment": "HL",
                "HierarchicalIDNumber": "3",
                "HierarchicalParentIDNumber": "2",
                "HierarchicalLevelCode": "23",
                "HierarchicalChildCode": "0"
            },
            { "loop2010CA": generate2010CA(dependent) },

        ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}