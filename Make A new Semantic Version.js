class Version {
  constructor(number) {
    if(typeof number === "string") {
      this.version = number
    } else {
      console.group("Don't know what semantic versioning is?")
      console.info("Semantic versioning is used for developers distinguish which kind of code or game of each one having different changes.")
      console.log("An example is: 1.1.0.")
      console.group("How does semantic versions work?")
      console.info("The following is how semantic versioning works:", "major.minor.revision.")
      console.info("Major changes are big changes to the code/game.")
      console.info("Minor changes are small changes to the code/game.")
      console.info("Finally, the revisions are bug fixes, so that the code/game can work properly or works in the way you desire.")
      console.groupEnd()
      console.groupEnd()
      return undefined
    }
  }
  get version() {
    return this.version
  }
  update(number) {
    if(typeof number === "string") {
      this.version = number
    } else {
      console.group("Don't know what semantic versioning is?")
      console.info("Semantic versioning is used for developers distinguish which kind of code or game of each one having different changes.")
      console.log("An example is: 1.1.0.")
      console.group("How does semantic versions work?")
      console.info("The following is how semantic versioning works:", "major.minor.revision.")
      console.info("Major changes are big changes to the code/game.")
      console.info("Minor changes are small changes to the code/game.")
      console.info("Finally, the revisions are bug fixes, so that the code/game can work properly or works in the way you desire.")
      console.groupEnd()
      console.groupEnd()
      return undefined
    }
  }
}
