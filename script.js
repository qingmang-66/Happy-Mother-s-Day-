// 祝福语内容
const blessings = [
  '妈妈，母亲节快乐！',
  '祝您身体健康，心想事成',
  '愿时光对您温柔以待',
  '爱你！'
];

// 打字机效果
function typeWriter(text, index = 0) {
  if (index < text.length) {
    document.getElementById('typing-text').innerHTML += text.charAt(index);
    setTimeout(() => typeWriter(text, index + 1), 100);
  }
}

// 爱心生成器
function createHearts() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤';
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// 初始化
window.onload = () => {
  // 启动打字效果
  let index = 0;
  const loopTyping = () => {
    document.getElementById('typing-text').innerHTML = '';
    typeWriter(blessings[index]);
    index = (index + 1) % blessings.length;
    setTimeout(loopTyping, blessings[index].length * 150 + 2000);
  };
  loopTyping();

  // 生成爱心
  setInterval(createHearts, 300);
};