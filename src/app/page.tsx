'use client'

import { useState } from 'react'

interface Quote {
  text: string
  author: string
  question: string
}

const quotes: Quote[] = [
  {
    text: "Opvoeding is niet het vullen van een emmer, maar het aansteken van een vlam.",
    author: "William Butler Yeats",
    question: "Wanneer vulde je voor het laatst een emmer in plaats van een vlam aan te steken? Hoe zou je morgen een vlam kunnen aansteken in plaats van een emmer te vullen?"
  },
  {
    text: "Het kind is niet een vat dat gevuld moet worden, maar een fakkel die ontstoken moet worden.",
    author: "Plutarchus",
    question: "Welke fakkels in jouw klas zijn nog niet ontstoken? Wat heb je nodig om ze aan te steken?"
  },
  {
    text: "Wat we leren met plezier, vergeten we nooit.",
    author: "Alfred Mercier",
    question: "Wat was het laatste wat je met plezier leerde? Hoe kun je dat gevoel van plezier overdragen op je leerlingen?"
  },
  {
    text: "De beste leraren zijn degenen die je laten zien waar je moet kijken, maar je niet vertellen wat je moet zien.",
    author: "Alexandra K. Trenfor",
    question: "Hoe vaak vertel je wat leerlingen moeten zien in plaats van ze te laten ontdekken? Waar kun je morgen minder vertellen en meer laten zien?"
  },
  {
    text: "Elk kind is een kunstenaar. Het probleem is hoe je een kunstenaar blijft als je opgroeit.",
    author: "Pablo Picasso",
    question: "Welke kunstenaar in jouw klas is aan het verdwijnen? Hoe kun je die creatieve vlam levend houden?"
  },
  {
    text: "Vertel me en ik vergeet het. Leer me en ik herinner het. Betrek me en ik leer het.",
    author: "Benjamin Franklin",
    question: "Hoe kun je je lessen meer interactief maken zodat leerlingen actief betrokken zijn bij het leerproces?"
  },
  {
    text: "Onderwijs is de krachtigste wapen die je kunt gebruiken om de wereld te veranderen.",
    author: "Nelson Mandela",
    question: "Op welke manier draag jij als leraar bij aan positieve verandering in de wereld van je leerlingen?"
  },
  {
    text: "Het doel van onderwijs is om een lege geest te vervangen door een open geest.",
    author: "Malcolm Forbes",
    question: "Hoe stimuleer je kritisch denken en nieuwsgierigheid bij je leerlingen in plaats van alleen feiten over te dragen?"
  },
  {
    text: "Een goede leraar kan hoop inspireren, verbeelding aanwakkeren en liefde voor leren inprenten.",
    author: "Brad Henry",
    question: "Welke concrete acties onderneem je om de intrinsieke motivatie van je leerlingen aan te wakkeren?"
  },
  {
    text: "Kinderen moeten worden onderwezen hoe ze moeten denken, niet wat ze moeten denken.",
    author: "Margaret Mead",
    question: "Hoe balanceer je het overdragen van kennis met het ontwikkelen van zelfstandig denkvermogen?"
  },
  {
    text: "Onderwijs is niet voorbereiding op het leven; onderwijs is het leven zelf.",
    author: "John Dewey",
    question: "Hoe maak je je lessen relevant voor het dagelijkse leven van je leerlingen?"
  },
  {
    text: "Elke student kan leren, alleen niet op dezelfde dag of op dezelfde manier.",
    author: "George Evans",
    question: "Welke differentiatiemethoden gebruik je om tegemoet te komen aan verschillende leerstijlen en -tempo's?"
  },
  {
    text: "Het is de kunst van de leraar om de vreugde van creatieve expressie en kennis te wekken.",
    author: "Albert Einstein",
    question: "Hoe integreer je creativiteit en plezier in je vakgebied, ook bij meer theoretische onderwerpen?"
  },
  {
    text: "De invloed van een goede leraar kan nooit worden uitgewist.",
    author: "Onbekend",
    question: "Welke blijvende impact wil je hebben op het leven van je leerlingen, buiten de lesstof om?"
  },
  {
    text: "Onderwijs is de sleutel tot succes in het leven, en leraren maken een blijvende impact in het leven van hun studenten.",
    author: "Solomon Ortiz",
    question: "Hoe help je leerlingen om hun eigen definitie van succes te ontdekken en na te streven?"
  },
  {
    text: "Een leraar beïnvloedt de eeuwigheid; hij kan nooit zeggen waar zijn invloed stopt.",
    author: "Henry Brooks Adams",
    question: "Besef je je de lange termijn impact van je woorden en acties op leerlingen? Hoe ga je daar bewust mee om?"
  },
  {
    text: "Het mooie van leren is dat niemand het van je af kan nemen.",
    author: "B.B. King",
    question: "Hoe help je leerlingen om eigenaarschap te nemen over hun eigen leerproces en levenslang leren te omarmen?"
  },
  {
    text: "De mediocre leraar vertelt. De goede leraar legt uit. De superieure leraar demonstreert. De grote leraar inspireert.",
    author: "William Arthur Ward",
    question: "Op welk niveau opereer je meestal en hoe kun je meer naar het inspirerende niveau bewegen?"
  },
  {
    text: "Leren is een schat die zijn eigenaar overal zal volgen.",
    author: "Chinees spreekwoord",
    question: "Hoe maak je leerlingen bewust van de waarde van kennis als persoonlijke rijkdom?"
  },
  {
    text: "De belangrijkste dag in iemands onderwijs is de eerste dag van school, niet de diploma-uitreiking.",
    author: "Harry Wong",
    question: "Hoe zorg je ervoor dat elke eerste indruk en elk begin positief en motiverend is?"
  },
  {
    text: "Goed onderwijs is een fundament van een goede samenleving.",
    author: "Elizabeth Warren",
    question: "Hoe verbind je je lessen met maatschappelijke thema's en burgerschap?"
  },
  {
    text: "De hele kunst van het onderwijzen is alleen maar de kunst van het wakker maken van de natuurlijke nieuwsgierigheid van jonge geesten.",
    author: "Anatole France",
    question: "Welke technieken gebruik je om de natuurlijke nieuwsgierigheid van kinderen levend te houden?"
  },
  {
    text: "Onderwijs is de beweging van duisternis naar licht.",
    author: "Allan Bloom",
    question: "Hoe help je leerlingen om van onwetendheid naar begrip te bewegen op een positieve manier?"
  },
  {
    text: "Een investering in kennis levert de beste rente op.",
    author: "Benjamin Franklin",
    question: "Hoe maak je leerlingen enthousiast over de lange termijn voordelen van leren?"
  },
  {
    text: "Leraren die liefde voor leren kunnen overbrengen, doen een geschenk dat een leven lang meegaat.",
    author: "Onbekend",
    question: "Wat is jouw eigen passie voor leren en hoe deel je die met je leerlingen?"
  },
  {
    text: "Het doel van onderwijs is om kennis te vervangen door denken.",
    author: "Onbekend",
    question: "Hoe verschuif je de focus van het onthouden van feiten naar het ontwikkelen van denkvaardigheden?"
  },
  {
    text: "Onderwijs is het fundament waarop we onze toekomst bouwen.",
    author: "Christine Gregoire",
    question: "Hoe bereid je leerlingen voor op een onzekere toekomst met vaardigheden die altijd relevant blijven?"
  },
  {
    text: "De beste leraren zijn degenen die zichzelf overbodig maken.",
    author: "Onbekend",
    question: "Hoe werk je eraan dat leerlingen uiteindelijk zelfstandig kunnen leren en groeien?"
  },
  {
    text: "Onderwijs is de sleutel die de gouden deur van vrijheid opent.",
    author: "George Washington Carver",
    question: "Hoe help je leerlingen om onderwijs te zien als een weg naar meer keuzemogelijkheden in het leven?"
  },
  {
    text: "Een goede leraar is als een kaars - hij verbruikt zichzelf om de weg voor anderen te verlichten.",
    author: "Mustafa Kemal Atatürk",
    question: "Hoe zorg je voor jezelf als leraar terwijl je je energie geeft aan je leerlingen?"
  },
  {
    text: "Het is niet genoeg om te onderwijzen; we moeten ook inspireren.",
    author: "Onbekend",
    question: "Wat inspireert jou als leraar en hoe breng je die inspiratie over op je leerlingen?"
  },
  {
    text: "De kunst van het onderwijzen is de kunst van het begeleiden van ontdekkingen.",
    author: "Mark Van Doren",
    question: "Hoe creëer je leeromgevingen waarin leerlingen zelf kunnen ontdekken en experimenteren?"
  },
  {
    text: "Onderwijs is niet wat je krijgt door het lezen van de kleine lettertjes. Onderwijs is wat je overhoudt nadat je alles bent vergeten wat je hebt geleerd.",
    author: "Albert Einstein",
    question: "Welke kernvaardigheden en -waarden wil je dat leerlingen behouden, lang nadat ze je les hebben verlaten?"
  },
  {
    text: "Een leraar neemt een hand, opent een geest en raakt een hart.",
    author: "Onbekend",
    question: "Hoe balanceer je cognitieve, emotionele en sociale ontwikkeling in je onderwijs?"
  },
  {
    text: "Het mooiste dat een leraar kan zeggen is: 'De kinderen werken zo hard dat ze mij niet nodig hebben.'",
    author: "Maria Montessori",
    question: "Hoe creëer je een klasomgeving waarin leerlingen gemotiveerd zijn om zelfstandig te werken?"
  },
  {
    text: "De taak van de moderne opvoeder is niet om jungles om te hakken, maar om woestijnen te irrigeren.",
    author: "C.S. Lewis",
    question: "Hoe voed je de potentie van elke leerling, ook degenen die minder voor de hand liggende talenten hebben?"
  },
  {
    text: "Onderwijs is het leren van feiten, maar training is het leren van wat te doen met die feiten.",
    author: "Onbekend",
    question: "Hoe zorg je ervoor dat leerlingen niet alleen kennis vergaren, maar ook leren hoe ze die kunnen toepassen?"
  },
  {
    text: "Het doel van onderwijs is om zelfstandige denkers te creëren, niet volgers.",
    author: "Onbekend",
    question: "Hoe moedig je leerlingen aan om vragen te stellen bij autoriteit en eigen meningen te vormen?"
  }
]

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const getNewQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * quotes.length)
      } while (newIndex === currentQuoteIndex && quotes.length > 1)
      
      setCurrentQuoteIndex(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  const currentQuote = quotes[currentQuoteIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            💡 Pedagogische Wijsheden
          </h1>
          <p className="text-xl text-purple-200 font-light">
            Inspiratie voor elke leraar
          </p>
        </div>

        {/* Quote Card */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 transition-all duration-300 ${
          isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
        }`}>
          {/* Quote Text */}
          <div className="text-center mb-8">
            <div className="text-6xl text-purple-600 mb-4">❝</div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed italic mb-6">
              {currentQuote.text}
            </blockquote>
            <div className="text-6xl text-purple-600 rotate-180 inline-block">❝</div>
          </div>

          {/* Author */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full">
              <span className="text-lg font-semibold">— {currentQuote.author}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-full max-w-md"></div>
            <div className="mx-4 text-purple-400 text-2xl">✨</div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-full max-w-md"></div>
          </div>

          {/* Reflection Question */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤔</div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  Reflectievraag voor jou als leraar:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {currentQuote.question}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={getNewQuote}
            disabled={isAnimating}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center space-x-3">
              <span>{isAnimating ? 'Nieuwe wijsheid komt eraan...' : 'Nieuwe Inspiratie'}</span>
              <span className="text-2xl group-hover:rotate-180 transition-transform duration-300">
                {isAnimating ? '⏳' : '🔄'}
              </span>
            </span>
          </button>
        </div>

        {/* Quote Counter */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            <span className="text-sm">
              Quote {currentQuoteIndex + 1} van {quotes.length}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-purple-200 text-sm">
            💜 Gemaakt met liefde voor alle toegewijde leraren
          </p>
        </div>
      </div>
    </div>
  )
}