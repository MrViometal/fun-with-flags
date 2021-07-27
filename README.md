# Zyda Frontend Test - REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher task](https://github.com/zydalabs/FrontEnd-Test). Zyda Frontend Task helps us test your coding skills by building a realistic project.

## Table of contents

- [Zyda Frontend Test - REST Countries API with color theme switcher](#zyda-frontend-test---rest-countries-api-with-color-theme-switcher)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The task](#the-task)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is an application for viewing, searching, and filtering countries cards with flags and few details, when a card is clicked, the user is redirected to another page with more details for the corresponding country's details.

A file structure was devised to encapsulate different components in their own folder inside the src folder and it goes as follows:

| folder     | description                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| components | a folder with separate folders for different components, each folder containing a file with the component and its logic and a file `StyledComponents.js` for the styled components used to render the styles for this component      |
| ---        | ---                                                                                                                                                                                                                                  |
| constants  | a folder with files for constants, containing 2 files for `styling variables` constants and `localStorage` constants                                                                                                                 |
| ---        | ---                                                                                                                                                                                                                                  |
| hooks      | a folder for hooks used throughout the project, currently holding a single file for the themeContext                                                                                                                                 |
| ---        | ---                                                                                                                                                                                                                                  |
| pages      | a folder with files for the different pages (currently only 2: `HomePage`, and `CountryDetails` )                                                                                                                                    |
| ---        | ---                                                                                                                                                                                                                                  |
| services   | a folder for different services used for requests, containing a file for the functions returning the `endpoints` used, and files for the different functions used to send the `request` and receive and parse the `response`         |
| ---        | ---                                                                                                                                                                                                                                  |
| styles     | a folder with files for the theme rules and the `globalStyles`                                                                                                                                                                       |
| ---        | ---                                                                                                                                                                                                                                  |
| svgs       | a folder for the svgs used in the project                                                                                                                                                                                            |
| ---        | ---                                                                                                                                                                                                                                  |
| utilities  | a folder for pure functions used to handle a certain logic in order to be used in different sections throughout the project, the separation is an attempt to `encapsulate` and `reuse` logic for a cleaner structure and reusability |

### The task

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click back button to return to countries page from the details page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Solution URL: [Add solution URL here](https://github.com/MrViometal/FrontEndTask)
- Live Site URL: [Add live site URL here](https://fun-with-flags-adawy.vercel.app/)

## My process

My process was both structured and not so structured at the same time.

At first, I have:

- reviewed the designs
- thought about the the structure of having two pages
- what each page contains as html (or JSX if you will) elements
- what libraries to use
- what styling convention to use

Then I decided to use styled-components as they offer a clean and a controlled way to handle the theme toggle, despite its draw backs, but I tackled it with a hybrid mode -if you will- by styling some components with styled components, and styling the children elements of that parent with normal css id and class selectors (not opting for inline styles as I find them really messy and irreusable).

I first went with developing the header and the theme button, then worked on the theme toggling and saving the theme in localStorage to remember the user's preference for a better experience, once I was happy with that, I believe I created the homepage component and worked on the countries cards container and the single cards styles, this of course required fetching the countries through the API provided, not worrying so much about the file structure at this point I did that within the same component, with the intention of a refactor in the future.

After that I went with developing the router and the country's details page and its components, and it was time for a quick rearranging of files and components in order to make my life a bit easier :D. Also wiring the navigation and some refactors.

Following that, it was time to worry about the mobile view as all of the above stages I was focusing on building the functionality and the skeleton of the app. And then, it was time to worry about the search and filter components in the homepage, I tried to use the native select tag for the filter component, then opted to use a small library `react-dropdown` cause it offered the functionality needed and saved me time worrying about the styling logic, I chose this library as it doesn't introduce a major performance issue and is dedicated to this component only, in a different scenario I might have chose Material UI or Ant Design, or any other UI library, but in our case, it would have been an overkill.

And then, it was time to rethink how to get the country's details, at first I went with getting them by name, but I realized the borders array is in alpha3Code and not name, this required getting countries by code to get their names, so in order to use as few endpoints as possible to get the job done, I changed getting the countries by name, to getting them by code. Then I styled this section as I didn't worry about it before then.

At last, I worked on the search and filter functionalities, worrying about their logic and different scenarios of searching for a country by name through the `input` element while also filtering them with the `select` element, after wiring them up correctly as best as I could think (as it wasn't specified what the desired experience was so I took a shot at the best and most intuitive and user friendly experience in my opinion), I went through the whole project, cleaning it up and making sure everything is in its right place and that the conventions I devised are followed everywhere, to the best of my abilities of course.

_IMPORTANT NOTE_: I know you specified the mobile view's break point to be 375px, however I changed it to 420px to accommodate fot the modern mobile phone's viewports as they are bigger than that. Hope that was not a bad move on my side. :D

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [History](https://www.npmjs.com/package/history) - JS library
- [React](https://reactjs.org/) - JS library
- [React DropDown](https://www.npmjs.com/package/react-dropdown) - JS library
- [React Router](https://reactrouter.com/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I have implemented theme toggling logic in only a few applications I have built, and I have done so in the past in many different ways with css or saas but it was the first time to implement it with `styled-components` and it was a lot of fun to be honest. :D

For this reason, I guess I am most proud of this are in the project, here is a snippet of the `ThemeToggleButton` component that is responsible for handling the logic.

```js
const ThemeToggleButton = ({ updateTheme }) => {
  const { isLightTheme } = useTheme();

  const themeToggle = () => {
    if (isLightTheme) {
      updateTheme('dark');
      setThemeInLocalStorage('dark');
    } else {
      updateTheme('light');
      setThemeInLocalStorage('light');
    }
  };

  const themeIcon = (
    <img
      id='theme-icon'
      alt='light-dark-mode-icon'
      src={isLightTheme ? moon : sun}
    />
  );

  const themeName = `${isLightTheme ? 'Dark' : 'Light'} Mode`;

  return (
    <Button className='element' onClick={themeToggle}>
      {themeIcon}
      {themeName}
    </Button>
  );
};
```

### Continued development

I believe I would choose going with the mobile first approach in the future rather than desktop first, I believe I will focus on that and try to research the best ways to do it.

### Useful resources

Mainly w3schools and styled-components documentation.

- [Openbase](https://openbase.com/) - This website helped me compare different dropdown JS libraries

## Acknowledgments

A shout out to the Opensource community and tech youtubers. Also thanks "Med" and/or whoever worked on this task initial repo and the thorough README and README-template files.
