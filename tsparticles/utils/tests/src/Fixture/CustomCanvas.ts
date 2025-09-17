/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
import { type Canvas, createCanvas } from "canvas";

/**
 *
 * @param width -
 * @param height -
 * @returns the custom canvas
 */
export function createCustomCanvas(width: number, height: number): Canvas {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const canvas = createCanvas(width, height),
        augmentCanvas = canvas as any;

    augmentCanvas.offsetWidth = width;
    augmentCanvas.offsetHeight = height;
    augmentCanvas.tagName = "CANVAS";
    augmentCanvas.setAttribute = (qualifiedName: string, value: string): void => {
        augmentCanvas.style[qualifiedName] = value;
    };
    augmentCanvas.style = {
        height: `${height}px`,
        width: `${width}px`,
        setProperty(property: string, value: string | null, priority?: string): void {
            this[property] = priority ? `${value} !important` : value;
        },
        removeProperty(property: string): string {
            const value = this[property];

            delete this[property];

            return value as string;
        },
    };
    augmentCanvas.dataset = {};

    return canvas;
}
