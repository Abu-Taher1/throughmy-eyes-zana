import zanaImage from '../assets/zana_1.webp'

function Section1() {
  return (
    <section className="mx-auto max-w-250 overflow-hidden bg-[#ffffff] shadow-2xl">
      <img
        src={zanaImage}
        alt="Illustration of a woman wearing a red scarf"
        className="block aspect-2/1 w-full object-cover"
      />

      <div className="px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-6 font-outfit text-[18px] leading-[1.6] text-[#131313] sm:text-[21px] lg:text-[24px] lg:leading-normal">
          <p>
            You have a heart that carries more kindness than words could ever describe. You’re the kind of person who notices the little things, remembers the smallest details, and cares even when nobody asks you to. You have a beautiful way of making people feel valued, a gentle soul that finds warmth in giving, and a thoughtful nature that speaks louder than a thousand words.
          </p>
          <p>
            There’s something so rare about the way you see the world, how you make room for others’ feelings, how you show up for people, and how you manage to bring a little light into their ordinary days. You’re caring, charming, effortlessly graceful, and beautifully imperfect in all the ways that make you human.
          </p>
          <p>
            And yes, you’re pretty, but that’s only a small part of who you are. It’s your heart, your sincerity, your little gestures, your warmth, and the way you make people feel that truly make you unforgettable. Some people leave behind memories, some leave behind smiles, but people like you leave a little warmth in every heart they touch.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section1
