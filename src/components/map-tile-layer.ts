import { html, customElement, property, css } from 'lit-element';
import { MapLayer } from './map-layer';
import { MapTile } from './map-tile';

@customElement('map-tile-layer')
export class MapTileLayer extends MapLayer {
  @property({ type: Number })
  tilesX = 0;

  @property({ type: Number })
  tilesY = 0;

  @property({ type: Number })
  tileWidth = 0;

  @property({ type: Number })
  tileHeight = 0;

  render() {
    return html`
      ${this.layerData.forEach((tile: any, index: number) => {
        const top = Math.floor(index / this.tilesX);
        const left = index % this.tilesX;
        return html`
          <map-tile
            top=${top}
            left=${left}
            width=${this.tileWidth}
            height=${this.tileHeight}
            offsetX=${tile.offsetX}
            offsetY=${tile.offsetY}
            sprite=${tile.sprite}
          ></map-tile>
        `;
      })}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-tile-layer': MapTileLayer;
  }
}
