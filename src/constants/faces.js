const BAR3 = {
  src: '3xBAR.png',
  name: '3xBAR',
  value: 0
}
const BAR = {
  src: 'BAR.png',
  name: 'BAR',
  value: 2
}

const BAR2 = {
  src: '2xBAR.png',
  name: '2xBAR',
  value: 4
}

const SEVEN = {
  src: '7.png',
  name: '7',
  value: 6
}

const CHERRY = {
  src: 'Cherry.png',
  name: 'CHERRY',
  value: 8
}

export const REEL_FACES = [BAR3, BAR, BAR2, SEVEN, CHERRY]
export const REEL_FACE_NAMES = REEL_FACES.map(face => face.name)
