
import { MCVersion, Dimension } from "./Biomes.d";
import type { MCVersionType } from "./Biomes.d";
import { initBiomeNoise } from "./BiomeNoise";
import type { Generator } from "./Generator.d";


export function setupGenerator(
    //g: Generator,
    mc: MCVersionType,
    flags: number,
): Generator {
    const g: Generator = {
        mc: mc? mc: MCVersion.MC_NEWEST,
        dim: Dimension.DIM_OVERWORLD,
        flags: flags,
        seed: BigInt(0),
        sha: BigInt(0),
    };

    if (mc >= MCVersion.MC_1_18) {
        initBiomeNoise(g.bn, mc);
    } else {
        throw new Error("Not yet implemented.");
    }

    return g;
}



