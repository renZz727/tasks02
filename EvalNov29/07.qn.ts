export function validateHtml(str: string): boolean {
  if (str.trim().length === 0) return false;
  const stack = [];
  const map = {
    "<div>": "</div>",
    "<span>": "</span>",
    "<p>": "</p>",
    "<html>": "</html>",
    "<ul>": "</ul>",
    "<li>": "</li>",
  };
  let i = 0;
  let tags = [];
  while (i < str.length) {
    if (str[i] === "<") {
      let tag = "";
      while (str[i] !== ">") {
        tag += str[i];
        i++;
      }
      tag += str[i];
      tags.push(tag);
    }
    i++;
  }

  for (let i = 0; i < tags.length; i++) {
    if (tags.length % 2 !== 0) return false;
    if (map[tags[i]]) {
      stack.push(tags[i]);
    } else {
      let top = stack.pop();
      if (!top || tags[i] !== map[top]) return false;
    }
  }
  return true;
}
