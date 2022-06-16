import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
// import {DragService} from "./drag.service";
// import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  bold = false;
  italic = false;
  line = false;
  currency: any
  styles = {
    font: ''
  };
  public selected: any;
  color: any = '';
  themeColor = '';
  // private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }
  //
  // setFont(font: any): string {
  //   this.styles.font = font.value;
  //   this.renderer.addClass(document.body, this.styles.font)
  //   console.log('this is font', font);
  //   return font;
  // }
  //
  // selectedComponent(components: any, type: number) {
  //   this.selected = {components, type};
  //   console.log('this is final slected ********', this.selected);
  // }

  changeFont(value: any) {
    // this.drag.step1.forEach((el: { id: any; uiData: any; }) => {
    //   if (el.id === this.selected.components.id) {
    //     el.uiData.font = value;
    //     // el.uiData.font_family= value;
    //   }
    //   console.log('this is changed ui arr', value)
    // })
  }

  changeFontStyle(type: number) {
    // if (type === 1) {
    //   this.bold = !this.bold
    //   this.drag.step1.forEach((el: { id: any; uiData: any; }) => {
    //     console.log('element', el.uiData.font);
    //     if (el.id === this.selected.components.id) {
    //       el.uiData.bold = !el.uiData.bold;
    //     }
    //   })
    // } else if (type === 2) {
    //   this.italic = !this.italic
    //   this.drag.step1.forEach((el: { id: any; uiData: any; }) => {
    //     if (el.id === this.selected.components.id) {
    //       el.uiData.italic = !el.uiData.italic;
    //     }
    //   })
    // } else if (type === 3) {
    //   this.line = !this.line
    //   this.drag.step1.forEach((el: { id: any; uiData: any; }) => {
    //     if (el.id === this.selected.components.id) {
    //       el.uiData.underline = !el.uiData.underline;
    //     }
    //   })
    //
    // } else {
    //   this.drag.step1.forEach((el: { id: any; uiData: any; }) => {
    //     if (el.id === this.selected.components.id) {
    //       // el.uiData.color = true;
    //     }
    //   })
    // }
  }

  // changeFontFamily(value: any) {
  //   this.drag.step1.forEach((el: { id: any, uiData: any; }) => {
  //     el.uiData.font_family = value;
  //    })
  //
  //   console.log('value', value);
  // }

  changeCurrency(value: any) {
    this.currency = value;
    // this.localStorage.setObject('currency', {currency: this.currency});
    console.log('value', value);
    console.log('value', this.currency);
  }
}
