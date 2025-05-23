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
    const { word } = await request.json().catch(() => { return Response.json({ clue: "Please provide a body in JSON format { word: {{value}} }! :3" }) } )

    if (!word || typeof word === 'undefined') { return Response.json({ clue: "Please provide a body in JSON format { word: {{value}} }! :3" }) }
    
    const testWord = checkWord(word)
    
    if (word === SUPER_PASSWORD) {
      response = "/yippee/" 
      return Response.json({ clue: response })
    } else if (Object.keys(mappings).includes(word)) {
      response = mappings[word]
      return Response.json({ clue: response })
    } else if (testWord.length === 0) {
      response = "Maybe try rearranging the letters!"
      return Response.json({ clue: response })
    } else if (testWord.length > 0 && testWord.length <= 2) {
      response = "You might be missing a few letters or have a few extra!" 
      return Response.json({ clue: response })
    } else if (typeof word !== 'undefined') {
      response = "I don't know what to do with that word :("
      return Response.json({ clue: response })
    } else {
      return Response.json({ clue: "Please provide a body in JSON format { word: {{value}} }! :3" })
    }
  }