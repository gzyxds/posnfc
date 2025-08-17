# Salient 项目开发规则

## 1. 代码风格与格式化
- **强制使用 Prettier**：所有代码必须通过 `npm run lint` 检查，确保符合 `.prettierrc.js` 配置。
- **ESLint 规则**：遵循 `.eslintrc.json` 配置，禁止使用未定义变量、强制类型检查等。
- **TypeScript 严格模式**：启用 `strict: true`，禁止隐式 `any` 类型。
- **Tailwind 类名规范**：
  - 使用 `clsx` 管理条件类名（如 `clsx('base-class', isActive && 'active-class')`）。
  - 避免内联样式，优先使用 Tailwind 工具类。

## 2. 组件开发规范
- **组件结构**：
  - 所有组件放在 `src/components/` 目录，按功能分组（如 `Header.tsx`, `Pricing.tsx`）。
  - 使用函数式组件 + TypeScript 接口定义 Props：
    ```tsx
    interface ButtonProps {
      variant: 'primary' | 'secondary';
      children: React.ReactNode;
    }
    export function Button({ variant, children }: ButtonProps) { ... }
    ```
- **无障碍性**：
  - 使用 `@headlessui/react` 构建可访问组件（如模态框、下拉菜单）。
  - 所有交互元素需包含 `aria-label` 或 `aria-labelledby`。
- **组件复用**：
  - 优先复用现有组件（如 `Container.tsx`、`Fields.tsx`）。
  - 新组件需通过 Storybook 或独立文档测试。

## 3. 文件与目录规范
- **命名约定**：
  - 组件文件：`PascalCase.tsx`（如 `Testimonials.tsx`）。
  - 工具函数/常量：`camelCase.ts`（如 `apiUtils.ts`）。
  - 页面目录：`kebab-case`（如 `src/app/(auth)/login/`）。
- **目录结构**：
  - 禁止在 `src/app/` 外创建页面。
  - 静态资源按类型分类：`src/images/avatars/`、`src/images/logos/`。
- **图片优化**：
  - 使用 Next.js `<Image>` 组件，通过 `sharp` 自动优化。
  - 禁止直接引用 `/public/` 外部图片。

## 4. 页面开发规范
- **元数据管理**：
  - 每个页面必须导出 `metadata` 对象：
    ```tsx
    export const metadata: Metadata = {
      title: '页面标题 - TaxPal',
      description: '页面描述',
    };
    ```
- **布局组件**：
  - 认证页面使用 `SlimLayout.tsx`，其他页面使用默认 `layout.tsx`。
  - 布局组件不得包含业务逻辑。

## 5. 状态管理与数据流
- **状态管理**：
  - 轻量级状态：使用 React `useState`/`useContext`。
  - 复杂状态：优先考虑 `Zustand` 或 `React Query`（需团队评估）。
- **API 请求**：
  - 使用 Next.js App Router 的路由处理函数（`route.ts`）。
  - 禁止在组件内直接调用外部 API，统一封装在 `src/lib/api/`。

## 6. 样式与主题
- **Tailwind 配置**：
  - 主题色通过 `tailwind.config.js` 扩展，禁止硬编码颜色值。
  - 响应式断点使用默认值（`sm:`、`md:`、`lg:`）。
- **字体使用**：
  - 正文：`font-sans`（Inter）。
  - 标题：`font-display`（Lexend）。

## 7. 提交与版本控制
- **提交信息规范**：
  ```bash
  <类型>(<范围>): <描述>
  # 示例
  feat(auth): 添加邮箱验证功能
  fix(pricing): 修复年付切换逻辑错误
  ```
- **分支策略**：
  - 主分支：`main`（仅用于生产部署）。
  - 开发分支：`develop`（集成新功能）。
  - 功能分支：`feature/xxx`（如 `feature/pricing-component`）。

## 8. 测试规范
- **单元测试**：
  - 工具类和工具函数需 100% 覆盖（使用 `Jest` + `React Testing Library`）。
  - 组件测试覆盖核心交互（如表单提交、按钮点击）。
- **E2E 测试**：
  - 关键流程（如登录→注册→支付）使用 `Playwright` 测试。

## 9. 性能与安全
- **性能优化**：
  - 大型组件使用 `React.lazy` 懒加载。
  - 图片使用 `next/image` 并设置 `placeholder="blur"`。
- **安全规则**：
  - 禁止在客户端暴露敏感信息（如 API 密钥）。
  - 表单验证需前端 + 后端双重校验。

## 10. 文档与协作
- **组件文档**：
  - 复杂组件需在文件顶部添加 JSDoc 注释：
    ```tsx
    /**
     * 价格方案展示组件
     * @param {Object} props - 组件属性
     * @param {boolean} props.isAnnual - 是否年付模式
     */
    ```
- **更新日志**：
  - 重大变更需在 `CHANGELOG.md` 记录，格式如下：
    ```markdown
    ## [1.2.0] - 2025-08-16
    ### Added
    - 多语言支持框架
    ### Fixed
    - 移动端导航菜单溢出问题
    ```

---

## 强制检查项
1. 所有代码提交前必须通过 `npm run lint` 和 `npm run build`。
2. 新功能需通过 Code Review，至少由 1 名核心成员审核。
3. 生产部署前需在 Staging 环境完成 E2E 测试。
