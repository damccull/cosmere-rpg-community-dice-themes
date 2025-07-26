import { DiceSystem } from '../dice-so-nice/api.js';

// Import plot die faces from cosmere-rpg system
export const GAME_SYSTEM_ID = 'cosmere-rpg';
export const IMPORTED_RESOURCES = {
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
const DSN_GROUP = "Cosmere RPG Community Themes";
const DSN_MODE = "default";

// Define theme IDs to prevent hard coded ID names if they need changed
const THEME_BASIC_STORMLIGHT = "basic_stormlight";
const THEME_WINDRUNNER = "windrunner";
const THEME_ELSECALLER = "elsecaller";

// Define themes
const THEMES = {
  [THEME_BASIC_STORMLIGHT]: {
    description: 'Basic Stormlight',
    system: THEME_BASIC_STORMLIGHT,
    colorset: {
      name: THEME_BASIC_STORMLIGHT,
      description: 'Basic Stormlight',
      category: DSN_GROUP,
      foreground: '#294783',
      background: '#dce5f4',
      outline: '#3e6ac1',
      edge: '#c4d6f8',
      texture: 'bronze03a',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_ELSECALLER]: {
    description: 'Elsecaller',
    system: THEME_ELSECALLER,
    colorset: {
      name: THEME_ELSECALLER,
      description: 'Elsecaller',
      category: DSN_GROUP,
      foreground: '#d6d6d6',
      background: '#4097bf',
      outline: '#4097bf',
      edge: '#4097bf',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_WINDRUNNER]: {
    description: 'Windrunner',
    system: THEME_WINDRUNNER,
    colorset: {
      name: THEME_WINDRUNNER,
      description: 'Windrunner',
      category: DSN_GROUP,
      foreground: '#ffffff',
      background: '#294783',
      outline: '#294783',
      edge: '#294783',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  }
}

/// Generates numerical dice
function generateDieObject(sides, themeName) {
  // Validate sides are positive int
  if (typeof sides !== 'number' || sides <= 0 || !Number.isInteger(sides)) {
    throw new Error("Sides must be a positive integer.");
  }

  // Get theme data
  const theme = THEMES[themeName];
  if (!theme) {
    throw new Error(`Theme "${themeName}" not found.`);
  }

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
    system: theme.system,
    colorset: themeName
  };
}

// Define all the numbered dice we want
const NUMBERED_DICE = [ 2, 4, 6, 8, 10, 12, 20, 100 ];

Hooks.once("diceSoNiceReady", (dice3d) => {
  // Loop the themes
  Object.entries(THEMES).forEach(([key, value]) => {
    // Add a system per theme
    dice3d.addSystem(new DiceSystem(key, THEMES[key].description, DSN_MODE, DSN_GROUP));
    dice3d.addColorset(value.colorset);

    // Loop over the valid numbered dice
    NUMBERED_DICE.forEach(sides => {
      // Add a dice preset (single die) for this theme
      dice3d.addDicePreset(generateDieObject(sides, key));
    });

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
      system: value.system,
      colorset: key
    });
  });
});
