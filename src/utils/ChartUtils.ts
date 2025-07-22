import { ThemeType } from "@/theme";

/**
 * Calculates percentage from value and max, clamps to [0–100]
 */
export function getPercent(value: number,maxValue: number): number{
    const percent = (value/maxValue) * 100;
    return Math.min(100,Math.max(0,Math.round(percent))); 
};

/**
 * Maps percent to a theme color based on threshold
 */
export function getColorFromPercent(percent: number,threshold:{green:number,orange:number,red:number},theme:ThemeType,invert:boolean = false): string{
    if (invert) {
        if (percent <= threshold.green) return theme.colors.error;
        if (percent <= threshold.orange) return theme.colors.warning;
        return theme.colors.success;
  } else {
        if (percent <= threshold.green) return theme.colors.success;
        if (percent <= threshold.orange) return theme.colors.warning;
        return theme.colors.error;
  }
}
