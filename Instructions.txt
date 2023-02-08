This test has two projects: preloader and launcher, both can run with a localhost server.

In the preloader you should create a visual progress bar with the percentage info. For this you have /js/scritp.js, here you receive two postMessage events preloaderProgress and preloaderEnd. Use these events in your progress bar.

•	preloaderProgress: sends the percentage of preloader progress
•	preloaderEnd: tells us that the preloader finished.

In the launcher you should create a custom launcher and parse the data to later be received in the common launcher. For this you have a url that you need to parse and redirect to the common launcher.

http://127.0.0.1/test/launcher/customLauncher.php?userid=23&establishment=work&locale=esp&coin=usd&securecode=random
