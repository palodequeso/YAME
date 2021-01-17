import { html, customElement, property, css } from 'lit-element';
import { MapLayer, MapLayerType } from './map-layer';

@customElement('map-image-layer')
export class MapImageLayer extends MapLayer {
  @property({ type: String })
  imageSrc = '';

  constructor() {
    super();
    this.layerType = MapLayerType.ImageLayer;
  }

  render() {
    return html`
      <img src="${this.imageSrc}"></img>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-image-layer': MapImageLayer;
  }
}
