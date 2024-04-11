const SUPER_PASSWORD = "happybirthday!"

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
  "contradictions": "This is the first coordinate!",
  SUPER_PASSWORD: "/yippee/"
}

function checkWord(word: string): string {
  var charsMatching = SUPER_PASSWORD
  var charsExtra = ""
  for (let i = 0; i < word.length; i++) {
    if (charsMatching.indexOf(word[i]) !== -1) {
      charsMatching = charsMatching.replace(word[i], "")
    } else {
      charsExtra += word[i]
    }
  }

  if (charsMatching.length === 0) {
    return charsExtra
  } else if (charsExtra.length === 0) {
    return charsMatching
  } else {
    return charsMatching.length > charsExtra.length ? charsMatching : charsExtra
  }
}

export function GET() {
  return new Response("Hello, Liam! :3")
}

export async function POST(request: Request) {
    var response = ""
    const { word }: { word: string } = await request.json()
    const testWord = checkWord(word)

    if (word === SUPER_PASSWORD) {
      response = "/yippee/" 
    } else if (Object.keys(mappings).includes(word)) {
      response = mappings[word]
    } else if (testWord.length === 0) {
      response = "Maybe try rearranging the letters!"
    } else if (testWord.length > 0 && testWord.length <= 2) {
      response = "You might be missing a few letters or have a few extra!" 
    } else if (!!word) {
      response = "I don't know what to do with that word :("
    } else {
      response = "Please provide a body in JSON format { word: {{value}} }! :3"
    }

    return Response.json({ clue: response })
  }