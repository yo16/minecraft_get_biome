///============================================================================
///                               Arithmatic
///============================================================================


/* Linear interpolations（線形補間）
 */
export function lerp(part: number, from: number, to: number): number {
    return from + part * (to - from);
}

