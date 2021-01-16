import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('editor-area')
export class EditorArea extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000000;
    }
  `;

  @property({ type: Array })
  layers = [];

  @property({ type: Array })
  collisionShapes = [];

  @property({ type: Array })
  collisionTiles = [];
  
  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-area': EditorArea;
  }
}
