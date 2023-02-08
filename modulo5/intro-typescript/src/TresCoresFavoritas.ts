export function perguntarCoresFavoritas(cor1: string, cor2: string, cor3: string): Array<string> {
    const coresFavoritas = [cor1, cor2, cor3];
    return coresFavoritas;
}

console.log(perguntarCoresFavoritas(
    process.argv[2], 
    process.argv[3], 
    process.argv[4])
    );