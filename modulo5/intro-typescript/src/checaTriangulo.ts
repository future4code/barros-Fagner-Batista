export function tipoTriangulo(ladoA: number, ladoB: number, ladoC: number): string {
    if (ladoA === ladoB && ladoB === ladoC) {
      return 'Equilátero';
    }
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return 'Isósceles';
    }
    return 'Escaleno';
  }


  

  export default tipoTriangulo