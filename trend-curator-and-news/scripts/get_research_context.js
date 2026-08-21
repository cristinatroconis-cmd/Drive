// /Users/cristinatroconis/Projects/Drive/trend-curator-and-news/scripts/get_research_context.js

/**
 * Módulo: Retriever (Contexto de Investigación)
 * Objetivo: Recibe datos de nichos/temas y estructura los parámetros de búsqueda para la IA/Agente.
 * 
 * Uso: node get_research_context.js '<json_niche_data>'
 */

const getResearchContext = (nicheData) => {
    try {
        // En un escenario real, este script procesaría el JSON de nichos y 
        // aplicaría filtros de credibilidad definidos en source_preferences.md
        const context = {
            search_keywords: nicheData.keywords || [],
            target_niche: nicheData.niche || "Psicoterapia Humanista Existencial",
            filters: ["artículos científicos", "estudios neurociencia", "meta-análisis"],
            timestamp: new Date().toISOString()
        };
        
        return context;
    } catch (error) {
        throw new Error(`Error procesando contexto de investigación: ${error.message}`);
    }
};

// Ejecución
try {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        throw new Error("No se proporcionaron datos de nicho.");
    }
    
    const nicheData = JSON.parse(args[0]);
    const result = getResearchContext(nicheData);
    
    // Output para que el agente Gemini lo pueda parsear
    console.log(JSON.stringify(result, null, 2));
} catch (error) {
    console.error(`Error fatal: ${error.message}`);
    process.exit(1);
}
