# M-M-Clicker

A cookie clicker with M&M's, in one HTML file and one script. Click the M&M, buy auto clickers, factories and a multiplier, and the number goes up.

I made it in January 2023, the same week as the Python projects. Auto clickers give one M&M a second, factories give two, the multiplier scales both, and the state is four numbers saved to localStorage by the Save button and again when the tab closes.

## Run it

Open index.html in a browser, or the copy on GitHub Pages: https://nathan1pinnock.github.io/M-M-Clicker/

Bulma and Font Awesome load from CDNs, so it needs an internet connection even from a local file.

## Rough edges

- The first visit opens with an alert saying "Nothing to load!", because load() runs on page load whether or not there's a save.
- The tab is called "Smartie clicker" and the multiplier is priced in Smarties until the first update rewrites both.
- The multiplier applies to auto clickers and factories, not to your own clicks.
- Prices go up by a fixed step each time: 12 for an auto clicker, 15 for a factory, 100 for the multiplier.
