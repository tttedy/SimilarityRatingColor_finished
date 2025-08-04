import htmlButtonResponse from "@jspsych/plugin-html-button-response";

export const end_page = {
  type: htmlButtonResponse,
  stimulus: `
    <h2>Vielen Dank für Ihre Teilnahme!</h2>
    <p>Klicken Sie auf <b>Schliessen</b>, um das Experiment zu beenden.</p>
  `,
  choices: ["Schliessen"],
  on_finish: () => {
    try {
      window.close();
    } catch (e) {
      console.warn("Fenster konnte nicht geschlossen werden.");
    }
  }
};
