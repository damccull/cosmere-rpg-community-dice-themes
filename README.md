# Cosmere RPG: Community Dice-So-Nice Themes

This is a FoundryVTT module that provides several dice themes for the Dice-So-Nice module. They are
based on the various Radiant Orders and the various kinds of light that exist on Roshar.

## Installation

Paste this link into your FoundryVTT module installation dialog at the bottom where it has box for
manual installs.

[`https://raw.githubusercontent.com/damccull/cosmere-rpg-community-dice-themes/refs/heads/master/module.json`](https://raw.githubusercontent.com/damccull/cosmere-rpg-community-dice-themes/refs/heads/master/module.json)

FoundryVTT has now installed it for you.

## Credits

[Doc-Sun](https://github.com/Doc-Sun) - Designed all these super nice dice themes.
[damccull](https://github.com/damccull) - Wrote the module

## Contributing

### Wish list

* Themes based on:
    * Mistborn
    * White Sands
    * Elantris
    * Any of Brandon Sanderson's other novels
    * NOTE: Each set of themes should get its own const. If we get more than Stormlight Archive, this script
will need a small modification to allow this.
* If possible, some way to programmatically add Dice-So-Nice's special effects when a theme is chosen would
be really nice.

### Instructions
If you would like to contribute, this module is super simple. Start by forking this repo, clone
it to your computer, then modify cosmere-dice.js.

In it, you will create a new constant. Sort it alphabetically. This needs to unique as both a 
constant name and the value. It defines the id your theme will use.

```js
const THEME_YOUR_THEME_NAME = "your_theme_name";
```

Then, keeping it alphabetical, add your theme settings the THEMES constant:

```js
const THEMES = {
  //...
  [THEME_YOUR_THEME_NAME]: {
    description: 'Your Theme Name',
    system: THEME_YOUR_THEME_NAME,
    colorset: {
      name: THEME_YOUR_THEME_NAME,
      description: 'Your Theme Name',
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
  //...
}
```
