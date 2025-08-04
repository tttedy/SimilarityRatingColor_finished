/**
 * @title CircleTask The name of the task
 * @description How similar are two color circles?
 * @author Chenyu Li and Hannah (Dames) Tschannen
 * @version 0.3.1
 *
 * 
 * @assets assets/
 */

// import stylesheets (.scss or .css).
import "../styles/main.scss";

// jsPsych official plugin
import preload from "@jspsych/plugin-preload";

// Global variables
import { jsPsych } from "./jsp";

// screens
import { welcome_screen } from "./instructions/welcome";
import { notice_screen } from "./instructions/consent"; //faster to check only 
// import { consent_screen, notice_screen } from "./instructions/consent"; actual code 
import { browser_screen } from "./instructions/browserCheck";
//import { fullMode_screen } from "./instructions/fullScreen";

// Introduction 
import { circle_introduction } from "./instructions/circle_instructions";

// Practice trial 
import { practice_trial_1, practice_trial_2 } from "./trials/circle_trials";

// Experiment
import { test_instructions, shuffledRepeatedTrials } from "./trials/circle_real_trials";


// Dankeschön 
import { end_page } from "./trials/end";

/**
 * This function will be executed by jsPsych Builder and is expected to run the jsPsych experiment
 *
 * @type {import("jspsych-builder").RunFunction}
 */
export async function run({
    assetPaths,
    input = {},
    environment,
    title,
    version,
  }) {
    // Initialize a timeline to hold the trials
    var timeline: any[] = [];
  
    // Preload assets
    const preload_screen = {
      type: preload,
      images: assetPaths.images,
      // audio: assetPaths.audio,
      // video: assetPaths.video,
    };  

     // Push all the screen slides into timeline
  // When you want to test the experiment, you can easily comment out the screens you don't want
  //timeline.push(preload_screen);
  timeline.push(welcome_screen);
  //timeline.push(consent_screen);
  timeline.push(notice_screen);
  timeline.push(browser_screen);
  // timeline.push(fullMode_screen);

  //timeline = timeline.concat(circle_instructions)
  timeline.push(circle_introduction); // new
  timeline.push(practice_trial_1); // new
  timeline.push(practice_trial_2); // new
  timeline.push(test_instructions); // new
  timeline.push(...shuffledRepeatedTrials()) // new
  timeline.push(end_page) //new

  await jsPsych.run(timeline);

  // Return the jsPsych instance so jsPsych Builder can access the experiment results (remove this
  // if you handle results yourself, be it here or in `on_finish()`)
  // return jsPsych;

  }

    