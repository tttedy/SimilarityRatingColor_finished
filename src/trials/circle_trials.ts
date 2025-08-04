import SliderResponsePlugin from "@jspsych/plugin-html-slider-response";
import { colorFromHue } from "./colours";


export const practice_trial_1 = {
  type: SliderResponsePlugin,
    stimulus: `
      <h2>Übungsrunde 1</h2>
      <p>Wenn die Farben, wie in diesem Beispiel genau gleich sind, wählen Sie 7.</p>
      <div style="display:flex; gap: 100px; justify-content:center; margin: 10px 0 40px 0;">
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue(200)};"></div>
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue(200)};"></div>
      </div>
      <p><b>Wählen Sie jetzt 7.</b></p>
    `,
    min: 1,
    max: 7,
    slider_start: 4,
    step: 1,
    slider_width: 300,
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    require_movement: true,
    button_label: "Weiter",
    data: { practice: true, offset: 0 }
  };

export const practice_trial_2 = {
  type: SliderResponsePlugin,
    stimulus: `
      <h2>Übungsrunde 2</h2>
      <p>Wenn die Farben maximal unterschiedlich sind, wählen Sie 1.</p>
      <div style="display:flex; gap: 100px; justify-content:center; margin: 10px 0 40px 0;">
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue(150)};"></div>
        <div style="width:200px; height:200px; border-radius:50%; background-color: ${colorFromHue((150 + 180) % 360)};"></div>
      </div>
      <p><b>Wählen Sie jetzt 1.</b></p>
    `,
    min: 1,
    max: 7,
    slider_start: 4,
    step: 1,
    slider_width: 300,
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    require_movement: true,
    button_label: "Weiter",
    data: { practice: true, offset: 180 }
  }
