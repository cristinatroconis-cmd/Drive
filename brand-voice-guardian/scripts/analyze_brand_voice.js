#!/usr/bin/env node

// This script reads the brand_voice_guides.md and extracts the guidelines for a given brand alias.

const fs = require('fs');
const path = require('path');

const brandAlias = process.argv[2];

if (!brandAlias) {
  console.error('Usage: node analyze_brand_voice.js <brand_alias>');
  process.exit(1);
}

const guidesPath = path.resolve(__dirname, '../references/brand_voice_guides.md');

if (!fs.existsSync(guidesPath)) {
  console.error(`Error: Brand voice guides file not found at ${guidesPath}`);
  process.exit(1);
}

const guidesContent = fs.readFileSync(guidesPath, 'utf8');

// Regex to find the section for the specific brand
const brandSectionRegex = new RegExp(`^## Brand: ${brandAlias}(.*?)(^---|## Brand:|$)`, 'ms');
const match = guidesContent.match(brandSectionRegex);

if (match && match[1]) {
  console.log(match[1].trim());
} else {
  console.error(`Error: No brand voice guide found for alias "${brandAlias}"`);
  process.exit(1);
}
