# Frontend Mentor - Base Apparel coming soon page

![Design preview for the Base Apparel coming soon page coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (_'Newbie'_) to hardest (_'Advanced'_).

## The challenge
__Challenge #5__<br>
__Difficulty: Newbie__

This challenge was to build out a coming soon page and get it looking as close to the design as possible.

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My approach
I started by building out the basic __HTML__ page structure, making sure the page layout made sense at a fundamental level, particularly for screenreader users.

From there I took a mobile-first approach, completing styling and layout for a 375px viewport width before building out media queries to cater to larger widths.

I used __Sass__ to easily implement elements from the `style-guide.md` provided, and CSS grid to place the elements.

For input validation, I used [__jQuery Validation__](https://jqueryvalidation.org/) with custom message and highlight rules for the error states.

The end product is hosted on Vercel - https://base-apparel-coming-soon-page-five.vercel.app/

Cheers! 🍻
