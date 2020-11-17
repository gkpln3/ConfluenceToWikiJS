# ConfluenceToWikiJS
Migrate from Confluence to Wiki.js

# Run
Export your space from Confluence in HTML format.

Run `node confluence2wikijs.js [input_dir] [output_dir]`

Import to wiki.js via `Settings -> Storage -> Local File System -> Import Everything`.

### Also here:
`docker-compose.yml` - A docker-compose file for running wiki.js
`wikijs_color.html` - A small script to insert on a wikijs page to color cells containing the words "yes" or "no".
