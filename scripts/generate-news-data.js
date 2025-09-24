const fs = require('fs');
const path = require('path');

/**
 * 生成新闻数据脚本
 * 在构建时读取 news 目录下的所有 markdown 文件
 * 并生成一个包含所有新闻内容的 JSON 文件
 */
function generateNewsData() {
  const newsDir = path.join(__dirname, '..', 'src', 'app', 'news', 'news');
  const outputDir = path.join(__dirname, '..', 'src', 'app', 'news', 'data');
  const outputFile = path.join(outputDir, 'news-data.json');

  console.log('📁 正在读取新闻目录:', newsDir);

  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 检查新闻目录是否存在
  if (!fs.existsSync(newsDir)) {
    console.error('❌ 新闻目录不存在:', newsDir);
    process.exit(1);
  }

  // 读取所有 .md 文件
  const files = fs.readdirSync(newsDir);
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  console.log(`📖 发现 ${markdownFiles.length} 个 markdown 文件:`, markdownFiles);

  // 读取每个文件的内容
  const newsData = {};
  const fileList = [];

  markdownFiles.forEach(filename => {
    try {
      const filePath = path.join(newsDir, filename);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      newsData[filename] = content;
      fileList.push(filename);
      
      console.log(`✅ 成功读取: ${filename} (${content.length} 字符)`);
    } catch (error) {
      console.error(`❌ 读取文件失败 ${filename}:`, error.message);
    }
  });

  // 生成输出数据
  const output = {
    files: fileList.sort(), // 按文件名排序
    data: newsData,
    generatedAt: new Date().toISOString(),
    totalFiles: fileList.length
  };

  // 写入 JSON 文件
  try {
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`🎉 新闻数据生成成功!`);
    console.log(`📄 输出文件: ${outputFile}`);
    console.log(`📊 总计 ${output.totalFiles} 个文件`);
  } catch (error) {
    console.error('❌ 写入文件失败:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  generateNewsData();
}

module.exports = generateNewsData;