import type { Canvas } from "@napi-rs/canvas";
import type { Readable } from "stream";

export interface Text2PngOptions {
    /**
     * CSS style font
     * @default "30px sans-serif"
     */
    font?: string;
    textAlign?: "left" | "center" | "right";
    /**
     * @default "black"
     */
    color?: string;
    /**
     * @default "black"
     */
    textColor?: string;
    bgColor?: string;
    backgroundColor?: string;
    /**
     * @default 0
     */
    lineSpacing?: number;
    /**
     * @default 0
     */
    strokeWidth?: number;
    /**
     * @default "white"
     */
    strokeColor?: string;
    /**
     * @default 0
     */
    padding?: number;
    /**
     * @default 0
     */
    paddingLeft?: number;
    /**
     * @default 0
     */
    paddingTop?: number;
    /**
     * @default 0
     */
    paddingRight?: number;
    /**
     * @default 0
     */
    paddingBottom?: number;
    /**
     * @default 0
     */
    borderWidth?: number;
    /**
     * @default 0
     */
    borderLeftWidth?: number;
    /**
     * @default 0
     */
    borderTopWidth?: number;
    /**
     * @default 0
     */
    borderRightWidth?: number;
    /**
     * @default 0
     */
    borderBottomWidth?: number;
    /**
     * @default "black"
     */
    borderColor?: string;
    localFontPath?: string;
    localFontName?: string;
    /**
     * @default "buffer"
     */
    output?: "buffer" | "stream" | "dataURL" | "canvas";
}

export function text2png(text: string, options?: Text2PngOptions): Buffer;
export function text2png(text: string, options?: Text2PngOptions & {
    output: "stream"
}): Readable;
export function text2png(text: string, options?: Text2PngOptions & {
    output: "dataURL"
}): string;
export function text2png(text: string, options?: Text2PngOptions & {
    output: "canvas"
}): Canvas;
export default text2png;