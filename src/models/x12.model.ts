export const segments = [
    'ISA', 'GS', 'ST', 'BHT', 'NM1', 'PER', 'CLM', 'N3', 'N4', 'REF', 'PRV', 'LX', 'SV2', 'DTP', 'PWK', 'SVD', 'CAS', 'HL', 'PAT', 'DMG', 'SBR', 'SE', 'GE', 'IEA'
] as const;

export type Segments = typeof segments[number];

export const loops = [
    '1000A', '1000B', '2000A', '2000B', '2000C', '2300', '2310A', '2310B', '2310D', '2310E', '2310F', '2310G', '2400'
] as const;
export type Loops = typeof loops[number];

const segmentsAndLoops = [...segments, ...loops] as const;

export type SegmentsAndLoops = typeof segmentsAndLoops[number];
