const Masks = {
  REMOVE_HTML_TAGS: value => {
    return !value ? value :
      value
      .replace(/<.{1,7}>/g, '')
  },
}


export default Masks
