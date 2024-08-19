import { formatObject } from "../../../utils/global";
import { generate2010BA } from "./2010BA";
import { generate2010BB } from "./2010BB";


export function generate2000B(claimData: any, payerAddress: any) {
    let data =
        [
            {
                "Segment": "HL",
                "HierarchicalIDNumber": "2",
                "HierarchicalParentIDNumber": "1",
                "HierarchicalLevelCode": "22",
                "HierarchicalChildCode": "1"
            },
            { "loop2010BA": generate2010BA(claimData?.subscriber, claimData?.dependent, claimData?.claimInformation) },
            { "loop2010BB": generate2010BB(claimData, payerAddress) }

        ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}