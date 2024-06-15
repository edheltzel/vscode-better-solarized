<div align="center">
<img src="https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-theme-poster.jpg" alt="better solarized poster">
</div>
<br><br>

# Better Solarized + Selenized [![release](https://img.shields.io/github/release/edheltzel/vscode-better-solarized.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=073642)](https://github.com/edheltzel/flightdeck/releases/latest)

This is an improvement to the built-in/original Solarized theme that comes with Visual Studio Code. It leverages [Boxy Solarized Theme](https://github.com/bofm/sublime-boxy-theme), with several modifications, tweaks, and customizations. Better Solarized will always draw inspiration from the original [Solarized](https://github.com/altercation/solarized) project and now includes the [Selenized](https://github.com/jan-warchol/selenized/blob/master/whats-wrong-with-solarized.md) color palette.

Five(5) variants:

1. Solarized Dark
2. Solarized Light
3. Solarized Dark with Italics
4. Selenized Dark
5. Selenized Light

### Featured on:

- [vscode.email](https://mailchi.mp/vscode/80?e=b9d3c8f738) newsletter.
- located on several VSCode Theme Lists.

## Additional Customization and other Tweaks

**See something that you'd rather change?**

No problem, feel free to edit and customize by using the `workbench.colorCustomizations` setting. Check out the [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for additional options.

Open up your `settings.json` and hack way.

```json
"workbench.colorCustomizations":{
  "peekView.border": "#E50A69AB",
  "peekViewTitle.background": "#002b36",
  "peekViewResult.background": "#00212b",
  "peekViewEditor.background": "#002b36",
  "peekViewEditor.matchHighlightBackground": "#00212bAB",
  "editorBracketHighlight.foreground1": "#cdcdcdff",
  "editorBracketHighlight.foreground2": "#b58900ff",
  "editorBracketHighlight.foreground3": "#d33682ff",
},
  "editor.tokenColorCustomizations": {
    "[Better Solarized Dark]": {
      "textMateRules": [
        {
          "scope": "support.type.property-name.table.toml",
          "settings": {
            "foreground": "#FDF6E3",
            "fontStyle": "bold"
          }
        }
      ]
    }
  },
```
This is just an example, you can customize any color you want)

## ScreenShots

| Better Solarized                                                                                                                       | Better Selenized                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ![solarized Dark](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-dark.png)                 | ![selenized Dark](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-dark.png)                 |
| ![solarized Light](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-light.png)               | ![selenized Light](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-light.png)               |
| ![solarized Dark Peek](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-dark-peek.png)       | ![selenized Dark Peek](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-dark-peek.png)       |
| ![solarized Light Peek](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-light-peek.png)     | ![selenized Light Peek](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-light-peek.png)     |
| ![solarized Dark Terminal](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-dark-term.png)   | ![selenized Dark Terminal](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-dark-term.png)   |
| ![solarized Light Terminal](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-solarized-light-term.png) | ![selenized Light Terminal](https://raw.github.com/ginfuru/vscode-better-solarized-dark/master/images/better-selenized-light-term.png) |


## Development

So theme development is a little unique, in the fact that I've chosen to use [Eleventy](https://11ty.dev) to generate the JSON files using Nunjucks for templates. Eleventy is very versatile without an opinionated structure, which is why I use it.

Each theme is generated from the `./src/data/themes.js` file and has a companion Nunjucks template in `./src` which is then compiled into the `./themes` directory.

### Getting Started
1. Clone the repository `gh repo clone edheltzel/vscode-better-solarized && cd vscode-better-solarized`
2. Run `pnpm install`
3. Execute the **run without debugging**: `Run > Run without debugging` OR `ctrl + F5` (see: [VSCode Debugging](https://code.visualstudio.com/Docs/editor/debugging#_run-mode)) to start development.
4. Either open the terminal and run `pnpm run serve` or run a task with the command prompt `Tasks: Run Task` and select `npm: serve` (Either option works - I personally run the task inside of the terminal).
5. To edit the theme colors open the `./src/data/themes.js` file and edit the colors as needed and/or edit any of the Nunjucks files in the `./src` directory.


#### NPM Scripts

```shell
Lifecycle scripts:
  publish
    vsce publish
  release
    gh release create v%npm_package_version% --generate-notes --latest

Commands available via "pnpm run":
  build
    pnpm dlx @11ty/eleventy
  serve
    pnpm dlx @11ty/eleventy --watch
```

- `pnpm run build` - Builds the theme files for production
- `pnpm run serve` - Builds the theme files and watches for changes
- `pnpm run release` - Creates a new release using the current version in `package.json`
