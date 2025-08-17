import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'TaxPal非常容易使用,我不禁怀疑它是否真的在完成政府要求我做的事情。',
      author: {
        name: 'Sheryl Berge',
        role: 'Lynch LLC 首席执行官',
        image: avatarImage1,
      },
    },
    {
      content:
        '我正在尝试联系客服人员,我现在遇到了很大的麻烦,他们说这与我的账簿有关。请尽快回复我。',
      author: {
        name: 'Amy Hahn',
        role: 'Velocity Industries 总监',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'TaxPal最棒的地方在于每次我给员工发工资时,我的银行余额不像以前那样减少。等我弄清楚为什么我的卡被拒绝后,我很期待能花掉这些额外的现金。',
      author: {
        name: 'Leland Kiehn',
        role: 'Kiehn and Sons 创始人',
        image: avatarImage5,
      },
    },
    {
      content:
        '我以前用旧软件时需要做很多事情,但用TaxPal时完全不用做。虽然有点可疑,但我不得不说我很喜欢。',
      author: {
        name: 'Erin Powlowski',
        role: 'Armstrong Inc 首席运营官',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        '我以前必须向欧盟缴税,但使用TaxPal后不知怎么的就不用缴了。不过现在有点紧张去那里旅行。',
      author: {
        name: 'Peter Renolds',
        role: 'West Inc 创始人',
        image: avatarImage3,
      },
    },
    {
      content:
        '这是我发给你们支持团队的第四封邮件。我现在真的因为税务欺诈被关在监狱里。请回复该死的邮件,这很重要。',
      author: {
        name: 'Amy Hahn',
        role: 'Velocity Industries 总监',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="客户评价"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            全球企业的共同选择
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            我们的软件如此简单,以至于人们不得不爱上它。当你跳过大量关键功能时,
            简单是很容易实现的。
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
