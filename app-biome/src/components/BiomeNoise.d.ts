import type { PerlinNoise, DoublePerlinNoise } from "./noise.d"

export type Spline = {
    len: number; //int len, typ;
    typ: number;
    loc: number[]; //float loc[12];
    der: number[]; //float der[12];
    val: (Spline | FixSpline)[]; //Spline *val[12];
};
export function initializeSpline(): Spline {
    return {
        len: 0,
        typ: 0,
        loc: Array.from({ length: 12 }, (_) => 0),
        der: Array.from({ length: 12 }, (_) => 0),
        val: Array.from({ length: 12 }, (_) => 0),
    };
}

export type FixSpline = {
    len: number; //int len;
    val: number; //float val;
}
export function initilaizeFixSpilne(): FixSpline {
    return {
        len: 0,
        val: 0,
    };
}

export type SplineStack = {
    stack: Spline[]; //Spline stack[42];
    fstack: FixSpline[]; //FixSpline fstack[151];
    len: number; //int len, flen;
    flen: number;
}
export function initializeSplineStack(): SplineStack {
    return {
        stack: Array.from({ length: 42 }, (_) => initializeSpline()),
        fstack: Array.from({ length: 151 }, (_) => initializeFixSpline()),
        len: 0,
        flen: 0,
    };
}

export type BiomeNoise = {
    climate: DoublePerlinNoise[];
    oct: PerlinNoise[];
    sp: Spline;
    ss: SplineStack;
    nptype: number;
    mc: number;
}
