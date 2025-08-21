import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

/**
 * AI产品数据接口
 */
interface AIProduct {
  name: string
  description: string
  icon: React.ElementType
  features: string[]
}

/**
 * AI产品数据
 */
const aiProducts: AIProduct[] = [
  {
    name: 'AI智聊系统开发',
    description: '快速搭建AI智能聊天系统，包含：公众号端，小程序端，PC端，APP端',
    icon: ChatBubbleLeftRightIcon,
    features: ['多端支持', '智能对话', '快速部署'],
  },
  {
    name: 'AI绘画系统开发',
    description: '快速搭建AI绘画软件，包含：公众号端，小程序端，抖音小程序端',
    icon: PaintBrushIcon,
    features: ['创意生成', '多平台发布', '高质量输出'],
  },
  {
    name: '接入AI接口',
    description: '为企业办公工具接入AI接口,包含：企业微信，钉钉，飞书',
    icon: CpuChipIcon,
    features: ['无缝集成', '企业级安全', '高效协作'],
  },
  {
    name: '训练大语言模型',
    description: '打造专属企业知识库的AI模型,包含：客服，数字人直播，AI女友',
    icon: CloudIcon,
    features: ['定制化训练', '专业知识库', '多场景应用'],
  },
]

/**
 * AI产品展示组件 - 使用现代卡片布局
 * 展示AI相关产品和解决方案，包括AI智聊系统、AI绘画系统等
 * 
 * @returns AI产品展示组件
 */
export function AIProductsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-indigo-600">AI解决方案</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
            AI智能聊天系统、AI绘画、大模型知识库训练开发
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            艺创AI企业解决方案，AI智聊系统AI绘画系统的AI解决方案，快速搭建，多端支持
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
            {aiProducts.map((product) => (
              <li key={product.name} className="overflow-hidden outline outline-gray-200">
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-indigo-600 text-white">
                    <product.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">{product.name}</div>
                  <Menu as="div" className="relative ml-auto">
                    <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">打开选项</span>
                      <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          查看详情<span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即体验<span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}