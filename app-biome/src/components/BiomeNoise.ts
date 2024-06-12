import type { BiomeNoise, Spline, FixSpline, SplineStack } from "./BiomeNoise.d";
import { initializeSplineStack } from "./BiomeNoise.d";
import { lerp } from "./rng.d";

enum TerrainType {
    SP_CONTINENTALNESS,
    SP_EROSION,
    SP_RIDGES,
    SP_WEIRDNESS,
};


export function initBiomeNoise(
    bn: BiomeNoise,
    mc: number,
) {
    bn.ss = initializeSplineStack();
    const ss: SplineStack = bn.ss;
    const sp: Spline = bn.ss.stack[bn.ss.len++];
    sp.typ = TerrainType.SP_CONTINENTALNESS;

    const sp1: Spline = createLandSpline(bn.ss, -0.15, 0.00, 0.0, 0.1, 0.00, -0.03, 0);
    const sp2: Spline = createLandSpline(bn.ss, -0.10, 0.03, 0.1, 0.1, 0.01, -0.03, 0);
    const sp3: Spline = createLandSpline(bn.ss, -0.10, 0.03, 0.1, 0.7, 0.01, -0.03, 1);
    const sp4: Spline = createLandSpline(bn.ss, -0.05, 0.03, 0.1, 1.0, 0.01,  0.01, 1);

    addSplineVal(sp, -1.10, createFixSpline(ss,  0.044), 0.0);
    addSplineVal(sp, -1.02, createFixSpline(ss, -0.2222), 0.0);
    addSplineVal(sp, -0.51, createFixSpline(ss, -0.2222), 0.0);
    addSplineVal(sp, -0.44, createFixSpline(ss, -0.12), 0.0);
    addSplineVal(sp, -0.18, createFixSpline(ss, -0.12), 0.0);
    addSplineVal(sp, -0.16, sp1, 0.0);
    addSplineVal(sp, -0.15, sp1, 0.0);
    addSplineVal(sp, -0.10, sp2, 0.0);
    addSplineVal(sp,  0.25, sp3, 0.0);
    addSplineVal(sp,  1.00, sp4, 0.0);

    bn.sp = sp;
    bn.mc = mc;
}


function createLandSpline(
    ss: SplineStack,
    f: number,
    g: number,
    h: number,
    i: number,
    j: number,
    k: number,
    bl: number
): Spline {
    const sp1: Spline = createSpline_38219(ss, lerp(i, 0.6, 1.5), bl);
    const sp2: Spline = createSpline_38219(ss, lerp(i, 0.6, 1.0), bl);
    const sp3: Spline = createSpline_38219(ss, i, bl);
    const ih: number = 0.5 * i;
    const sp4: Spline = createFlatOffsetSpline(ss, f-0.15, ih, ih, ih, i*0.6, 0.5);
    const sp5: Spline = createFlatOffsetSpline(ss, f, j*i, g*i, ih, i*0.6, 0.5);
    const sp6: Spline = createFlatOffsetSpline(ss, f, j, j, g, h, 0.5);
    const sp7: Spline = createFlatOffsetSpline(ss, f, j, j, g, h, 0.5);

    const sp8: Spline = ss.stack[ss.len++];
    sp8.typ = TerrainType.SP_RIDGES;
    addSplineVal(sp8, -1.0, createFixSpline(ss, f), 0.0);
    addSplineVal(sp8, -0.4, sp6, 0.0);
    addSplineVal(sp8,  0.0, createFixSpline(ss, h + 0.07), 0.0);

    const sp9: Spline = createFlatOffsetSpline(ss, -0.02, k, k, g, h, 0.0);
    const sp: Spline = ss.stack[ss.len];
    sp.typ = TerrainType.SP_EROSION;
    addSplineVal(sp, -0.85, sp1, 0.0);
    addSplineVal(sp, -0.7,  sp2, 0.0);
    addSplineVal(sp, -0.4,  sp3, 0.0);
    addSplineVal(sp, -0.35, sp4, 0.0);
    addSplineVal(sp, -0.1,  sp5, 0.0);
    addSplineVal(sp,  0.2,  sp6, 0.0);
    if (bl === 0) {
        addSplineVal(sp, 0.4,  sp7, 0.0);
        addSplineVal(sp, 0.45, sp8, 0.0);
        addSplineVal(sp, 0.55, sp8, 0.0);
        addSplineVal(sp, 0.58, sp7, 0.0);
    }
    addSplineVal(sp, 0.7, sp9, 0.0);
    return sp;
}


