module.exports = {
  identity: 'blog',

  migrate: "safe",

  attributes: {
      name: 'string',
      church: { model: "church" },
      blogposts:{
        collection: "blogpost",
        via:"blog"
      }
   }
}
