import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('map-tile')
export class MapTile extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
  `;

  @property({ type: String })
  sprite = '';

  @property({ type: Number })
  top = 0;

  @property({ type: Number })
  left = 0;

  @property({ type: Number })
  offsetX = 0;

  @property({ type: Number })
  offsetY = 0;

  @property({ type: Number })
  width = 0;

  @property({ type: Number })
  height = 0;
  
  render() {
    return html`
      <style>
        :host {
          background: url(${this.sprite});
          background-position: -${this.offsetX}px -${this.offsetY}px;
          width: ${this.width}px;
          height: ${this.height}px;
          top: ${this.top}px;
          left: ${this.left}px;
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-tile': MapTile;
  }
}
