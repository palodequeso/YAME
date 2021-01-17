import { LitElement, html, customElement, property, css } from 'lit-element';

export enum MapLayerType {
  TileLayer = 0,
  ImageLayer,
};

@customElement('map-layer')
export class MapLayer extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
  `;

  @property({ type: Number })
  layerType = 0;

  @property({ type: Number })
  width = 0;

  @property({ type: Number })
  height = 0;

  // parallax value
  
  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-layer': MapLayer;
  }
}
