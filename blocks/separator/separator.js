export default async function decorate(block) {
  const hr = document.createElement('hr');
  // decorate quotation
  hr.className = 'separator-horizontal-rule';
  block.innerHTML = '';
  block.append(hr);
}
