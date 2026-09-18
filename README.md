# LengthHairCare Website

A multi-page responsive natural hair care website project developed as part of my Software Development studies.

## About the Project

LengthHairCare is a natural hair care website created to provide information about natural hair care, educate users on hair porosity, and promote natural hair care products. The website allows users to learn about the brand, explore products, read the hair care guide, and make enquiries.

## Website Pages

- **Home page (`index.html`)** – Introduces LengthHairCare, featured products, brand benefits, and navigation.
- **Products page (`pages/products.html`)** – Displays the natural hair product collection with pricing and enquiry links.
- **About page (`pages/about.html`)** – Details LengthHairCare's story, mission, and core values.
- **Hair Guide (`pages/enquiry.html`)** – Educates users on hair porosity (low, medium, high) and includes an enquiry submission form.
- **Contact page (`pages/contact.html`)** – Provides company contact details and a direct messaging form.

## Project Structure

```text
My-website/
│
├── assets/         # Product images and graphics
├── css/
│   └── style.css   # Master responsive CSS stylesheet
├── javascript/
│   └── script.js   # JavaScript file for website functionality
├── pages/
│   ├── about.html  # About Us page
│   ├── contact.html# Contact Us page
│   ├── enquiry.html# Hair Guide & Enquiry page
│   └── products.html# Products catalogue page
├── index.html      # Main landing page
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5** – Semantic markup and page structure.
- **CSS3** – Modern flexbox/grid layout, custom design tokens, and responsive media queries.
- **JavaScript** – Website interactivity (in development).
- **Visual Studio Code** – Code editor.
- **GitHub** – Version control and repository hosting.

## Features & Styling

- **Botanical Theme**: Custom color palette using forest green (`#2D5A43`), warm gold (`#C88A58`), and soft linen backgrounds (`#FAF8F5`).
- **Responsive Layout**: Mobile-friendly navigation header, dynamic product grid cards, and clean forms.
- **Accessibility**: Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) with descriptive `alt` text for images.

## Current Progress

- [x] Initial website structure
- [x] Homepage structure
- [x] About page structure
- [x] Products page structure
- [x] Hair Guide & Enquiry page structure
- [x] Contact page structure
- [x] Master CSS styling & responsive layout
- [ ] JavaScript functionality
- [x] Initial testing and HTML refinement

## Project Status

**In active development.**

The HTML structure and comprehensive CSS styling are complete. The next phase of development involves implementing JavaScript functionality for interactive form handling and shopping cart interactions.

## Feedback
added photos
added more comments
added hero section
I was asked to add regular commits
I was asked add more information to my readme file

## References & Documentation

- [MDN Web Docs](https://developer.mozilla.org/) – HTML, CSS, and JavaScript documentation.

- [W3Schools](https://www.w3schools.com/) – HTML & CSS references.

Mozilla Developer Network (MDN) (2026) CSS. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 16 September 2026).

Mozilla Developer Network (MDN) (2026) Using CSS custom properties (variables). Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties (Accessed: 16 September 2026).

Mozilla Developer Network (MDN) (2026) CSS flexible box layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout (Accessed: 16 September 2026).

Mozilla Developer Network (MDN) (2026) CSS media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 16 September 2026).

Mozilla Developer Network (MDN) (2026) Responsive web design. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 16 September 2026).

World Wide Web Consortium (W3C) (2025) CSS Grid Layout Module Level 1. Available at: https://www.w3.org/TR/css-grid-1/ (Accessed: 16 September 2026).

World Wide Web Consortium (W3C) (2025) CSS Flexible Box Layout Module Level 1. Available at: https://www.w3.org/TR/css-flexbox-1/ (Accessed: 16 September 2026).

World Wide Web Consortium (W3C) (2026) Media Queries. Available at: https://www.w3.org/TR/mediaqueries/ (Accessed: 16 September 2026).



## CSS Part 2
CSS3 is used to control the visual appearance, layout, spacing, typography, colours, responsive behaviour and interactive states of the website.

