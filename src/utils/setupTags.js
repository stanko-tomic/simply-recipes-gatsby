const setupTags = elements => {
  const allTags = {}

  elements.forEach(element => {
    element.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1 //Ako je tag vec postojao samo u arrayu povecaj broj za 1
      } else {
        allTags[tag] = 1 //Ako tag ne postoji dodaj taj tag u array  | nastavi loop
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
