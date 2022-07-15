/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * this is the principal message on component
     */
    label: string;
    /**
     *  this is the options of size for the component
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     *  this is the color  for the component
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     *  this is the option for to uppercase text
     */
    allCaps?: true | false;
    /**
    *  this is the option for custom color
    */
    FontColor?: string;
    /**
    *  background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, FontColor, backgroundColor }: MyLabelProps) => JSX.Element;
