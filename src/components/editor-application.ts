import { LitElement, html, customElement, property, css } from 'lit-element';
import './editor-area';
import './tile-pallet';

@customElement('editor-application')
export class EditorApplication extends LitElement {
  static styles = css`
    :host {
      background: #000000;
    }
  `;
  
  render() {
    return html`
      <editor-area></editor-area>
      <tile-pallet></tile-pallet>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-application': EditorApplication;
  }
}
