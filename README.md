This is a little website I made so that I can make posts easily in markdown, and have them look alright.  It is made with [Next.js](https://nextjs.org/learn).

## Adding Content

To add a new recipe, for example, you make a new file inside the `recipes` folder called `<recipe-name>.md`.  This is a Markdown file.  See [this handy cheat sheet](https://www.markdownguide.org/cheat-sheet/) for guidelines on things you can do in markdown.  

At the top, you need to add a header that uses the following format:
```
---
title: 'Banana Bread'
date: '2023-09-08'
---
```
These will be the name and date recorded in the website, see [this one](https://ethan-russell.vercel.app/recipes/banana-bread) for an example.  That should be all you need to get started!

### Images
To add an image, you will need to:
1. Add an image to the [`/public/images/recipes`](https://github.com/Ethan-Russell/test-website/tree/main/public/images/recipes) subfolder by clicking "Add File" in the top right corner of the page.  For example, the [black sesame cake recipe](https://ethan-russell.vercel.app/recipes/black-sesame-cake) has an image in (`/public/images/recipes/black-sesame-cake.jpg`)[https://github.com/Ethan-Russell/test-website/tree/main/public/images/recipes].
* Add a link to the image in your recipe file, like this `![Black Sesame Cake](/images/recipes/black-sesame-cake.jpg)`, where the part inside the brackets is the image title (can be anything you want), and the part inside the parenthesis is the relative path from the `public` folder.

