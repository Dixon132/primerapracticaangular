import { Component, computed, signal } from '@angular/core';
//si signal cambia computed acciona creo
@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.css',
})
export class EditorFiltro {
  brillo = signal(100)
  contraste = signal(100)
  blur = signal(0)
  modoVintage = signal(false);
  filtroScss = computed(() => {
    const base = `
    brightness(${this.brillo()}%)
    contrast(${this.contraste()}%)
    blur(${this.blur()}px)
  `;

    if (this.modoVintage()) {
      return base + `
      contrast(55%)
      sepia(60%)
      saturate(90%)
      grayscale(40%)
    `;
    }

    return base;
  });


  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
  }

  toggleSepia() {
    this.modoVintage.update(mv => !mv);
  }

}
