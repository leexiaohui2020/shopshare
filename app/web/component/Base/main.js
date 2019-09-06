const content = '<div id="app"><slot /></div>'
const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keywords" :content="keywords" v-if="keywords">
    <meta name="description" :content="description" v-if="description">
    <title>{{ title }}</title>
  </head>
  <body>
    ${content}
  </body>
</html>
`

export default {
  name: 'LeeBase',
  computed: {
    title() {
      return this.$route.meta.title
    },
    keywords() {
      return this.$route.meta.keywords
    },
    description() {
      return this.$route.meta.description
    }
  },
  template: EASY_ENV_IS_NODE ? template : content
}
