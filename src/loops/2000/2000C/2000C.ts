import { formatObject } from "../../../utils/global";
import { generate2010CA } from "./2010CA";

export function generate2000C(dependent: any) {
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