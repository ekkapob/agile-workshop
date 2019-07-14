const NUMBER = '{{NUMBER}}';
const IMG = '{{IMG}}';
const NAME = '{{NAME}}';
const INFO = '{{INFO}}';

export const TEMPLATE = `
  <div class="col-md-4 col-lg-4">
    <img class="img-fluid rounded mb-3" src="${IMG}" alt="${NAME}">
  </div>
  <div class="col-md-8 col-lg-8 mb-5">
    <h2>ตัวเลขพิเศษของคุณคือ ${NUMBER}</h2>
    <br>
    <h4>ฮีโร่ประจำตัวของคุณคือ ${NAME}</h4>
    <div>${INFO}</div>
  </div>`;

export function executeTemplate (template, number, img, name, info) {
  template = template.replace(new RegExp(NUMBER, 'g'), number)
  template = template.replace(new RegExp(IMG, 'g'), img)
  template = template.replace(new RegExp(NAME, 'g'), name)
  template = template.replace(new RegExp(INFO, 'g'), info)
  return template;
}
