export default class Easings {
    static linear(t: number): number {
        return t;
    }
    static InQuad(t: number): number {
        return t * t;
    }
    static OutQuad(t: number): number {
        return t * (2 - t);
    }
    static InOutQuad(t: number): number {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    static InCubic(t: number): number {
        return t * t * t;
    }
    static OutCubic(t: number): number {
        return (--t) * t * t + 1;
    }
    static InOutCubic(t: number): number {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    static InQuart(t: number): number {
        return t * t * t * t;
    }
    static OutQuart(t: number): number {
        return 1 - (--t) * t * t * t;
    }
    static InOutQuart(t: number): number {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    }
    static InQuint(t: number): number {
        return t * t * t * t * t;
    }
    static OutQuint(t: number): number {
        return 1 + (--t) * t * t * t * t;
    }
    static InOutQuint(t: number): number {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
    static InElastic(t: number): number {
        return .04 * t / (--t) * Math.sin(25 * t);
    }
    static OutElastic(t: number): number {
        return (.04 - .04 / t) * Math.sin(25 * t) + 1;
    }
    static InOutElastic(t: number): number {
        return (t -= .5) < 0 ? (.02 + .01 / t) * Math.sin(50 * t) : (.02 - .01 / t) * Math.sin(50 * t) + 1;
    }
}
