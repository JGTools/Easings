export function linear(t: number): number {
    return t;
}
export function inQuad(t: number): number {
    return t * t;
}
export function outQuad(t: number): number {
    return t * (2 - t);
}
export function inOutQuad(t: number): number {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
export function inCubic(t: number): number {
    return t * t * t;
}
export function outCubic(t: number): number {
    return (--t) * t * t + 1;
}
export function inOutCubic(t: number): number {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
export function inQuart(t: number): number {
    return t * t * t * t;
}
export function outQuart(t: number): number {
    return 1 - (--t) * t * t * t;
}
export function inOutQuart(t: number): number {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
}
export function inQuint(t: number): number {
    return t * t * t * t * t;
}
export function outQuint(t: number): number {
    return 1 + (--t) * t * t * t * t;
}
export function inOutQuint(t: number): number {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
}
export function inElastic(t: number): number {
    return .04 * t / (--t) * Math.sin(25 * t);
}
export function outElastic(t: number): number {
    return (.04 - .04 / t) * Math.sin(25 * t) + 1;
}
export function inOutElastic(t: number): number {
    return (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1;
}