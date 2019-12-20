# Gilded Rose refactoring kata

My second attempt at the Gilded Rose kata, this time in JavaScript.

Original legacy code from
[Emily Bache](git@github.com:emmavanoss/gilded-rose-js.git)

## Setup

* run `npm install` to install dependencies
* to run tests: `npm test`
* to run eslint: `npm run lint` (follows Airbnb style)

## Approach

I wanted to try the kata in Javascript to practice working with legacy code in
that language.  

I started by setting up the testing environment (Jasmine). I ran tests in the
console using `npm test`.  

I wrote feature tests using both the Shop and the Item class, to cover all
types of items and edge cases.  

I wrote unit tests for different types of items and drew these out into
separate classes, which extended the pre-existing Item class.  

I moved feature tests into a feature_spec.js file, and add unit tests for the
Shop class, which tested that the expected function (updateQuality) had been
called on each item.  

I changed the name of the function on the Shop class to updateInventory, for
two reasons:  
- This function was updating both Quality and SellIn for each item, so this was
  a more accurate and representative name.  
- Each of the new Item subclasses had a function called updateQuality. To
  maintain clarity around how the program was working, it was helpful to give
  the Shop class function a separate name as it was doing different things.  

Because the Item class could not be changed, I had to make a RegularItem class
to encapsulate the logic for updating quality on regular items. Ideally, this
logic would live on the main Item class, in a new updateQuality function. This
could then be overwritten for each 'special' class that had non-regular logic.  
