import zanaImage from '../assets/zana_2.webp'

function Section2() {
  return (
    <section className="mx-auto max-w-250 bg-white px-6 py-12 text-[#131313] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="w-full max-w-70 shrink-0 sm:max-w-[320px] lg:w-[34%]">
          <img
            src={zanaImage}
            alt="A woman walking through a sunflower field"
            className="block h-auto w-full"
          />
        </div>

        <div className="w-full max-w-xl font-outfit text-[18px] leading-[1.6] sm:text-[21px] lg:w-[52%] lg:text-[24px] lg:leading-normal">
          <p>
            When the sun is bright, sunflowers turn toward the light. But when darkness falls, they gently turn toward each other.
          </p>
          <p className="mt-8">
            Still, I’ll choose to face you when there’s light—because your soft grace outshines the sun, and Your soul is the only light I ever want to follow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section2
