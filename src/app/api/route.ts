const mappings: { [key: string]: string } = {
  "october": "y",
  "midway": "d",
  "blokus": "r",
  "neopets": "a",
  "wolf": "h",
  "tickle": "p",
  "sounten": "i",
  "greystone": "y",
  "trapis": "t",
  "nahlrout": "!",
  "dennerresin": "h",
  "bast": "a",
  "seven": "p",
  "elodin": "b",
  "contradictions": "This is the first coordinate!"
}

export async function POST(request: Request) {
    var response = ""
    const { word }: { word: string } = await request.json()
    if (word === "happybirthday!") {
      response = "/yippee/"
    } else if (word === "ydrahpiyt!hapb") {
      response = "Maybe try rearranging the letters!"
    } else if (Object.keys(mappings).includes(word)) {
      response = mappings[word]
    } else if (!!word) {
      response = "I don't know what to do with that word :("
    } else {
      response = "Please provide a body in JSON format { word: {{value}} }! :3"
    }

    return Response.json({ clue: response })
  }