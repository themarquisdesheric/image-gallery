<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Cute Bunny Display Components
===

For this assignment, build three different components views for a image list (each of which has a list and a image-view component), and a wrapper component that allows the selection of which view to show. 

## Data

The image data looks like:

```js
{ 
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}
```

You can use your own URL, or work with these cute bunnies:

* http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg 
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg
* http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg

For now, put the data in a module you can import. Simulate an async get by return a promise from a get method:

```js
const images = [ /* your image data */ ];

export default {
  get() { return Promise.resolve(images) }
}
```

## Components

The three image viewer component(s) you should build are:

1. "list" 
    1. tabular list - show the list vertically
    1. list item - display the title of the image, the link (not the  actual image), and description.  
1. "thumbnail" -  
    1. float or inline-block list - show "cards" for each image
    1. each image card shows a "thumbnail" (~ 100x100 pixel scale) and the title (above or below).
1. "gallery" - 
    1. display one image at a time, have left and right arrows to advance/go back
    1. Display the title, description and the full-size image.

Then you need a view selector component, and a top-level app component to put everything in

## PropTypes

Include PropTypes for all components (that take props)

## Testing

You also need to snapshot test:
* your individual three image list components
* your individual three image view components
* the wrapper component (in each view state)

## Rubric *20pts*
- "list" component *1pt*
- "thumbnail" component *1pt*
- "gallery" component *1pt*
- view selector component *1pts*
- App component and general React setup *1pt*
- Snapshot tests *4pts* (1 per 4 components)
- Code quality *1pt*
