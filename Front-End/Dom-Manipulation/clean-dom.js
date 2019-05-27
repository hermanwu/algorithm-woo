// remove all js script from html
function stripScript(s) {
  let div = window.document.createElement('div');
  div.innerHTML = s;
  let scripts = div.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return div.innerHTML;
}

console.log(
 stripScript('<span><script type="text/javascript">alert(\'foo\');<\/script><\/span>')
)
// remove inline event handler

$(function() {
  $('a').removeAttr('onclick');
});