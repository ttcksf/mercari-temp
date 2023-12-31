const div = document.createElement('div');
div.style.width = '150px';
div.style.height = '150px';
div.style.padding = '8px';
div.style.backgroundColor = '#fff';
div.style.boxShadow = '-2px -2px 16px #ccc';
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.right = '0';
div.style.fontSize = '13px';
div.innerHTML = `
<div id="copyRangeHashTag">
<button id="copyBtnTwitterTemp">Copy</button>
<pre>
不定期でランダムに選んだ商品にて300円の期間限定セールやっています。
300円で表示されている時期にお気に入りしていただいた方、次回のご訪問時に価格が変わっている可能性がありますことをご了承ください。</pre>
</div>
`;
document.body.appendChild(div);
const copyBtnTwitterTemp = document.querySelector('#copyBtnTwitterTemp');
copyBtnTwitterTemp.addEventListener('click', copyOriginalHashTag);
function copyOriginalHashTag() {
  const copyRangePre = document.querySelector('#copyRangeHashTag > pre');
  navigator.clipboard.writeText(copyRangePre.textContent);
  copyBtnTwitterTemp.innerHTML = 'Copied';
  setTimeout(() => {
    copyBtnTwitterTemp.innerHTML = 'Copy';
  }, '1000');
}
