import "./mylabel.css";
import { CustomBackgroundColor } from '../stories/components/MyLabel.stories';

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

export const MyLabel = ({
  label = "no label",
  size = "h2",
  allCaps,
  color,
  FontColor="#5517ac",
  backgroundColor= 'transparent'
}: MyLabelProps) => {
  return (
    <span className={`${size} text-${color}`} style={{color: FontColor, backgroundColor}}>
      {!allCaps ? label : label.toUpperCase()}
    </span>
  );
};
