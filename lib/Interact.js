importModule("Schlaftraum.js")
importModule("PlayerData.js")

function interact(id){
  const viable = Schlaftraum
  // filters
  .filter(events => events.trigger == id)
  console.log(`Interacted with ${viable.length}`) 
}