function shout(string) {
    return string.toUpperCase()
}

shout("hello")

function whisper(string) {
    return string.toLowerCase()
}
whisper("HELLO")

function logShout(string) {
    console.log(string.toUpperCase())
}

shoutString("hello")

function logWhisper(string) {
    console.log(string.toLowerCase())
}

logWhisper("HELLO")

function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!"
    } else(string === "I love you, Grandma.")
    return "I love you, too."
}