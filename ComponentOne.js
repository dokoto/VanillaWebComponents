const ownerDocument = document.currentScript.ownerDocument;
class ComponentOne extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = ownerDocument.querySelector("#ComponentOne");
    const instance = template.content.cloneNode(true);
    shadow.appendChild(instance);
  }
}

customElements.define("cc-one", ComponentOne);
