// Schlaftraum is the deity of dream
// default 1149 * 2124

const SPRITE = {
  reusable: 1,
  nonreusable: 0
}

const Schlaftraum = [
  {
    requirements: {
      p_flags: [],
      n_flags: [],
      weather: "any",
      time: "any",
      day: 0,
      priority: 0
    },
    gains: {
      flags: [
        "TRAM_TO_PLACE_B"
      ],
      items: [
        "hand_01"
      ],
      object: [],
      scene: 0,

    },
    animation: [
      {
        time: 1000,
        transition: "ease",
        id: "melissa",
        type: SPRITE.reusable,
        pos: [0, 0],
        sprites: [
          {
            id: "walk",
            active: true,
            sprite: SpriteDict.banana,
            transform: "scaleX(1)"
          }
        ]
      }
    ],
    loss: {
      flags: [],
      items: [],
      object: []
    },
    choice:
      [
        {
          dialogue: "",
          trigger: "click",
          next: 2
        }
      ],
    images: [
      {
        id: "mellisa",
        sprite: "https://www.coca-cola.com/content/dam/onexp/id/id/media-center-s/Sprite_Waterlymon-PET-425ml-desktop.png",
        height: 300,
        position: [2124 / 2, 1149 / 2],
        focus: false // basically brightness high or low
      },
      {
        id: "mmerlin",
        sprite: "https://www.coca-cola.com/content/dam/onexp/id/id/media-center-s/Sprite_Waterlymon-PET-425ml-desktop.png",
        height: 100,
        position: [2124 / 4, 1149 / 4],
        focus: true // basically brightness high or low
      }
    ],
    trigger: 500,
    dialogue: "Hello, World",
    speaker: "Melissa",
    cg: "",
    transition: 500
  },

  {
    requirements: {
      p_flags: [],
      n_flags: [],
      weather: "any",
      time: "any",
      day: 0,
      priority: -1
    },
    animation: [
      {
        id: "melissa",
        pos: [0, 2],
        transition: "ease",
        type: SPRITE.reusable,
        time: 1000,
        sprites: [
          {
            id: "walk",
            active: true,
            sprite: SpriteDict.banana,
            transform: "scaleX(-1)"
          }
        ]
      }
    ],
    gains: {
      flags: [
      ],
      items: [],
      object: [],
      scene: 0,
      pos: [
        0,
        0
      ]
    },
    loss: {
      flags: ["TRAM_TO_PLACE_B"],
      items: ["hand_01"],
      object: []
    },
    choice: [
      {
        dialogue: "Recursion?",
        trigger: "click",
        next: 1
      },
      {
        dialogue: "Hell!",
        trigger: "click",
        next: -1
      }
    ],
    images: [
      {
        id: "mellisa",
        sprite: "https://www.coca-cola.com/content/dam/onexp/id/id/media-center-s/Sprite_Waterlymon-PET-425ml-desktop.png",
        height: 300,
        position: [2124 / 3, 1149 / 2],
        focus: true // basically brightness high or low

      }
    ],
    trigger: 500,
    dialogue: "You know what I hate?",
    speaker: "Melissa",
    cg: "",
    transition: 500
  }
]