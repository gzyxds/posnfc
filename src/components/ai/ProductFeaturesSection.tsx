import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  DeviceTabletIcon,
  UserGroupIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

/**
 * 产品功能特色数据接口
 */
interface ProductFeature {
  name: string
  description: string
  icon: React.ElementType
}

/**
 * 产品功能特色数据
 */
const productFeatures: ProductFeature[] = [
  {
    name: 'AI智能对话',
    description:
      '运用自然语言处理技术，实现智能知识库搜索和问答，提升用户体验。',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: '知识库应用',
    description: '支持创建多个知识库，适用于不同场景，打造企业专属应用。',
    icon: DocumentTextIcon,
  },
  {
    name: '多样化发布',
    description: '应用支持网页、JS嵌入、API接口三种发布方式。',
    icon: GlobeAltIcon,
  },
  {
    name: '数据训练',
    description: '通过后台训练数据，用户可快速查阅各种内部资料和文档。',
    icon: CpuChipIcon,
  },
  {
    name: '数据测试',
    description: '训练好的数据可在后台进行测试，大幅提升用户体验。',
    icon: ShieldCheckIcon,
  },
  {
    name: '移动端自适应',
    description: '支持多端访问，完美解决移动端管理需求。',
    icon: DeviceTabletIcon,
  },
  {
    name: 'AI大语言模型',
    description: '支持GPT3.5、GPT4.0、ChatGLM等多种大语言模型。',
    icon: CpuChipIcon,
  },
  {
    name: '多场景适用',
    description: '适用于企业智能客服、文档管理、专家顾问助理等场景。',
    icon: UserGroupIcon,
  },
]

/**
 * 产品功能特色组件 - 使用现代卡片布局
 * 展示AI产品的核心功能特色，包括AI智能对话、知识库应用、多样化发布等
 *
 * @returns 产品功能特色组件
 */
export function ProductFeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base leading-7 font-semibold text-indigo-600">
            产品功能特色
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            强大的AI功能体系
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            从智能对话到知识库应用，从数据训练到多端适配，全方位满足企业AI需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
          >
            {productFeatures.map((feature) => (
              <li
                key={feature.name}
                className="overflow-hidden outline outline-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-indigo-600 text-white">
                    <feature.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                  <Menu as="div" className="relative ml-auto">
                    <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">打开选项</span>
                      <EllipsisHorizontalIcon
                        aria-hidden="true"
                        className="size-5"
                      />
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
                          了解更多
                          <span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即使用
                          <span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
