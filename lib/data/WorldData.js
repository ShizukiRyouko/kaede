importModule("data/Weather.js")
importModule("data/TimePeriod.js")

const WorldData = {
  // State (ohgodplsdontalterme)
  day: 1,
  weather: "rain",
  time: "morning",
  choiceLimit: 0,
  activeEvent: 0,
  // Functions
  setWeather: (id) => {
    WorldData.weather = Weather[id]
  },
  incrementDay: () => {
    WorldData.day += 1
  },
  incrementTime: () => {
    let max = TimePeriod.length - 1
    let id = TimePeriod.indexOf(WorldData.time)

    if (id >= max) id = 0
  
    WorldData.time = Time[id]
  }
}