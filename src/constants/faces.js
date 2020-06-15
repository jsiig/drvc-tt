const BAR3 = {
  name: '3xBAR',
  value: 0
}

const BAR = {
  name: 'BAR',
  value: 2
}

const BAR2 = {
  name: '2xBAR',
  value: 4
}

const SEVEN = {
  name: '7',
  value: 6
}

const CHERRY = {
  name: 'CHERRY',
  value: 8
}

export const REEL_FACES = [BAR3, BAR, BAR2, SEVEN, CHERRY]
export const REEL_FACE_NAMES = REEL_FACES.map(face => face.name)
