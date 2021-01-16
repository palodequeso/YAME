import { LitElement, html, customElement, property, css } from 'lit-element';

export enum UIPanelSide {
  UIPanelFloating = 0,
  UIPanelLeft,
  UIPanelRight,
  UIPanelTop,
  UIPanelBottom,
};

@customElement('ui-panel')
export class UIPanel extends LitElement {
  static styles = css`
    :host {
      position: fixed;
    }
  `;

  @property({ type: Number })
  side = UIPanelSide.UIPanelLeft;

  @property({ type: Boolean })
  open = false;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ui-panel': UIPanel;
  }
}
