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
const THEME_ANTI_STORMLIGHT = "anti-stormlight"
const THEME_BONDSMITH = "bondsmith";
const THEME_DUSTBRINGER = "dustbringer";
const THEME_EDGEDANCER = "edgedancer";
const THEME_ELSECALLER = "elsecaller";
const THEME_LIFELIGHT = "lifelight";
const THEME_LIGHTWEAVER = "lightweaver";
const THEME_SKYBREAKER = "skybreaker";
const THEME_STONEWARD = "stoneward";
const THEME_STORMLIGHT = "stormlight";
const THEME_TOWERLIGHT = "towerlight";
const THEME_TRUTHWATCHER = "truthwatcher";
const THEME_VOIDLIGHT = "voidlight";
const THEME_WARLIGHT = "warlight";
const THEME_WILLSHAPER = "willshaper";
const THEME_WINDRUNNER = "windrunner";

// Define themes
const THEMES = {
  [THEME_ANTI_STORMLIGHT]: {
    description: 'Anti-Stormlight',
    system: THEME_ANTI_STORMLIGHT,
    colorset: {
      name: THEME_ANTI_STORMLIGHT,
      description: 'Anti-Stormlight',
      category: DSN_GROUP,
      foreground: '#294783',
      background: '#dce5f4',
      outline: '#c4d6f8',
      edge: '#3e6ac1',
      texture: 'ice',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_STORMLIGHT]: {
    description: 'Stormlight',
    system: THEME_STORMLIGHT,
    colorset: {
      name: THEME_STORMLIGHT,
      description: 'Stormlight',
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
  [THEME_BONDSMITH]: {
    description: 'Bondsmith',
    system: THEME_BONDSMITH,
    colorset: {
      name: THEME_BONDSMITH,
      description: 'Bondsmith',
      category: DSN_GROUP,
      foreground: '#d57c15',
      background: '#E7C852',
      outline: '#533a1d',
      edge: '#E7C852',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_DUSTBRINGER]: {
    description: 'Dustbringer',
    system: THEME_DUSTBRINGER,
    colorset: {
      name: THEME_DUSTBRINGER,
      description: 'Dustbringer',
      category: DSN_GROUP,
      foreground: '#fdb73f',
      background: '#B22330',
      outline: '#B22330',
      edge: '#B22330',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_EDGEDANCER]: {
    description: 'Edgedancer',
    system: THEME_EDGEDANCER,
    colorset: {
      name: THEME_EDGEDANCER,
      description: 'Edgedancer',
      category: DSN_GROUP,
      foreground: '#555564',
      background: '#C8CFE6',
      outline: '#C8CFE6',
      edge: '#C8CFE6',
      texture: 'ice_2',
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
  [THEME_LIFELIGHT]: {
    description: 'Lifelight',
    system: THEME_LIFELIGHT,
    colorset: {
      name: THEME_LIFELIGHT,
      description: 'Lifelight',
      category: DSN_GROUP,
      foreground: '#dcffdb',
      background: '#40f76e',
      outline: '#6dfd77',
      edge: '#6dfd77',
      texture: 'astral',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_LIGHTWEAVER]: {
    description: 'Lightweaver',
    system: THEME_LIGHTWEAVER,
    colorset: {
      name: THEME_LIGHTWEAVER,
      description: 'Lightweaver',
      category: DSN_GROUP,
      foreground: '#fafafa',
      background: '#641022',
      outline: '#641022',
      edge: '#641022',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_SKYBREAKER]: {
    description: 'Skybreaker',
    system: THEME_SKYBREAKER,
    colorset: {
      name: THEME_SKYBREAKER,
      description: 'Skybreaker',
      category: DSN_GROUP,
      foreground: '#fafafa',
      background: '#555564',
      outline: '#555564',
      edge: '#555564',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_STONEWARD]: {
    description: 'Stoneward',
    system: THEME_STONEWARD,
    colorset: {
      name: THEME_STONEWARD,
      description: 'Stoneward',
      category: DSN_GROUP,
      foreground: '#d53815',
      background: '#d79447',
      outline: '#d79447',
      edge: '#d79447',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_TOWERLIGHT]: {
    description: 'Towerlight',
    system: THEME_TOWERLIGHT,
    colorset: {
      name: THEME_TOWERLIGHT,
      description: 'Towerlight',
      category: DSN_GROUP,
      foreground: '#37ae77',
      background: '#dce5f4',
      outline: '#3e6ac1',
      edge: '#c4d6f8',
      texture: 'bronze03a',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_TRUTHWATCHER]: {
    description: 'Truthwatcher',
    system: THEME_TRUTHWATCHER,
    colorset: {
      name: THEME_TRUTHWATCHER,
      description: 'Truthwatcher',
      category: DSN_GROUP,
      foreground: '#efcd25',
      background: '#2E684A',
      outline: '#2E684A',
      edge: '#2E684A',
      texture: 'ice_2',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_VOIDLIGHT]: {
    description: 'Voidlight',
    system: THEME_VOIDLIGHT,
    colorset: {
      name: THEME_VOIDLIGHT,
      description: 'Voidlight',
      category: DSN_GROUP,
      foreground: '#9d3fcf',
      background: '#601F64',
      outline: '#601F64',
      edge: '#601F64',
      texture: 'fire',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_WARLIGHT]: {
    description: 'Warlight',
    system: THEME_WARLIGHT,
    colorset: {
      name: THEME_WARLIGHT,
      description: 'Warlight',
      category: DSN_GROUP,
      foreground: '#3357e6',
      background: '#1f096c',
      outline: '#000000',
      edge: '#000000',
      texture: 'marble',
      material: 'glass',
      font: 'Arial',
      visibility: 'visible'
    },
  },
  [THEME_WILLSHAPER]: {
    description: 'Willshaper',
    system: THEME_WILLSHAPER,
    colorset: {
      name: THEME_WILLSHAPER,
      description: 'Willshaper',
      category: DSN_GROUP,
      foreground: '#fdb73f',
      background: '#601F64',
      outline: '#601F64',
      edge: '#601F64',
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
  },
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
