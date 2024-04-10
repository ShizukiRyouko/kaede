// Schlaftraum is the deity of dream
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
        pos: [
          0,
          0
        ]
      },
      loss: {
        flags: [],
        items: [],
        object: []
      },
      choice: [
        {
          dialogue: "Who?",
          trigger: "click",
          next: 2
        },
        {
          dialogue: "Battle me!",
          trigger: "click",
          next: 3
        }
      ],
      images: [
        {
          id: "mellisa",
          sprite: "chara/demo.png",
          position: [
            0,
            0
          ]
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
        p_flags: [
          "TRAM_TO_PLACE_B"
        ],
        n_flags: [],
        weather: "any",
        time: "any",
        day: 0,
        priority: 0
      },
      gains: {
        flags: [],
        items: [
          "hand_02"
        ],
        object: [],
        scene: 0,
        pos: [
          0,
          0
        ]
      },
      loss: {
        flags: [
          "TRAM_TO_PLACE_B"
        ],
        items: [],
        object: []
      },
      images: [
        {
          id: "mellisa",
          sprite: "chara/demo.png"
        }
      ],
      choice: [
        {
          dialogue: "Ok",
          trigger: "click",
          next: 0
        }
      ],
      trigger: 500,
      dialogue: "NOT IMPLEMENTED!!!",
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
        priority: 0
      },
      gains: {
        flags: [],
        items: [],
        object: [],
        scene: 0,
        pos: [
          0,
          0
        ]
      },
      loss: {
        flags: [],
        items: [],
        object: []
      },
      minigame: {
        type: "battle",
        enemy: [
          "crab",
          "snake",
          "cat"
        ]
      },
      choice: [],
      images: [
        {
          id: "mellisa",
          sprite: "chara/demo.png"
        }
      ],
      trigger: 500,
      dialogue: "Hello, World",
      speaker: "Melissa",
      cg: "",
      transition: 500
    }
]