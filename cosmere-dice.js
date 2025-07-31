import { DiceSystem } from '../dice-so-nice/api.js';

// Import plot die faces from cosmere-rpg system
const GAME_SYSTEM_ID = 'cosmere-rpg';
const IMPORTED_RESOURCES = {
    PLOT_DICE_BLANK_BUMP: `systems/${GAME_SYSTEM_ID}/assets/art/plot_blank_bump.png`,
    PLOT_DICE_BLANK: `systems/${GAME_SYSTEM_ID}/assets/art/plot_blank.png`,
    PLOT_DICE_C2_BUMP: `systems/${GAME_SYSTEM_ID}/assets/art/plot_c2_bump.png`,
    PLOT_DICE_C2: `systems/${GAME_SYSTEM_ID}/assets/art/plot_c2.png`,
    PLOT_DICE_C4_BUMP: `systems/${GAME_SYSTEM_ID}/assets/art/plot_c4_bump.png`,
    PLOT_DICE_C4: `systems/${GAME_SYSTEM_ID}/assets/art/plot_c4.png`,
    PLOT_DICE_OP_BUMP: `systems/${GAME_SYSTEM_ID}/assets/art/plot_op_bump.png`,
    PLOT_DICE_OP: `systems/${GAME_SYSTEM_ID}/assets/art/plot_op.png`,

    PLOT_DICE_C2_IN_CHAT: `systems/${GAME_SYSTEM_ID}/assets/icons/svg/dice/dp_c2.svg`,
    PLOT_DICE_C4_IN_CHAT: `systems/${GAME_SYSTEM_ID}/assets/icons/svg/dice/dp_c4.svg`,
    PLOT_DICE_OP_IN_CHAT: `systems/${GAME_SYSTEM_ID}/assets/icons/svg/dice/dp_op.svg`,
};

// Define consts to use with the dice sets
const DSN_MODE = "default";

// Import theme packs and store the packs in a list
import { SLA_THEMES } from './themes/sla.js'
const DICE_THEMEPACKS = [ SLA_THEMES ];

/// Generates numerical dice
function generateDiePreset(sides, theme_definition) {
  console.debug("DEBUG: GenDiePreset: Sides: " + sides);
  console.debug(theme_definition);
  // Validate sides are positive int
  if (typeof sides !== 'number' || sides <= 0 || !Number.isInteger(sides)) {
    throw new Error("Sides must be a positive integer.");
  }

  if (theme_definition == null) {
    throw new Error("Theme does not exist");
  }

  console.debug("DEBUG: Theme exists and dice sides is valid");

  // Generate labels with special cases for d10 and d100
  const labels = [];
  if (sides == 10) {
    for (let i = 0; i <= 10; i++) {
      labels.push(String(i));
    }
  } else if (sides == 100) {
    for (let i = 1; i <= 10; i++) {
      labels.push(String(i*10).padStart(2, '0'));
    }
  } else {
    for (let i = 1; i <= sides; i++) {
      labels.push(String(i));
    }
  }

  // Determine die type
  const type = `d${sides}`;

  // Return DSN data suitable for addDicePreset()
  return {
    type: type,
    labels: labels,
    system: theme_definition.id,
    colorset: theme_definition.id,
  };
}

// Define all the numbered dice we want
const NUMBERED_DICE = [ 2, 4, 6, 8, 10, 12, 20, 100 ];

Hooks.once("diceSoNiceReady", (dice3d) => {
  DICE_THEMEPACKS.forEach(pack => {
    console.debug(pack);
    // Loop the themes
    pack.forEach(theme => {
      console.debug(theme.id);
      // Add a system per theme
      dice3d.addSystem(new DiceSystem(theme.id, theme.description, DSN_MODE, theme.category));
      console.debug("DEBUG: Dice system added");

      // Set these here programmatically to avoid duplicate information in the theme packs
      let new_colorset = theme.colorset;
      new_colorset.name = theme.id;
      new_colorset.description = theme.description;
      new_colorset.category = theme.category;
      console.debug("DEBUG: Colorset: ");
      console.debug(new_colorset);
      dice3d.addColorset(new_colorset);

      // Loop over the valid numbered dice
      NUMBERED_DICE.forEach(sides => {
        // Add a dice preset (single die) for this theme
        dice3d.addDicePreset(generateDiePreset(sides, theme));
        console.debug("DEBUG: d" + sides + " Preset added");
      });

      console.debug("DEBUG: Done adding numbered dice");

      // Add the plot die for this theme
      dice3d.addDicePreset({
        type: "dp",
        labels: [
              IMPORTED_RESOURCES.PLOT_DICE_C2,
              IMPORTED_RESOURCES.PLOT_DICE_C4,
              IMPORTED_RESOURCES.PLOT_DICE_BLANK,
              IMPORTED_RESOURCES.PLOT_DICE_BLANK,
              IMPORTED_RESOURCES.PLOT_DICE_OP,
              IMPORTED_RESOURCES.PLOT_DICE_OP,
        ],
        bumpMaps: [
            IMPORTED_RESOURCES.PLOT_DICE_C2_BUMP,
            IMPORTED_RESOURCES.PLOT_DICE_C4_BUMP,
            IMPORTED_RESOURCES.PLOT_DICE_BLANK_BUMP,
            IMPORTED_RESOURCES.PLOT_DICE_BLANK_BUMP,
            IMPORTED_RESOURCES.PLOT_DICE_OP_BUMP,
            IMPORTED_RESOURCES.PLOT_DICE_OP_BUMP,
        ],
        system: theme.id,
        colorset: theme.id
      });
      console.debug("DEBUG: Plot die preset added");
      console.debug("DEBUG: Done with " + theme.id);
    });
  });
});
