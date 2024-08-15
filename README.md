# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [demo](https://product-list-fm.vercel.app/)

## My process

- I first created the basic UI/UX using astro and mainly react.
- I had to learn more about nanostores to create the basket state management.
- The last step I had to take was to create the modal and I used shadcn to create it.

### Built with

- [Astro](https://docs.astro.build/en/getting-started/)
- [React](https://reactjs.org/) - JS library
- [Shadcn](https://ui.shadcn.com) - For styles
- [Nanosotores](https://github.com/nanostores/nanostores) - For state management

### What I learned

I've learned some of the basic concepts of Astro and Nanostores and still have a lot to learn about them.

```astro
---
import Layout from '../layouts/Layout.astro';
import MainLayout from '../layouts/MainLayout.astro';
import ProductLayout from '../components/product';
import Cart from '../components/cart';
---

<Layout title="Product list with cart | Frontend Mentor">
  <main class="h-fit w-full overflow-y-auto overflow-x-hidden">
    <MainLayout>
      <ProductLayout client:visible />
      <Cart client:visible/>
    </MainLayout>
  </main>
</Layout>
```

### Continued development

I'm going to concentrate on developing websites using astro and fewer react components to develop my knowledge of its features.

### Useful resources

- [Stack Overflow](https://stackoverflow.com)
- [Medium](https://medium.com)

## Author

- Frontend Mentor - [@dmikaia](https://www.frontendmentor.io/profile/dmikaia)

## Acknowledgments

For anyone wishing to learn a new framework or even a new language, the best way is to practice right away and avoid as much as possible **'tutorial hell'** you can learn more about this [here](https://www.linkedin.com/pulse/escaping-tutorial-hell-guide-progress-your-learning-journey-jatasra-dvdgf#:~:text=Tutorial%20Hell%20is%20a%20state,them%20can%20hinder%20your%20progress.). Instead, you can learn by researching and reading books.
