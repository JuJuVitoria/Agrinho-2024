export function setupFontSize() {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const root = document.documentElement;
        
    let titleFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--tamanhoGrande'));
    let subtitleFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--tamanhoMedio'));
    let bodyFontSize = parseFloat(getComputedStyle(root).getPropertyValue('--tamanhoPequeno'));
        
    increaseFontBtn.addEventListener('click', function () {

        titleFontSize += 0.125; // Incrementa em 0.125rem (equivalente a 2px se a base for 16px)
        subtitleFontSize += 0.125;
        bodyFontSize += 0.125;
        
        root.style.setProperty('--tamanhoGrande', titleFontSize + 'rem');
        root.style.setProperty('--tamanhoMedio', subtitleFontSize + 'rem');
        root.style.setProperty('--tamanhoPequeno', bodyFontSize + 'rem');
    });
        
    decreaseFontBtn.addEventListener('click', function () {
        if (bodyFontSize > 0.625) { // Limite para não ficar menor que 10px (0.625rem se a base for 16px)
            titleFontSize -= 0.125;
            subtitleFontSize -= 0.125;
            bodyFontSize -= 0.125;
        
            root.style.setProperty('--tamanhoGrande', titleFontSize + 'rem');
            root.style.setProperty('--tamanhoMedio', subtitleFontSize + 'rem');
            root.style.setProperty('--tamanhoPequeno', bodyFontSize + 'rem');
        }
    });

}