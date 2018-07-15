export const pathResolving = {
  methods: {
    pathResolving(path, fileName) {
      return require(`@/${path}/${fileName}`)
    }
  }
}
