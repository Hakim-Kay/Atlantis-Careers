const nextElementInList = (list, currentElement) => {
  const currentElementIndex = list.indexOf(currentElement)
  const nextElementIndex = (currentElementIndex + 1) % list.length
  const nextElement = list[nextElementIndex]
  return nextElement
}

export default nextElementInList
