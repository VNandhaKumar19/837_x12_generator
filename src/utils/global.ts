export function getCurrentDate(type?: string) {
    let formattedDate
    const date = new Date().toISOString();
    if (type == 'isa') formattedDate = date.split('T')[0].replace(/-/g, '').slice(-6);
    else formattedDate = date.split('T')[0].replace(/-/g, '');
    return formattedDate;
}

export function getCurrentTime() {
    const date = new Date();
    const formattedTime = ('0' + date.getUTCHours()).slice(-2) + ('0' + date.getUTCMinutes()).slice(-2);
    return formattedTime;
}

export function getControlNumber() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}

export function formatObject(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
    const segmentString = Object.entries(obj)
        .map(([key, value]) => {
            return value !== "" && value !== null ? `${value}` : "";
        })
        .join("*");
    return segmentString;
}