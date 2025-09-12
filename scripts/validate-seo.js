#!/usr/bin/env node

/**
 * SEO 文件生成和验证脚本
 * 用于检查 robots.txt 和 sitemap.xml 文件是否正确生成
 * 同时验证配置文件的完整性
 */

const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, '..', 'public')
const configDir = path.join(__dirname, '..', 'src', 'config')
const outDir = path.join(__dirname, '..', 'out')

const robotsPath = path.join(publicDir, 'robots.txt')
const sitemapPath = path.join(publicDir, 'sitemap.xml')
const outRobotsPath = path.join(outDir, 'robots.txt')
const outSitemapPath = path.join(outDir, 'sitemap.xml')

const seoConfigPath = path.join(configDir, 'seo.config.ts')
const robotsConfigPath = path.join(configDir, 'robots.config.ts')
const sitemapConfigPath = path.join(configDir, 'sitemap.config.ts')

// 检查文件是否存在
function checkFileExists(filePath, fileName) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${fileName} 文件存在`)
    return true
  } else {
    console.log(`❌ ${fileName} 文件不存在`)
    return false
  }
}

// 验证配置文件
function validateConfigFiles() {
  console.log('🔧 验证配置文件...')
  
  const configs = [
    { path: seoConfigPath, name: 'seo.config.ts' },
    { path: robotsConfigPath, name: 'robots.config.ts' },
    { path: sitemapConfigPath, name: 'sitemap.config.ts' }
  ]
  
  let allValid = true
  for (const config of configs) {
    if (!checkFileExists(config.path, config.name)) {
      allValid = false
    }
  }
  
  return allValid
}

// 验证 robots.txt 内容
function validateRobots() {
  console.log('\n🤖 验证 robots.txt 文件...')
  
  // 检查 public 目录下的静态文件
  let staticValid = false
  if (checkFileExists(robotsPath, 'robots.txt (静态)')) {
    const content = fs.readFileSync(robotsPath, 'utf8')
    staticValid = validateRobotsContent(content, '静态')
  }
  
  // 检查 out 目录下的构建文件
  let builtValid = false
  if (checkFileExists(outRobotsPath, 'robots.txt (构建)')) {
    const content = fs.readFileSync(outRobotsPath, 'utf8')
    builtValid = validateRobotsContent(content, '构建')
  }
  
  return staticValid || builtValid
}

function validateRobotsContent(content, type) {
  // 检查必要的指令
  const requiredDirectives = [
    'User-agent:',
    'Allow:',
    'Disallow:',
    'Sitemap:'
  ]

  let isValid = true
  for (const directive of requiredDirectives) {
    if (!content.includes(directive)) {
      console.log(`❌ robots.txt (${type}) 缺少 ${directive} 指令`)
      isValid = false
    }
  }

  if (isValid) {
    console.log(`✅ robots.txt (${type}) 内容验证通过`)
  }

  return isValid
}

// 验证 sitemap.xml 内容
function validateSitemap() {
  console.log('\n🗺️ 验证 sitemap.xml 文件...')
  
  // 检查 public 目录下的静态文件
  let staticValid = false
  if (checkFileExists(sitemapPath, 'sitemap.xml (静态)')) {
    const content = fs.readFileSync(sitemapPath, 'utf8')
    staticValid = validateSitemapContent(content, '静态')
  }
  
  // 检查 out 目录下的构建文件
  let builtValid = false
  if (checkFileExists(outSitemapPath, 'sitemap.xml (构建)')) {
    const content = fs.readFileSync(outSitemapPath, 'utf8')
    builtValid = validateSitemapContent(content, '构建')
  }
  
  return staticValid || builtValid
}

function validateSitemapContent(content, type) {
  // 检查 XML 结构
  const requiredElements = [
    '<?xml',
    '<urlset',
    '<url>',
    '<loc>',
    '<lastmod>',
    '<changefreq>',
    '<priority>'
  ]

  let isValid = true
  for (const element of requiredElements) {
    if (!content.includes(element)) {
      console.log(`❌ sitemap.xml (${type}) 缺少 ${element} 元素`)
      isValid = false
    }
  }

  // 计算 URL 数量
  const urlCount = (content.match(/<url>/g) || []).length
  console.log(`📊 sitemap.xml (${type}) 包含 ${urlCount} 个 URL`)

  if (isValid) {
    console.log(`✅ sitemap.xml (${type}) 内容验证通过`)
  }

  return isValid
}

// 主函数
function main() {
  console.log('🔍 开始验证 SEO 配置...')

  const configValid = validateConfigFiles()
  const robotsValid = validateRobots()
  const sitemapValid = validateSitemap()

  console.log('\n📋 验证结果总结:')
  console.log(`配置文件: ${configValid ? '✅ 通过' : '❌ 失败'}`)
  console.log(`robots.txt: ${robotsValid ? '✅ 通过' : '❌ 失败'}`)
  console.log(`sitemap.xml: ${sitemapValid ? '✅ 通过' : '❌ 失败'}`)

  if (configValid && robotsValid && sitemapValid) {
    console.log('\n🎉 所有 SEO 文件验证通过！')
    console.log('\n💡 提示:')
    console.log('- 静态文件位于 public/ 目录')
    console.log('- 动态配置位于 src/config/ 目录')
    console.log('- 构建后的文件位于 out/ 目录')
    console.log('- 访问 https://cloudcvm.com/robots.txt 和 https://cloudcvm.com/sitemap.xml')
    process.exit(0)
  } else {
    console.log('\n⚠️  存在问题，请检查文件内容')
    console.log('\n🔧 修复建议:')
    if (!configValid) {
      console.log('- 检查 src/config/ 目录下的配置文件')
    }
    if (!robotsValid) {
      console.log('- 运行 npm run build 生成 robots.txt')
    }
    if (!sitemapValid) {
      console.log('- 运行 npm run build 生成 sitemap.xml')
    }
    process.exit(1)
  }
}

main()