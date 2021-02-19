export default function () {
  return [
  {
    title: 'Statistique',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'stat',
    },
  }, 
  {
    title: 'Travailleurs',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'travailleurs',
    },
  },

  {
    title: 'Configurations',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'configurations',
    },
  },

  {
    title: 'Demandes',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'demandes',
    },
  },

  {
    title: 'Blog Dashboard',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  },
  
  {
    title: 'Blog Posts',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    to: {
      name: 'blog-posts',
    },
  },

  
  {
    title: 'Forms & Components',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }
  
];
}
