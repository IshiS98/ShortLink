// Fetch os links salvos.
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)
  
    let linksSaves = JSON.parse(myLinks) || [];
  
    return linksSaves;
  
  }
  
  // Save a link in localstorage.
  export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);
  
    //check if a link is already saved with sme id,if true d not duplicate
    const hasLink = linksStored.some(link => link.id === newLink.id)
    if (hasLink) return;
  
    //Add this new link to the list...
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
  }
  
  // Delete any saved link
  export function deleteLink(links, id) {
  
    let myLinks = links.filter(item => {
      return (item.id !== id);
    })
  
    localStorage.setItem("@shortLink", JSON.stringify(myLinks));
  
    return myLinks;
  }