function createSpline_38219(
    ss: SplineStack,
    f: number,
    bl: number
): Spline {
    const sp: Spline = ss.stack[ss.len++];
    sp.typ = TerrainType.SP_RIDGES;

    const i: number = getOffsetValue(-1.0, f);
    const k: number = getOffsetValue(-1.0, f);
    let   l: number = 1.0 - (1.0 - f) * 0.5;
    let   u: number = 0.5 * (1.0 - f);
    l = u / (0.46082947 * l) - 1.17;

    if (-0.65 < l && l < 1.0) {
        u = getOffsetValue(-0.65, f);
        const p: number = getOffsetValue(-0.75, f);
        const q: number = (p - i) * 4.0;
        const r: number = getOffsetValue(l, f);
        const s: number = (k - r) / (1.0 - l);

        addSplineVal(sp, -1.0,      createFixSpline(ss, i), q);
        addSplineVal(sp, -0.75,     createFixSpline(ss, p), 0);
        addSplineVal(sp, -0.65,     createFixSpline(ss, u), 0);
        addSplineVal(sp, l - 0.01,  createFixSpline(ss, r), 0);
        addSplineVal(sp, l,         createFixSpline(ss, r), s);
        addSplineVal(sp, 0.1,       createFixSpline(ss, k), s);
    }
    else
    {
        u = (k - i) * 0.5;
        if (bl === 0) {
            addSplineVal(sp, -1.0,  createFixSpline(ss, i), u);
            addSplineVal(sp, 0.0,   createFixSpline(ss, lerp(0.5, i, k)), u);
        } else {
            addSplineVal(sp, -1.0,  createFixSpline(ss, i), u);
        }
        addSplineVal(sp, 1.0,       createFixSpline(ss, k), u);
    }
    return sp;

}


function getOffsetValue(weirdness: number, continentalness: number): number
{
    const f0: number = 1.0 - (1.0 - continentalness) * 0.5;
    const f1: number = 0.5 * (1.0 - continentalness);
    const f2: number = (weirdness + 1.17) * 0.46082947;
    const off: number = f2 * f0 - f1;
    if (weirdness < -0.7) {
        return off > -0.2222 ? off : -0.2222;
    } else {
        return off > 0 ? off : 0;
    }
}


function addSplineVal(rsp: Spline, loc: number, val: Spline | FixSpline, der: number) {
    rsp.loc[rsp.len] = loc;
    rsp.val[rsp.len] = val;
    rsp.der[rsp.len] = der;
    rsp.len++;
}


function createFixSpline(ss: SplineStack, val: number): FixSpline {
    const sp: FixSpline = ss.fstack[ss.flen++];
    sp.len = 1;
    sp.val = val;
    return sp;
}


function createFlatOffsetSpline(
    ss: SplineStack,
    f: number,
    g: number,
    h: number,
    i: number,
    j: number,
    k: number
): Spline {
    const sp: Spline = ss.stack[ss.len++];
    sp.typ = TerrainType.SP_RIDGES;

    let l: number = 0.5 * (g - f);
    if (l < k) { l = k; }
    const m: number = 5.0 * (h - g);

    addSplineVal(sp, -1.0, createFixSpline(ss, f), l);
    addSplineVal(sp, -4.0, createFixSpline(ss, g), l < m ? l : m);
    addSplineVal(sp,  0.0, createFixSpline(ss, h), m);
    addSplineVal(sp,  0.4, createFixSpline(ss, i), 2.0*(i-h));
    addSplineVal(sp,  1.0, createFixSpline(ss, j), 0.7*(j-i));

    return sp;
}
