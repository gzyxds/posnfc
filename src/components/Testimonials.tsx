import Image from 'next/image'
import avatar1 from '@/images/avatars/avatar-1.png'
import avatar2 from '@/images/avatars/avatar-2.png'
import avatar3 from '@/images/avatars/avatar-3.png'
import avatar4 from '@/images/avatars/avatar-4.png'
import avatar5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  {
    body: '工作质量非常好。处理问题专业且高效。对细节的关注令人印象深刻。',
    author: {
      name: '李小明',
      handle: 'xiaoming_li',
      imageUrl: avatar1,
    },
  },
  {
    body: '团队合作非常愉快。他们不仅技术实力强，服务态度也很好。项目按时完成，效果超出预期。',
    author: {
      name: '张伟',
      handle: 'wei_zhang',
      imageUrl: avatar2,
    },
  },
  {
    body: '专业水平一流，沟通顺畅，是值得信赖的合作伙伴。',
    author: {
      name: '王芳',
      handle: 'fang_wang',
      imageUrl: avatar3,
    },
  },
  {
    body: '非常满意他们的服务。团队反应迅速，能够准确理解需求并提供优质解决方案。',
    author: {
      name: '刘静',
      handle: 'jing_liu',
      imageUrl: avatar4,
    },
  },
  {
    body: '服务质量超出预期。团队专业且富有创造力，是理想的合作伙伴。',
    author: {
      name: '陈明',
      handle: 'ming_chen',
      imageUrl: avatar5,
    },
  },
  {
    body: '非常专业的团队。他们不仅按时完成项目，还提供了很多有价值的建议。',
    author: {
      name: '赵强',
      handle: 'qiang_zhao',
      imageUrl: avatar1,
    },
  },
  {
    body: '与他们合作是一次很好的体验。团队专业且富有创意，交付的成果令人满意。',
    author: {
      name: '孙婷',
      handle: 'ting_sun',
      imageUrl: avatar2,
    },
  },
  {
    body: '出色的服务质量和专业态度。他们总是能够及时解决问题，提供有效的解决方案。',
    author: {
      name: '吴峰',
      handle: 'feng_wu',
      imageUrl: avatar3,
    },
  },
  {
    body: '很高兴能与这样专业的团队合作。他们的工作效率和质量都令人印象深刻。',
    author: {
      name: '郭丽',
      handle: 'li_guo',
      imageUrl: avatar4,
    },
  },
]

/**
 * 移动端简化评价卡片组件
 * 用于2x2网格布局的简化设计，采用直角设计，描述文本单行显示并截断
 */
function MobileSimplifiedTestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <Image
          alt=""
          src={testimonial.author.imageUrl}
          width={32}
          height={32}
          className="size-8 rounded-full bg-gray-50"
        />
        <div>
          <div className="font-medium text-gray-900 text-sm">
            {testimonial.author.name}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-700 text-sm">
        <p className="truncate" title={testimonial.body}>{`"${testimonial.body}"`}</p>
      </blockquote>
    </div>
  )
}

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            客户评价
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            我们已经与数千位优秀客户合作
          </p>
        </div>
        
        {/* 移动端瀑布流布局 */}
        <div className="block sm:hidden mt-16">
          <div className="columns-2 gap-4 space-y-4">
            {testimonials.slice(0, 8).map((testimonial) => (
              <div key={testimonial.author.handle} className="break-inside-avoid mb-4">
                <MobileSimplifiedTestimonialCard
                  testimonial={testimonial}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* PC端多列布局 */}
        <div className="hidden sm:block mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      alt=""
                      src={testimonial.author.imageUrl}
                      width={40}
                      height={40}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
