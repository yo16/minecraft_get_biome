export type PerlinNoise = {
    d: number;  //uint8_t d[256+1];
    h2: number; //uint8_t h2;
    a: number; //double a, b, c;
    b: number;
    c: number;
    amplitude: number; //double amplitude;
    lacunarity: number; //double lacunarity;
    d2: number; //double d2;
    t2: number; //double t2;
};
export type OctoveNoise = {
    octcnt: number; //int octcnt;
    octaves: PerlinNoise; //PerlinNoise *octaves;
}
export type DoublePerlinNoise = {
    amplitude: number; //double amplitude;
    octA: OctoveNoise;  //OctaveNoise octA;
    octB: OctaveNoise; //OctaveNoise octB;
};
