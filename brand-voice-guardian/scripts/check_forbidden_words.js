// /Users/cristinatroconis/Projects/Drive/brand-voice-guardian/scripts/check_forbidden_words.js

/**
 * Módulo: Scanner (Detector de palabras prohibidas)
 * Objetivo: Detecta palabras prohibidas según la guía.
 * Uso: node check_forbidden_words.js <text_file_path> <brand_alias>
 */

const fs = require('fs');

function checkForbiddenWords(text, brandAlias) {
    // Lógica para detectar palabras prohibidas
    return ["palabra1", "palabra2"];
}

const args = process.argv.slice(2);
// ... lógica de lectura de archivo ...
console.log(JSON.stringify(checkForbiddenWords("text", args[1])));
