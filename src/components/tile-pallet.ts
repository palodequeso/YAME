import { LitElement, html, customElement, property, css } from 'lit-element';
import { UIPanel } from './ui-panel';

@customElement('tile-pallet')
export class TilePallet extends UIPanel {
  @property({ type: Array })
  tiles = [];
}

declare global {
  interface HTMLElementTagNameMap {
    'tile-pallet': TilePallet;
  }
}
