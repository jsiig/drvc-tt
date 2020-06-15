# slot-machine - Derivco test task

## Info
View this running in production: 
[https://derivco-test-task.siig.ee](https://derivco-test-task.siig.ee/)

For reference, task description has been included in this repository: 
`task_description.pdf`.

If you need production output files for any reason, please run the
build command found at the bottom of this file, or, alternatively,
download it [from here](https://derivco-test-task.siig.ee/dist.zip)
in zip format.

### Some notes, approaches, regrets and limitations

* Built using VueJS + Vuex.
* The game starts with a balance of 5 virtual dollars.
* Most game logic happens around the Vuex store and the various game 
logic files directly in `./src` directory.
* Button to open debug area is in bottom-left corner.
* Most SCSS is scoped to component using build tools, hence in some
cases the lack of use of classes/selectors. Somewhat similar to 
`styled-components` in the React world
* The reels are created using CSS 3D transform for the reel faces, 
and rotating them - visible in Reel.vue. Original CSS for the 
reel was generated using [TriDiv Editor](http://tridiv.com/app),
and modified to be fit for purpose.
* This approach unfortunately also means that the reels are fairly
difficult to make responsive (to browser width), and I have not 
included this in the scope of the task.
* Animation is achieved by modifying the reel's style using transforms
in a requestAnimationFrame loop using vue's reactivity - however, 
something to note here is that since it's being called 
almost-simultaneously from three different reels, it may not yield
the most performant result with some rendered frames potentially not
getting all three updates in time (as the triggered data change
-> DOM render is async in Vue).
* Since the timer for each reel is a minimum value - that is, the reel
only stops after timer finishes when it reaches the correct position, it
means that the rolling time for the reels is slightly offset by the time
it takes to reach those positions from the moment timeout is reached.
* Even though the reels themselves have 10 faces, only 5 are
actually landed upon. Others are there for aesthetic purposes (for the
spinning of the reels effect to work visually).
* Some tests have been added for game logic's public API (Game.js and 
GameResult.js), so that expected internal game behaviour can be verified
programmatically. However, in clear 20:20 hindsight, test driven
development would have been a better approach in the first place - I'd 
have avoided a few headaches.
* Game and GameResult don't actually need to be classes.

### Potential future improvements
* Vue Component + Vuex Store tests
* More useful tests for game logic
* Render fake motion blur on top of spinning reels using SVG filters
* Handling of balance reaching zero in case of no wins (currently goes
to -1 and below)

### Known bugs
* If the same exact row needs to be highlighted in table two spins in a
row (same payouts) - then it doesn't get triggered as expected, as the 
`class` is not removed from the `<tr />` for the duration of the next
spin, even though it should be once it starts spinning. Not entirely sure
why this is the case. However, as a real world scenario, this is going to
be quite rare.

## Running, building, linting and testing

### Install dependencies
```
yarn install
```

### Development: Compiles and hot-reloads
```
yarn run serve
```
Default is port 8080 - http://localhost:8080

### Production: Compiles and minifies
```
yarn run build
```
Creates `dist/` folder with index.html entrypoint.

### Lints and fixes files
```
yarn run lint
```

### Run tests
```
yarn run test
```
