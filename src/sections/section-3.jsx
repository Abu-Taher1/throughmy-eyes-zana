import zanaImage from '../assets/zana_3.webp'

function Section3() {
  return (
    <section className="mx-auto max-w-250 bg-white text-[#131313]">
      <img
        src={zanaImage}
        alt="Watercolor illustration showing a woman's eyes"
        className="block aspect-2/1 w-full object-cover"
      />

      <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-20 lg:py-20">
        <p className="mx-auto max-w-3xl font-outfit text-[18px] leading-[1.7] sm:text-[21px] lg:text-[24px] lg:leading-normal">
          그녀의 눈은 고요한 물 위에 내려앉은 별빛 같았다—조용하고 깊으며, 한 번 바라보면 쉽게 잊을 수 없을 만큼 아름다웠다.
          <br />
          그 눈빛에는 별을 사랑하는 사람처럼 밝고 부드러운 느낌이 있었고, 말로는 결코 표현할 수 없는 여운을 마음에 남겼다.
        </p>
      </div>
    </section>
  )
}

export default Section3
