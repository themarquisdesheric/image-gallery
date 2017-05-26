import shortid from 'shortid';

const images = [
  {
    title: 'Black & Tan',
    description: 'Seriously heart-melting black and tan bunny... OMG <3',
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    _id: shortid.generate()
  },
  {
    title: 'Falling Bunny',
    description: 'I don\'t know if this bunny fell and the picture was taken on impact, but I certainly prefer to think of it that way',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg',
    _id: shortid.generate()
  },
  {
    title: 'Marshmellow Puff',
    description: 'Is it a rodent or a rabbit? I had to look it up to be sure. Then again, I\'m still not sure',
    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg',
    _id: shortid.generate()
  },
  {
    title: 'Floppy Ears',
    description: 'I once had a bunny like this. Her name was Linda. I was seven or eight. When she left this terrestrial plane, my youthful naivete soon followed',
    url: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
    _id: shortid.generate()
  }
];

export default {
  get() {
    return Promise.resolve(images.slice());
  },
  addImage(image) {
    const saved = {
      ...image,
      _id: shortid.generate()
    }
    return Promise.resolve(saved);
  },
  deleteImage(id) {
    const index = images.findIndex(img => img._id === id);
    
    if (index > -1) images.splice(index, 1);

    return Promise.resolve(index !== -1);
  }
}