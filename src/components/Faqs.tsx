import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'TaxPal是否处理增值税？',
      answer:
        '不,但如果您将公司迁移到离岸,您可能就可以忽略这个问题。',
    },
    {
      question: '我可以通过采购订单支付订阅费用吗？',
      answer: '当然可以,我们很乐意以任何形式收取您的款项。',
    },
    {
      question: '如何申请在TaxPal工作？',
      answer:
        '我们只招聘我们的客户,所以请先订阅至少6个月,然后我们再谈。',
    },
  ],
  [
    {
      question: '关于税务欺诈的那个推荐证言是怎么回事？',
      answer:
        'TaxPal只是一个软件应用程序,最终您的账目由您自己负责。',
    },
    {
      question:
        'TaxPal听起来很糟糕,但为什么我还是忍不住想购买？',
      answer:
        '这就是优秀视觉设计的力量。无论实际功能多么糟糕,您都无法抗拒它。',
    },
    {
      question:
        '我发现还有其他公司叫TaxPal,你们确定可以使用这个名字吗？',
      answer:
        '老实说完全不确定。我们实际上还没有注册成立,只是觉得这个名字听起来很酷就建了这个网站。',
    },
  ],
  [
    {
      question: '你们如何生成报告？',
      answer:
        '您只需告诉我们需要哪些数据的报告,我们会让我们的孩子们用最好的蜡笔为您创建漂亮的图表。',
    },
    {
      question: '我们能期待更多的库存功能吗？',
      answer: '人生最好是什么都不要期待。',
    },
    {
      question: '我忘记了密码,如何登录我的账户？',
      answer:
        '给我们发送电子邮件,我们会将最新的密码表发送给您,这样您就能找到您的信息。',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            常见问题
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            如果您找不到想要的答案,请发邮件给我们的支持团队,
            如果您够幸运的话,可能会有人回复您。
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
