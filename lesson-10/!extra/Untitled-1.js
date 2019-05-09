class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        elem.textContent = 'any text';
        elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        document.body.appendChild(elem);
    }
}

const block = new Options ('150px', '150px', '#bafffa', '25px', 'center');

block.createDiv();