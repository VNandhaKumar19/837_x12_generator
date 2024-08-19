import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";
import { generate2010AA } from "./2010AA";


export function generate2000A(provider: Provider) {
    let data = [
        {
            "Segment": "HL",
            "HierarchicalIDNumber": "1",
            "HierarchicalParentIDNumber": "",
            "HierarchicalLevelCode": "20",
            "HierarchicalChildCode": "1"
        },
        {
            "loop2010AA": generate2010AA(provider)
        }
    ]

    

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}