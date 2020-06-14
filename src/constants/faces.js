const BAR3 = {
  src: '3xBAR.png',
  name: '3xBAR'
}
const BAR = {
  src: 'BAR.png',
  name: 'BAR'
}

const BAR2 = {
  src: '2xBAR.png',
  name: '2xBAR'
}

const SEVEN = {
  src: '7.png',
  name: '7'
}

const CHERRY = {
  src: 'Cherry.png',
  name: 'CHERRY'
}

export const REEL_FACES = [BAR3, BAR, BAR2, SEVEN, CHERRY]
export const REEL_FACE_NAMES = REEL_FACES.map(face => face.name)
