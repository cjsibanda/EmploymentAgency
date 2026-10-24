/************************************************************
* Maps a parking level number to its designed zone color code
*************************************************************/

export function getParkingArea(level: number): string {
    if (level === 1) return "GreenZone";
    if (level === 2) return "BlueZone";
    if (level === 3) return "RedZone";
    return "YellowZone";
}