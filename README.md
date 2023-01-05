# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](Calculator app challenge on Frontend Mentor)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process]
  - [Built with](HTML, SCSS , JAVASCRIPT)
  - [What I learned](LOCAL STORAGE , DOM MANIPULATION)
  - [Continued development](array methods , filter, foreach , event listeners)
  - [Useful resources](web dev simplified )
- [Author](GUBI EMEJURU)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [https://github.com/ogubuike245/CALCULATOR-WITH-THEME-SWITCHER.git]
- Live Site URL: [https://calculatorwiththemeswitcher.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html

```

```css

```

```js
(function () {
  let Theme = localStorage.getItem("theme");
  if (Theme === null) return setTheme("theme-one") && (slider.value = 1);
  setTheme(Theme);

  if (Theme === "theme-one") return (slider.value = 1);

  if (Theme === "theme-two") return (slider.value = 2);

  if (Theme === "theme-three") return (slider.value = 3);
})();
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

viewing your solution or for yourself when you look back on this project in the future.\*\*

## Author

- Website - [ogubuike emejuru](https://calculatorwiththemeswitcher.netlify.app)
- Frontend Mentor - [@ogubuike245](https://www.frontendmentor.io/profile/ogubuike245)
- Twitter - [@spinkq](https://www.twitter.com/spinkq)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
