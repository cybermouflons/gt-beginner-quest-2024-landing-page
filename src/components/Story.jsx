import React from 'react'
import Container from './Container'

function Story() {
  return (
    <>
    <Container otherClasses={"story"}>
  </Container>
  <Container otherClasses={'bg-slate-950 text-white'}>
  <div className="flex flex-col justify-end h-full items-center">
<div className="w-full bg-slate-900 p-4 shadow-lg ring-2 ring-blue-500 flex flex-col justify-center items-center">
<h3 className="text-3xl md:text-7xl text-center my-6 neon-text-pink">
  Storyline
</h3>
<p className="my-5 text-md text-center max-w-[800px]">
  Capture-the-Flag events are computer security competitions.
  Participants compete in security-themed challenges for the purpose
  of obtaining the highest score. Competitors are expected to “capture
  flags” to increase their score, hence the name of the event. Flags
  are usually random strings embedded in the challenges.
  Capture-the-Flag events are computer security competitions.
  Participants compete in security-themed challenges for the purpose
  of obtaining the highest score. Competitors are expected to “capture
  flags” to increase their score, hence the name of the event. Flags
  are usually random strings embedded in the challenges.
</p>
</div>
</div>
  </Container>
    </>
  )
}

export default Story