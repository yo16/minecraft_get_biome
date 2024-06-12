import type { DimensionType } from "./Biomes.d";
import type { BiomeNoise } from "./BiomeNoise.d";

export type Generator = {
    mc: number;
    dim: DimensionType;
    flags: number;
    seed: BigInt;
    sha: BigInt;
    bn: BiomeNoise;         // MC1.18
    // nn: NetherNoise;     // MC 1.16
    // en: EndNoise;        // MC 1.9
};
