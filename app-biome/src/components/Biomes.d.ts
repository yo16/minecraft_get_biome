
export enum MCVersion {
    MC_UNDEF,
    MC_B1_7,
    MC_B1_8,
    MC_1_0_0,  MC_1_0  = MC_1_0_0,
    MC_1_1_0,  MC_1_1  = MC_1_1_0,
    MC_1_2_5,  MC_1_2  = MC_1_2_5,
    MC_1_3_2,  MC_1_3  = MC_1_3_2,
    MC_1_4_7,  MC_1_4  = MC_1_4_7,
    MC_1_5_2,  MC_1_5  = MC_1_5_2,
    MC_1_6_4,  MC_1_6  = MC_1_6_4,
    MC_1_7_10, MC_1_7  = MC_1_7_10,
    MC_1_8_9,  MC_1_8  = MC_1_8_9,
    MC_1_9_4,  MC_1_9  = MC_1_9_4,
    MC_1_10_2, MC_1_10 = MC_1_10_2,
    MC_1_11_2, MC_1_11 = MC_1_11_2,
    MC_1_12_2, MC_1_12 = MC_1_12_2,
    MC_1_13_2, MC_1_13 = MC_1_13_2,
    MC_1_14_4, MC_1_14 = MC_1_14_4,
    MC_1_15_2, MC_1_15 = MC_1_15_2,
    MC_1_16_1,
    MC_1_16_5, MC_1_16 = MC_1_16_5,
    MC_1_17_1, MC_1_17 = MC_1_17_1,
    MC_1_18_2, MC_1_18 = MC_1_18_2,
    MC_1_19_2,
    MC_1_19,    // 1.19.3 - 1.19.4
    MC_1_20,
    MC_1_21,
    MC_NEWEST = MC_1_21,
};
export type MCVersionType = MCVersion;

export enum Dimension {
    DIM_NETHER = -1,
    DIM_OVERWORLD = 0,
    DIM_END = 1,
    DIM_UNDEF = 1000,
};
export type DimensionType = Dimension;
