<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Cute Bunny Display Components
===

For this assignment, build three different components views for an image, and a wrapper component that allows the
user to choose which view. 

## Data

The image data looks like:

```js
{ 
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}
```

You can use your own URL, or work with this cute bunny: http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg 

## Components

The three image viewer components you should build are:

1. "list" - display the title of the image, the link (not the  actual image), and description.  
1. "thumbnail" - the image as a "thumbnail" (within a 100x100 pixel scale) and the title . 
1. "gallery" - Display the title, the full-size image, and the description. 

Then you need a view selector component, and a top-level app component to put everything in

## Testing

You also need to snapshot test:
* your individual three image view components
* the wrapper component (in each view state)

## Rubric *10pts*
- "list" component *1pt*
- "thumbnail" component *1pt*
- "gallery" component *1pt*
- view selector component *1pts*
- App component and general React setup *1pt*
- Snapshot tests *4pts* (1 per 4 components)
- Code quality *1pt*
