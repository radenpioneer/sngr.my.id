import type { FC } from 'react'
import type { GetImageResult } from 'astro'

const HomeSection: FC<{
  title: string
  bio: string
  image: GetImageResult
}> = ({ title, bio, image }) => {
  return (
    <article className="min-h-full flex flex-col-reverse md:flex-row-reverse items-center gap-4">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
        <p className="md:text-lg">{bio}</p>
      </div>
      <div>
        <img
          src={image.src}
          className="w-[100px] h-[100px] object-cover object-center rounded-full shadow-md"
          {...image.attributes}
          loading="eager"
          alt=""
        />
      </div>
    </article>
  )
}

export default HomeSection
