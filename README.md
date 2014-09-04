auto-color-level
================

Automatic color leveling for HTML images
----------------

This is similar to the auto-levels feature in Photoshop: the red, green, and blue channels are re-mapped from their original values to a min of 0 and a max of 255. This provides better contrast (and often, saturation), and generally removes major color casts. It is not a substitute for proper color editing, but is useful where images are unlikely to be color corrected before being uploaded. 

Use
----------------
•Add an up-to-date JQuery library to the HTML head (ie,  src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js")

•Add the colorLevels script to the HTML head (ie, src="js/colorLevels.js")

Note: this script will replace all `img` tags with `canvas` tags, so edit your CSS accordingly. For compatibility with browsers that have JS disabled, leave in CSS for `img` (the images will simply remain unedited). Setting the `width` on the original `img` tag will determine the number of pixels the script runs through, so fixing a smaller `img` `width` will speed up the script. 