The master stylesheet contains reusable styling for all pages so that the website maintains a consistent visual identity.

## CSS features used include:
**CSS custom properties.** 
**CSS Grid.** 
**Flexbox.** 
**Media queries.** 
**Transitions.** 
**Transforms.** 
**Gradients.** 
**Box shadows.** 
**Border radius.** 
**Responsive layouts.** 
**Hover and focus states.** 
**Sticky positioning.** 
**Backdrop filtering.** 

## CSS Design System
The website uses a central design system created through CSS custom properties in the :root selector.

This allows colours, spacing values, shadows, typography and other design values to be reused throughout the stylesheet.

## Colour Palette

The main colour palette was selected to support the natural and botanical identity of the LengthHairCare brand.

## Navigation

The website has a navigation bar that appears at the top of the pages.

The navigation contains:

**The LengthHairCare logo.** 
**Links to the different pages.** 
**A cart link.** 

The header uses position: sticky, which means it stays at the top of the screen when the user scrolls down.

The navigation links also have a hover effect. When the user moves their mouse over a link, the link changes colour and an underline appears

## Buttons

Buttons are used throughout the website to help users move to different sections or pages.

The main button uses the green brand colour and has rounded corners.

A hover effect has also been added so that the button changes colour and moves slightly when the user places the mouse over it.

A secondary button style is also included for buttons that need an outlined appearance.

## Hero Section

The Home page has a large hero section at the top of the page.

The hero section contains the main introduction to LengthHairCare and uses a combination of light green, cream and gold colours.

The text is centred and the heading is larger than the other headings on the page so that it stands out.

## Product Cards

The Products page uses cards to display the different products.

Each product card contains an image, product name, description, price and button.

The cards have rounded corners, borders and shadows.

A hover effect has also been added to the cards. When the user moves their mouse over a card, it moves slightly upwards and the shadow becomes more noticeable.

The product image also becomes slightly larger when the card is hovered over.

## CSS Grid and Flexbox

I used CSS Grid and Flexbox to help create the website layouts.

CSS Grid is mainly used for the product cards, benefits, values and hair porosity sections.

For example:
.product-container {
 **display: grid;**
    **grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));**
}

This allows the product cards to automatically adjust depending on the available screen size.

Flexbox is used in areas such as the navigation bar to position the logo and navigation links.

## Forms

The Contact and Enquiry pages contain forms.

The forms include different types of input fields such as:

**Text fields.**
**Email fields.**
**Select fields.**
**Text areas.**
**Submit buttons.**

The forms have been styled to match the rest of the website.

A focus effect has also been added. When a user clicks on an input field, the border changes to green and a small shadow appears around the field.

This makes it easier for the user to see which field they are currently using.

## Responsive Design

The website has been designed to work on different screen sizes, including desktop computers, tablets and mobile phones.

Media queries were used to change the layout at different screen sizes.

## 1024px

At this screen size:

**Grid spacing is reduced.**
**Content gets additional spacing.**
**The hero section becomes smaller.**
**The hero heading is reduced.**

## 768px

At this screen size:

**The navigation changes to a vertical layout.**
**Navigation links can wrap onto multiple lines.**
**Hero spacing is reduced.**
**Heading sizes are reduced.**
**Form spacing is reduced.**

## 480px

For smaller mobile screens:

**The logo becomes smaller.**
**Navigation spacing is reduced.**
**Navigation text becomes smaller.**
**Buttons become full width.**
**Product cards are displayed in one column.**
**Hero text becomes smaller.**

These changes help make the website easier to use on smaller screens.

## CSS Variables
I used CSS custom properties to store commonly used colours, fonts, spacing values, shadows and other design values.

## Accessibility

I also considered basic accessibility when creating the website.

Semantic HTML elements are used to give the pages a clear structure, including:

<header>
<nav>
<main>
<section>
<article>
<footer>

Images also use descriptive alt text where appropriate.

The forms use labels to identify the different fields.

Focus styles have also been added to form fields so that users can see which field they are currently using.