function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = String(parseInt(rankedLists[i].innerHTML) + n)
  }
}

// function deepestChild(deeper, ourNode) {
//   if (!deeper) {
//     const currentNode = document.querySelector('#grand-node')
//     deepestChild(true, currentNode) }
//   else {
//     const newNode = ourNode.querySelector('div')
//     if (newNode === null) {
//       console.log(ourNode)
//       return ourNode
//     } else {
//       deepestChild(true, newNode)
//     }
//   }
// }

function deepestChild() {
 return document.querySelector('#grand-node div div div div')
}
