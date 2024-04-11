importModule("data/Schlaftraum.js")
importModule("data/PlayerData.js")
importModule("data/WorldData.js")
importModule("util/Array.js")
importModule("util/Math.js")
importModule("util/Helper.js")

let lockInput = false

function interact(id){
  let found;
  let viable = Schlaftraum
  // filters
  .filter(events => events.trigger == id)
  .filter(events => isSubset(PlayerData.flags, events.requirements.p_flags))
  .filter(events => !isOverlap(PlayerData.flags, events.requirements.n_flags))
  .filter(events => skipZero(events.requirements.day, day => WorldData.day > day))
  .filter(events => skipZero(events.requirements.weather, weather => WorldData.weather == weather))
  .filter(events => skipZero(events.requirements.time, time => WorldData.time == time))

  for (let index = 0; index <= 10; index++) {
    let yume = viable.filter(event => event.requirements.priority == index)
    if (yume.length > 0) {
      viable = yume
      break;
    }
  }
  
  if (viable.length == 0) {
    return
  } else if (viable.length > 1) {
    let total = viable.length
    found = viable[getRandomInt(total)]
  } else {
    found = viable[0]
  }

  displayEvent(found) 
}

function selectChoice(dir) {
  document.getElementById(`d-choice${PlayerData.choice}`).classList.remove("d-choice-active")
  if (dir == "up") {
    if (PlayerData.choice >= WorldData.choiceLimit - 1) {
      PlayerData.choice = 0
    } else {
      PlayerData.choice += 1
    }
  } else {
    if (PlayerData.choice <= 0) {
      PlayerData.choice = WorldData.choiceLimit - 1
    } else {
      PlayerData.choice -= 1
    }
  }
  document.getElementById(`d-choice${PlayerData.choice}`).classList.add("d-choice-active")
}

function acceptChoice(){
  console.log(WorldData)
  console.log(PlayerData)
  const activeEvent = Schlaftraum[WorldData.activeEvent]
  const nextEvent = activeEvent.choice[PlayerData.choice].next
  if (nextEvent == -1) {
    cleanup(activeEvent)
  }else{
    runEventById(Schlaftraum[nextEvent - 1],activeEvent)
  }
}

function runEventById(next,current){
  let firstImage = getAttributeArray(current.images, "id")
  console.log(next)
  let secondImage = getAttributeArray(next.images, "id")
  getOutsider(secondImage, firstImage).forEach( element => {
    document.getElementById(element).remove()
  })

  displayEvent(next)
}

function cleanup(event){
  for (let index = 0; index < event.images.length; index++) {
    const element = event.images[index];
    document.getElementById(element.id).remove()
  }
  const box = document.getElementById("d-box")
  box.style.opacity = 0
  lockInput = false
}

function displayEvent(event) {
  PlayerData.choice = 0
  WorldData.activeEvent = Schlaftraum.indexOf(event)

  const container = document.getElementById("d-container")
  const box = document.getElementById("d-box")
  const dialogue = document.getElementById("d-text")
  const choiceBox = document.getElementById("d-choice-container")

  choiceBox.innerHTML = ''
  WorldData.choiceLimit = event.choice.length

  if (WorldData.choiceLimit > 0) {
    if (WorldData.choiceLimit == 1 && event.choice[0].dialogue == "") {
      
    }
    else {
      let index = 0
      event.choice.forEach(element => {
        let choice = document.createElement("div")
        choice.classList.add("d-choice")
        choice.id = `d-choice${index}`
        choice.innerText = element.dialogue
        choiceBox.appendChild(choice)
        index++
      });
      document.getElementById("d-choice0").classList.add("d-choice-active")
    }
  }

  for (let index = 0; index < event.images.length; index++) {
    const element = event.images[index];

    let existence = document.getElementById(element.id)
    if(existence == null) {
      console.log(element)
      let sprite = document.createElement("img")
      sprite.style.opacity = 0
      if (!element.focus) {
        sprite.style.filter = "brightness(50%)"
      }else {
        sprite.style.filter = "brightness(100%)"
      }
      sprite.style.transition = "all 500ms ease"
      sprite.src = element.sprite
      sprite.style.height = "auto"
      sprite.style.width = "30vw"
      sprite.id = element.id
      sprite.style.top = element.position[1]
      sprite.style.left = element.position[0]
      sprite.style.position = "absolute"
      container.appendChild(sprite)
      sprite.style.opacity = 1
  
      console.log(element.id)
    } else {
      if (!element.focus) {
        existence.style.filter = "brightness(50%)"
      }else {
        existence.style.filter = "brightness(100%)"
      }
      existence.style.top = element.position[1]
      existence.style.left = element.position[0]
    }
  }

  container.style.top = window.scrollY
  container.style.left = window.scrollX
  dialogue.innerText = `[${event.speaker}] ${event.dialogue}`
  box.style.opacity = 1

  lockInput = true
}

