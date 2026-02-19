import { Component } from '@angular/core';
import { EditorFiltro } from './editor-filtro/editor-filtro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorFiltro],
  template: `<app-editor-filtro></app-editor-filtro>`,
})
export class App { }
