import { hcl } from 'd3-color';

// converting hue to colour 
export function colorFromHue(hue: number): string {
    return hcl(hue, 70, 60).toString(); // fixed Chroma and Lightness
  }

//offsets
const OFFSETS = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 120, 150, 180];
  
// generating colours from offsets 

export function generateOffsets() {
  // Step 1: Pick a random base hue once
  const baseHue = Math.floor(Math.random() * 360);

  // Step 2: Generate 14 stimuli with different hues based on offsets
  const stimuli = OFFSETS.map(offset => {
    const hue = (baseHue + offset) % 360;
    const colour = hcl(hue, 70, 60);
    return {
      offset,
      hue,
      cssColor: colour.toString(),
    };
  });
  return stimuli;
}


      