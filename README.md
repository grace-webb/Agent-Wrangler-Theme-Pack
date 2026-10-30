# Agent Wrangler Theme Pack

An Agent Wrangler extension containing seven themes, each with a terminal palette and a subtle background.

| Theme | Appearance |
| --- | --- |
| Mission Control | Navy, cyan accents, and an orbital-style grid. |
| Amber Terminal | Warm charcoal, amber text, and faint scan lines. |
| Botanical | Forest green, cream text, sage accents, and fern silhouettes. |
| Blueprint | Midnight blue, pale blue accents, and a drafting grid. |
| Paper & Ink | Warm ivory, dark ink, muted blue accents, and paper texture. |
| After Hours | Aubergine, lavender text, coral accents, and a soft gradient. |
| Dark Cherry | Based on Pink Dark: deep cherry and plum, pink accents, Quicksand type, and a cherry icon. |

## Install

Once this repository has been pushed to GitHub, open **Settings › Extensions › + Add extension** in Agent Wrangler and paste:

```text
https://github.com/grace-webb/Agent-Wrangler-Theme-Pack
```

Then choose a theme in **Settings › Appearance**. Requires Agent Wrangler host API **1.43.0** or later.

For local development, copy this repository's contents (excluding `.git`) into `~/.agent-wrangler/extensions/theme-pack/`, then restart Agent Wrangler. The installed extension directory must be named `theme-pack`, matching its manifest ID.

If the same themes were previously copied into `~/.agent-wrangler/custom-styles/`, the extension versions take precedence while this extension is enabled.

## Structure

- `package.json` declares the extension metadata used during installation.
- `index.js` exports the runtime manifest and points to `styles/`.
- Each `styles/<theme-id>/theme.json` defines a theme. Botanical also includes its SVG wallpaper.

The pack has no npm dependencies, build step, client script, or requested host capabilities. No dependency lockfile is required.

## Adding a theme

Add `styles/<unique-theme-id>/theme.json` with `name`, `icon` (SVG path data), and `base` (`dark` or `light`). Add colour overrides in `colors`, and either a CSS `background` or declared assets beside the manifest. The folder name is the theme ID: keep it stable across releases and distinct from other installed themes.

See the [Agent Wrangler extension documentation](https://github.com/PortSwigger/agent-wrangler/blob/main/docs/extensions.md#themes).

Disabling this extension hides all seven themes. A browser with one selected temporarily shows Dark and retains its saved choice for when the extension is enabled again.
