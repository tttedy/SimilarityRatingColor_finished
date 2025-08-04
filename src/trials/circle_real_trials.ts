import SliderResponsePlugin from '@jspsych/plugin-html-slider-response';
import htmlButtonResponse from "@jspsych/plugin-html-button-response";
import { generateOffsets } from './colours';
import { colorFromHue } from './colours';
import { initJsPsych } from 'jspsych';

export const test_instructions = {
  type: htmlButtonResponse,
  stimulus: 
    `<h2><b>Jetzt beginnt das eigentliche Experiment.</b></h2>
    <p><b>Zur Erinnerung:</b><br><br>
      Wenn die Farben <b>genau gleich</b> sind, wählen Sie <b>7</b>.<br><br>
      Wenn die Farben <b>maximal verschieden</b> sind wählen Sie <b>1</b>.<br>
      <br>
      Ansonsten gehen Sie basierend nach der visuellen Ähnlichkeit intuitiv vor. 
    </p><br>`,
  choices: ["Weiter"],
} as const;

const stimuli = generateOffsets()

export const generateTrials = stimuli.map(stimulus => ({

    type: SliderResponsePlugin,
    stimulus: `
      <h3>Wie ähnlich sind sich diese Farben?</h3><br>
      <div style="display:flex; gap: 100px; justify-content:center; margin: 10px 0 40px 0;">
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue(stimulus.hue)};"></div>
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue((stimulus.hue + stimulus.offset) % 360)};"></div>
      </div>
    `,
    min: 1,
    max: 7,
    slider_start: 4,
    step: 1,
    slider_width: 300,
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    require_movement: true,
    button_label: "Weiter",
    data: {
      offset: stimulus.offset,
      hue: stimulus.hue,
      trialType: 'practice'
    }
  }));


const jsPsych = initJsPsych();

export function shuffledRepeatedTrials() {
  // repeat each trial 10 times and shuffle the resulting array
  return jsPsych.randomization.repeat(generateTrials, 10, false);
}







