import htmlButtonResponse from "@jspsych/plugin-html-button-response";

export const circle_introduction = {
  type: htmlButtonResponse,
  stimulus: `
    <h2>Aufgabenerklärung</h2><br>
    <p>In dieser Aufgabe werden Ihnen jeweils zwei Farbkreise präsentiert. Sie müssen auf einer Skala
    von 1 bis 7 angeben, wie ähnlich die Farben der Kreise sind. <br>
    <br><b>7</b> bedeuted, dass die Farben <b>genau identisch</b> sind. <br>
    <br><b>1</b> bedeuted, dass die Farben <b>genau verschieden</b> sind.</p><br>

    <p>Damit Sie sich mit der Aufgabe vertraut machen können, folgen zuerst zwei Übungsrunden.</p><br>
  `,
  choices: ["Weiter"],
} as const;



