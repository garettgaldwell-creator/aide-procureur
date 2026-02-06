// ============================================
// APPLICATION PRINCIPALE - BUREAU DU PROCUREUR
// ============================================

// === ÉTAT DE L'APPLICATION ===
const state = {
    selectedInfractions: [],
    modifiers: {
        recidive1: false,
        recidive2: false,
        mineur: false,
        cooperation: false,
        aveux: false,
        troublePsy: false
    }
};

// === CONVERSION TEMPS RÉEL → RP ===
const conversionTable = {
    0.25: 0, 0.5: 0, 1: 0, 2: 1, 3: 3, 5: 3, 6: 4, 7: 7, 8: 5,
    10: 10, 15: 8, 20: 10, 25: 13, 35: 30, 40: 20, 45: 35,
    60: 45, 100: 60
};

function convertToRP(years) {
    if (years === 0) return 0;
    
    // Chercher la correspondance exacte
    if (conversionTable[years]) {
        return conversionTable[years];
    }
    
    // Interpolation linéaire pour les valeurs intermédiaires
    const keys = Object.keys(conversionTable).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < keys.length - 1; i++) {
        if (years > keys[i] && years < keys[i + 1]) {
            const ratio = (years - keys[i]) / (keys[i + 1] - keys[i]);
            return Math.round(conversionTable[keys[i]] + ratio * (conversionTable[keys[i + 1]] - conversionTable[keys[i]]));
        }
    }
    
    // Si au-delà du tableau, extrapoler
    return Math.round(years * 0.6);
}

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderInfractionsList();
    attachEventListeners();
    updateCalculations();
});

// === NAVIGATION ===
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const modules = document.querySelectorAll('.module');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetModule = btn.dataset.module;
            
            // Désactiver tous les boutons et modules
            navBtns.forEach(b => b.classList.remove('active'));
            modules.forEach(m => m.classList.remove('active'));
            
            // Activer le bouton et module sélectionnés
            btn.classList.add('active');
            document.getElementById(targetModule).classList.add('active');
        });
    });
}

// === RENDU DE LA LISTE DES INFRACTIONS ===
function renderInfractionsList() {
    const container = document.getElementById('infractions-list');
    container.innerHTML = '';
    
    Object.entries(CODE_PENAL).forEach(([categoryKey, infractions]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-group';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = formatCategoryName(categoryKey);
        categoryDiv.appendChild(categoryTitle);
        
        infractions.forEach(infraction => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'infraction-item';
            
            const label = document.createElement('label');
            label.className = 'infraction-checkbox';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.id = infraction.id;
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    addInfraction(infraction);
                } else {
                    removeInfraction(infraction.id);
                }
            });
            
            const labelDiv = document.createElement('div');
            labelDiv.className = 'infraction-label';
            
            const nameSpan = document.createElement('div');
            nameSpan.className = 'infraction-name';
            nameSpan.textContent = infraction.name;
            
            const penaltySpan = document.createElement('div');
            penaltySpan.className = 'infraction-penalty';
            penaltySpan.textContent = `${infraction.article} • ${infraction.prison} ans • ${infraction.amende.toLocaleString()} $`;
            
            labelDiv.appendChild(nameSpan);
            labelDiv.appendChild(penaltySpan);
            
            label.appendChild(checkbox);
            label.appendChild(labelDiv);
            
            itemDiv.appendChild(label);
            categoryDiv.appendChild(itemDiv);
        });
        
        container.appendChild(categoryDiv);
    });
}

function formatCategoryName(key) {
    const names = {
        'HOMICIDES': '🔪 Homicides',
        'BLESSURES': '🩹 Blessures',
        'VIOLENCES_SEXUELLES': '⚠️ Violences sexuelles',
        'ATTEINTES_PSYCHOLOGIQUES': '🧠 Atteintes psychologiques',
        'AUTORITE': '👮 Atteintes à l\'autorité',
        'VOIE_PUBLIQUE': '🚦 Voie publique',
        'JUSTICE': '⚖️ Justice',
        'ATTEINTE_HONNEUR': '🎭 Atteinte à l\'honneur',
        'GRAND_BANDITISME': '💀 Grand banditisme',
        'ARMES': '🔫 Armes',
        'STUPEFIANTS': '💊 Stupéfiants',
        'VOL': '💰 Vols',
        'PROPRIETE': '🏠 Propriété',
        'ADMINISTRATION': '🏛️ Administration',
        'TRAHISON': '🏴 Trahison'
    };
    return names[key] || key;
}

// === GESTION DES INFRACTIONS SÉLECTIONNÉES ===
function addInfraction(infraction) {
    if (!state.selectedInfractions.find(i => i.id === infraction.id)) {
        state.selectedInfractions.push(infraction);
        updateSelectedDisplay();
        updateCalculations();
    }
}

function removeInfraction(id) {
    state.selectedInfractions = state.selectedInfractions.filter(i => i.id !== id);
    
    // Décocher la case correspondante
    const checkbox = document.querySelector(`input[data-id="${id}"]`);
    if (checkbox) checkbox.checked = false;
    
    updateSelectedDisplay();
    updateCalculations();
}

function updateSelectedDisplay() {
    const container = document.getElementById('selected-list');
    
    if (state.selectedInfractions.length === 0) {
        container.innerHTML = '<p class="empty-state">Aucune infraction sélectionnée</p>';
        return;
    }
    
    container.innerHTML = '';
    state.selectedInfractions.forEach(infraction => {
        const tag = document.createElement('div');
        tag.className = 'infraction-tag';
        
        const name = document.createElement('span');
        name.textContent = infraction.name;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'tag-remove';
        removeBtn.textContent = '×';
        removeBtn.onclick = () => removeInfraction(infraction.id);
        
        tag.appendChild(name);
        tag.appendChild(removeBtn);
        container.appendChild(tag);
    });
}

// === CALCULS DES PEINES ===
function updateCalculations() {
    if (state.selectedInfractions.length === 0) {
        displayEmptyResults();
        return;
    }
    
    // Calcul de base (addition simple)
    let totalPrison = state.selectedInfractions.reduce((sum, inf) => sum + inf.prison, 0);
    let totalFines = state.selectedInfractions.reduce((sum, inf) => sum + inf.amende, 0);
    
    // Déterminer la catégorie la plus grave
    const categories = state.selectedInfractions.map(i => i.category);
    let maxCategory = 'Contravention';
    if (categories.includes('Crime')) maxCategory = 'Crime';
    else if (categories.includes('Délit')) maxCategory = 'Délit';
    
    // Application des modificateurs
    let finalPrison = totalPrison;
    let finalFines = totalFines;
    
    // Récidive (s'applique en premier)
    if (state.modifiers.recidive2) {
        finalPrison = totalPrison * 3;
        finalFines = totalFines * 3;
    } else if (state.modifiers.recidive1) {
        finalPrison = totalPrison * 2;
        finalFines = totalFines * 2;
    }
    
    // Mineur (÷2)
    if (state.modifiers.mineur) {
        finalPrison = finalPrison / 2;
        finalFines = finalFines / 2;
    }
    
    // Réductions (appliquées après mineur)
    let reductionPercent = 0;
    if (state.modifiers.cooperation) reductionPercent += 25;
    if (state.modifiers.aveux) reductionPercent += 15;
    if (state.modifiers.troublePsy) reductionPercent += 33;
    
    if (reductionPercent > 0) {
        finalPrison = finalPrison * (1 - reductionPercent / 100);
        finalFines = finalFines * (1 - reductionPercent / 100);
    }
    
    // Arrondir
    finalPrison = Math.round(finalPrison * 100) / 100;
    finalFines = Math.round(finalFines);
    
    // Conversion RP
    const rpMinutes = convertToRP(finalPrison);
    
    // Vérifier éligibilité CRPC
    const crpcEligible = checkCRPCEligibility(state.selectedInfractions);
    
    // Afficher les résultats
    displayResults(finalPrison, rpMinutes, finalFines, maxCategory, crpcEligible);
}

function checkCRPCEligibility(infractions) {
    // CRPC possible uniquement si TOUTES les infractions ≤ 10 ans
    return infractions.every(inf => inf.prison <= 10);
}

function displayResults(prison, rp, fines, category, crpcEligible) {
    document.getElementById('prison-time').textContent = `${prison} ans`;
    document.getElementById('prison-rp').textContent = `(${rp} minutes RP)`;
    document.getElementById('fines').textContent = `${fines.toLocaleString()} $`;
    document.getElementById('category').textContent = category;
    
    const crpcCard = document.getElementById('crpc-card');
    if (crpcEligible) {
        const crpcPrison = Math.round(prison * 0.5 * 100) / 100;
        const crpcRP = convertToRP(crpcPrison);
        const crpcFines = Math.round(fines * 0.5);
        
        // Si pas de peine de prison, afficher seulement l'amende réduite
        if (prison === 0) {
            document.getElementById('crpc-prison').textContent = `Amende réduite : ${crpcFines.toLocaleString()} $`;
            document.getElementById('crpc-rp').textContent = ``;
        } else {
            // Sinon afficher prison ET amende réduites
            document.getElementById('crpc-prison').textContent = `${crpcPrison} ans • ${crpcFines.toLocaleString()} $`;
            document.getElementById('crpc-rp').textContent = `(${crpcRP} minutes RP)`;
        }
        
        crpcCard.style.display = 'block';
    } else {
        crpcCard.style.display = 'none';
    }
}

function displayEmptyResults() {
    document.getElementById('prison-time').textContent = '0 ans';
    document.getElementById('prison-rp').textContent = '(0 minutes RP)';
    document.getElementById('fines').textContent = '0 $';
    document.getElementById('category').textContent = '-';
    document.getElementById('crpc-card').style.display = 'none';
}

// === ÉVÉNEMENTS ===
function attachEventListeners() {
    // Modificateurs
    document.getElementById('recidive-1').addEventListener('change', (e) => {
        state.modifiers.recidive1 = e.target.checked;
        if (e.target.checked) {
            document.getElementById('recidive-2').checked = false;
            state.modifiers.recidive2 = false;
        }
        updateCalculations();
    });
    
    document.getElementById('recidive-2').addEventListener('change', (e) => {
        state.modifiers.recidive2 = e.target.checked;
        if (e.target.checked) {
            document.getElementById('recidive-1').checked = false;
            state.modifiers.recidive1 = false;
        }
        updateCalculations();
    });
    
    document.getElementById('mineur').addEventListener('change', (e) => {
        state.modifiers.mineur = e.target.checked;
        updateCalculations();
    });
    
    document.getElementById('cooperation').addEventListener('change', (e) => {
        state.modifiers.cooperation = e.target.checked;
        updateCalculations();
    });
    
    document.getElementById('aveux').addEventListener('change', (e) => {
        state.modifiers.aveux = e.target.checked;
        updateCalculations();
    });
    
    document.getElementById('trouble-psy').addEventListener('change', (e) => {
        state.modifiers.troublePsy = e.target.checked;
        updateCalculations();
    });
    
    // Recherche d'infractions
    document.getElementById('search-infractions').addEventListener('input', (e) => {
        filterInfractions(e.target.value);
    });
    
    // Boutons d'action
    document.getElementById('reset-all').addEventListener('click', resetAll);
    document.getElementById('export-pdf').addEventListener('click', exportToPDF);
    
    // Module Codes
    initCodesModule();
    
    // Module Procédures
    initProceduresModule();
}

function filterInfractions(searchTerm) {
    const term = searchTerm.toLowerCase();
    const categories = document.querySelectorAll('.category-group');
    
    categories.forEach(category => {
        const items = category.querySelectorAll('.infraction-item');
        let visibleCount = 0;
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(term)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Masquer la catégorie si aucun résultat
        category.style.display = visibleCount > 0 ? 'block' : 'none';
    });
}

function resetAll() {
    // Réinitialiser les sélections
    state.selectedInfractions = [];
    
    // Décocher toutes les cases
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    // Réinitialiser les modificateurs
    state.modifiers = {
        recidive1: false,
        recidive2: false,
        mineur: false,
        cooperation: false,
        aveux: false,
        troublePsy: false
    };
    
    // Effacer la recherche
    document.getElementById('search-infractions').value = '';
    filterInfractions('');
    
    updateSelectedDisplay();
    updateCalculations();
}

function exportToPDF() {
    if (state.selectedInfractions.length === 0) {
        alert('Aucune infraction sélectionnée à exporter.');
        return;
    }
    
    // Récupérer les résultats actuels
    const prison = document.getElementById('prison-time').textContent;
    const rp = document.getElementById('prison-rp').textContent;
    const fines = document.getElementById('fines').textContent;
    const category = document.getElementById('category').textContent;
    
    // Initialiser jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configuration
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = 20;
    
    // === EN-TÊTE ===
    doc.setFillColor(200, 16, 46); // Rouge du logo
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('BUREAU DU PROCUREUR', pageWidth / 2, 15, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('Davidson County - Tennessee', pageWidth / 2, 25, { align: 'center' });
    doc.text('RAPPORT DE RÉQUISITIONS', pageWidth / 2, 32, { align: 'center' });
    
    yPos = 50;
    
    // === INFORMATIONS GÉNÉRALES ===
    doc.setTextColor(0, 40, 104);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    const today = new Date();
    doc.text(`Date: ${today.toLocaleDateString('fr-FR')}`, margin, yPos);
    doc.text(`Heure: ${today.toLocaleTimeString('fr-FR')}`, pageWidth - margin - 40, yPos);
    
    yPos += 15;
    
    // === SECTION INFRACTIONS ===
    doc.setDrawColor(200, 16, 46);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(200, 16, 46);
    doc.text('INFRACTIONS RETENUES', margin, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    
    state.selectedInfractions.forEach((inf, index) => {
        // Vérifier si on doit ajouter une nouvelle page
        if (yPos > pageHeight - 40) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setFont(undefined, 'bold');
        doc.text(`${index + 1}. ${inf.name}`, margin + 5, yPos);
        yPos += 5;
        
        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(`${inf.article} - ${inf.category}`, margin + 10, yPos);
        yPos += 4;
        doc.text(`Peine de base: ${inf.prison} ans • ${inf.amende.toLocaleString()} $`, margin + 10, yPos);
        
        yPos += 8;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
    });
    
    yPos += 5;
    
    // === SECTION MODIFICATEURS ===
    if (yPos > pageHeight - 60) {
        doc.addPage();
        yPos = 20;
    }
    
    doc.setDrawColor(200, 16, 46);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(200, 16, 46);
    doc.text('MODIFICATEURS APPLIQUÉS', margin, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    
    let hasModifiers = false;
    if (state.modifiers.recidive1) {
        doc.text('✓ Récidive (1ère) - Peine doublée', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    if (state.modifiers.recidive2) {
        doc.text('✓ Récidive (2ème) - Peine triplée', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    if (state.modifiers.mineur) {
        doc.text('✓ Mineur (< 21 ans) - Peine divisée par 2', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    if (state.modifiers.cooperation) {
        doc.text('✓ Coopération avec la justice - Réduction de 25%', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    if (state.modifiers.aveux) {
        doc.text('✓ Aveux complets - Réduction de 15%', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    if (state.modifiers.troublePsy) {
        doc.text('✓ Trouble psychique - Réduction de 33%', margin + 5, yPos);
        yPos += 6;
        hasModifiers = true;
    }
    
    if (!hasModifiers) {
        doc.setTextColor(100, 100, 100);
        doc.setFont(undefined, 'italic');
        doc.text('Aucun modificateur appliqué', margin + 5, yPos);
        yPos += 6;
        doc.setFont(undefined, 'normal');
        doc.setTextColor(0, 0, 0);
    }
    
    yPos += 5;
    
    // === SECTION RÉQUISITIONS FINALES ===
    if (yPos > pageHeight - 70) {
        doc.addPage();
        yPos = 20;
    }
    
    doc.setDrawColor(200, 16, 46);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(200, 16, 46);
    doc.text('RÉQUISITIONS FINALES', margin, yPos);
    
    yPos += 12;
    
    // Cadre pour les réquisitions
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(margin, yPos - 5, pageWidth - 2 * margin, 35, 3, 3, 'F');
    
    doc.setFontSize(11);
    doc.setTextColor(0, 40, 104);
    doc.setFont(undefined, 'bold');
    
    doc.text(`Catégorie: ${category}`, margin + 5, yPos + 3);
    yPos += 10;
    doc.text(`Emprisonnement: ${prison} ${rp}`, margin + 5, yPos);
    yPos += 10;
    doc.text(`Amendes: ${fines}`, margin + 5, yPos);
    
    yPos += 15;
    
    // === SECTION CRPC (si applicable) ===
    const crpcCard = document.getElementById('crpc-card');
    if (crpcCard.style.display !== 'none') {
        if (yPos > pageHeight - 50) {
            doc.addPage();
            yPos = 20;
        }
        
        yPos += 5;
        doc.setDrawColor(40, 167, 69);
        doc.setLineWidth(0.5);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 7;
        
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(40, 167, 69);
        doc.text('CRPC POSSIBLE (Plaider-coupable)', margin, yPos);
        
        yPos += 10;
        doc.setFillColor(232, 245, 233);
        doc.roundedRect(margin, yPos - 5, pageWidth - 2 * margin, 20, 3, 3, 'F');
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.setFont(undefined, 'normal');
        doc.text('En cas de reconnaissance de culpabilité (réduction de 50%):', margin + 5, yPos + 2);
        
        yPos += 8;
        doc.setFont(undefined, 'bold');
        const crpcPrisonText = document.getElementById('crpc-prison').textContent;
        const crpcRPText = document.getElementById('crpc-rp').textContent;
        doc.text(`${crpcPrisonText} ${crpcRPText}`, margin + 5, yPos);
        
        yPos += 10;
    }
    
    // === SIGNATURE ===
    yPos = pageHeight - 40;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.line(margin, yPos, margin + 80, yPos);
    doc.line(pageWidth - margin - 80, yPos, pageWidth - margin, yPos);
    
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    doc.text('Procureur', margin + 20, yPos + 6);
    doc.text('Signature', pageWidth - margin - 60, yPos + 6);
    
    // === BAS DE PAGE ===
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Bureau du Procureur - Davidson County, Tennessee', pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    // Télécharger le PDF
    doc.save(`requisitions_${Date.now()}.pdf`);
}

// === MODULE CODES ===
function initCodesModule() {
    const codeButtons = document.querySelectorAll('.code-btn');
    const codeDisplay = document.getElementById('code-display');
    
    codeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            codeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const codeType = btn.dataset.code;
            displayCode(codeType, codeDisplay);
        });
    });
    
    // Charger le code pénal par défaut
    displayCode('penal', codeDisplay);
    
    // Recherche dans les codes
    document.getElementById('search-codes').addEventListener('input', (e) => {
        searchInCodes(e.target.value);
    });
}

function displayCode(codeType, container) {
    const codeData = CODES_CONTENT[codeType];
    
    if (!codeData) {
        container.innerHTML = '<h2>Code non disponible</h2>';
        return;
    }
    
    container.innerHTML = `<h2>📚 ${codeData.title}</h2>`;
    
    // Si le code a des sections structurées (CODE_PENAL, CODE_ROUTE)
    if (codeData.sections) {
        Object.entries(codeData.sections).forEach(([category, items]) => {
            const section = document.createElement('div');
            section.style.marginBottom = '2rem';
            
            const title = document.createElement('h3');
            title.style.color = '#C8102E';
            title.style.borderBottom = '2px solid #F4E5C3';
            title.style.paddingBottom = '0.5rem';
            title.style.marginBottom = '1rem';
            title.textContent = formatCategoryNameForCode(category, codeType);
            section.appendChild(title);
            
            items.forEach(item => {
                const article = document.createElement('div');
                article.className = 'code-article';
                
                let content = `
                    <div class="article-number">${item.article}</div>
                    <div class="article-title">${item.name}</div>
                    <div class="article-content">
                `;
                
                if (item.description) {
                    content += `<strong>Description:</strong> ${item.description}<br>`;
                }
                
                if (item.prison !== undefined) {
                    content += `<strong>Peine:</strong> ${item.prison} ans d'emprisonnement (${convertToRP(item.prison)} minutes RP)<br>`;
                }
                
                if (item.amende) {
                    content += `<strong>Amende:</strong> ${item.amende.toLocaleString()} $<br>`;
                }
                
                content += `<strong>Catégorie:</strong> ${item.category}`;
                content += `</div>`;
                
                article.innerHTML = content;
                section.appendChild(article);
            });
            
            container.appendChild(section);
        });
    } 
    // Sinon afficher le contenu HTML brut
    else if (codeData.content) {
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = codeData.content;
        container.appendChild(contentDiv);
    }
}

function formatCategoryNameForCode(key, codeType) {
    if (codeType === 'penal') {
        return formatCategoryName(key);
    }
    
    if (codeType === 'route') {
        const names = {
            'PREMIERE_CLASSE': '📋 Contraventions de 1ère classe',
            'DEUXIEME_CLASSE': '📋 Contraventions de 2ème classe',
            'TROISIEME_CLASSE': '📋 Contraventions de 3ème classe',
            'QUATRIEME_CLASSE': '📋 Contraventions de 4ème classe',
            'CINQUIEME_CLASSE': '📋 Contraventions de 5ème classe',
            'DELITS_ROUTIERS': '🚨 Délits routiers'
        };
        return names[key] || key;
    }
    
    return key;
}

function getCodeTitle(codeType) {
    const titles = {
        'penal': 'Code Pénal',
        'procedure-penale': 'Code de Procédure Pénale',
        'civil': 'Code Civil',
        'procedure-civile': 'Code de Procédure Civile',
        'commerce': 'Code du Commerce',
        'route': 'Code de la Route',
        'constitution': 'Constitution du Tennessee',
        'jurisprudence': 'Répertoire de Jurisprudence'
    };
    return titles[codeType] || codeType;
}

function searchInCodes(term) {
    const articles = document.querySelectorAll('.code-article');
    const searchLower = term.toLowerCase();
    
    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        article.style.display = text.includes(searchLower) ? 'block' : 'none';
    });
}

// === MODULE PROCÉDURES ===
function initProceduresModule() {
    const procedureCards = document.querySelectorAll('.procedure-card');
    const detailContainer = document.getElementById('procedure-detail');
    
    procedureCards.forEach(card => {
        card.addEventListener('click', () => {
            const procedure = card.dataset.procedure;
            displayProcedure(procedure, detailContainer);
            detailContainer.style.display = 'block';
            detailContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function displayProcedure(type, container) {
    const procedures = {
        'gav': {
            title: '👮 Garde à vue',
            content: `
                <h3>Durée maximale</h3>
                <ul>
                    <li>Durée initiale : 24 heures</li>
                    <li>Prolongation (directeur unité) : +24h (total 48h)</li>
                    <li>Prolongation (procureur - infractions graves) : +24h (total 72h)</li>
                    <li>Prolongation exceptionnelle (procureur) : +24h (total 96h)</li>
                </ul>
                
                <h3>Droits du gardé à vue (Droits Miranda)</h3>
                <ul>
                    <li>✓ Droit à un avocat (désigné ou commis d'office)</li>
                    <li>✓ Droit de garder le silence</li>
                    <li>✓ Droit à un appel téléphonique</li>
                    <li>✓ Entretien confidentiel avec l'avocat (15 min)</li>
                    <li>✓ Assistance médicale si nécessaire</li>
                </ul>
                
                <h3>Procédure</h3>
                <ol>
                    <li>Notification immédiate au procureur</li>
                    <li>Lecture des droits Miranda</li>
                    <li>Audition(s) en présence de l'avocat</li>
                    <li>À l'issue : libération, prolongation, ou déferrement</li>
                </ol>
                
                <h3>Nullité</h3>
                <p>Le non-respect des articles 222-1 à 222-5 du CPP entraîne la nullité de la GAV.</p>
            `
        },
        'perquisition': {
            title: '🔍 Perquisition',
            content: `
                <h3>Conditions générales</h3>
                <ul>
                    <li><strong>Enquête de flagrance :</strong> Pas de mandat nécessaire</li>
                    <li><strong>Enquête préliminaire :</strong> Mandat du juge obligatoire</li>
                    <li><strong>Exception :</strong> Téléphone du gardé à vue et caméras (sans mandat)</li>
                </ul>
                
                <h3>Perquisition chez un professionnel au secret</h3>
                <ul>
                    <li>Décision écrite et motivée du procureur</li>
                    <li>Champ de perquisition limité et prévu à l'avance</li>
                    <li>Présence obligatoire d'un procureur</li>
                    <li><strong>Cabinet d'avocat :</strong> + Président du Tennessee Bar Association</li>
                </ul>
                
                <h3>Limites</h3>
                <p>La perquisition est strictement limitée à l'objet de l'enquête.</p>
            `
        },
        'mandat': {
            title: '📜 Mandats',
            content: `
                <h3>Types de mandats</h3>
                
                <h4>Mandat d'arrestation</h4>
                <p>Délivré par un juge sur demande du procureur. Permet l'arrestation immédiate d'une personne.</p>
                
                <h4>Mandat de perquisition</h4>
                <p>Obligatoire en enquête préliminaire. Doit spécifier :</p>
                <ul>
                    <li>Le lieu exact de la perquisition</li>
                    <li>L'objet recherché</li>
                    <li>Les motifs justifiant la perquisition</li>
                </ul>
                
                <h4>Mandat de comparution</h4>
                <p>Ordonne à une personne de se présenter devant le tribunal.</p>
                
                <h3>Validité</h3>
                <p>Un mandat doit être signé par un juge et motivé. Sa durée de validité est déterminée par le juge.</p>
            `
        },
        'audience': {
            title: '⚖️ Audiences',
            content: `
                <h3>Types d'audiences</h3>
                
                <h4>Comparution immédiate</h4>
                <ul>
                    <li>Jugement le jour même de l'arrestation</li>
                    <li>Faits directement établis</li>
                    <li>Nécessite l'accord du mis en cause</li>
                </ul>
                
                <h4>Citation directe</h4>
                <ul>
                    <li>Audience classique devant le tribunal</li>
                    <li>Convocation du prévenu par le procureur</li>
                </ul>
                
                <h4>Comparution préliminaire</h4>
                <ul>
                    <li>Avant le procès principal</li>
                    <li>Examen de la recevabilité et des preuves</li>
                </ul>
                
                <h3>Déroulement</h3>
                <ol>
                    <li>Appel de l'affaire</li>
                    <li>Vérification de l'identité du prévenu</li>
                    <li>Lecture des charges</li>
                    <li>Plaidoiries (procureur puis défense)</li>
                    <li>Délibéré</li>
                    <li>Prononcé du jugement</li>
                </ol>
            `
        },
        'crpc': {
            title: '🤝 CRPC (Plaider-coupable)',
            content: `
                <h3>Conditions d'éligibilité</h3>
                <ul>
                    <li>Délit puni d'une peine ≤ 10 ans maximum</li>
                    <li>Accord du procureur, du prévenu et de son avocat</li>
                    <li>Reconnaissance de culpabilité</li>
                </ul>
                
                <h3>Avantages</h3>
                <ul>
                    <li><strong>Réduction de peine obligatoire :</strong> minimum 50%</li>
                    <li>Procédure rapide</li>
                    <li>Évite un procès public</li>
                </ul>
                
                <h3>Procédure</h3>
                <ol>
                    <li>Proposition par le procureur, le prévenu ou son avocat</li>
                    <li>Négociation de la peine proposée</li>
                    <li>Signature de la convention par les parties</li>
                    <li>Homologation par le juge</li>
                </ol>
                
                <h3>Homologation</h3>
                <p>Le juge vérifie :</p>
                <ul>
                    <li>La libre volonté du prévenu</li>
                    <li>La proportionnalité de la peine</li>
                    <li>Le respect des conditions légales</li>
                </ul>
                <p><strong>Si refus d'homologation :</strong> le procureur apprécie à nouveau l'opportunité des poursuites.</p>
                
                <h3>Mineur</h3>
                <p>Assistance obligatoire d'un avocat pour une CRPC impliquant un mineur.</p>
            `
        },
        'miranda': {
            title: '📢 Droits Miranda',
            content: `
                <h3>Texte légal à réciter</h3>
                <div style="background: #F5F5F5; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #C8102E; margin: 1rem 0;">
                    <p><strong>Vous avez le droit :</strong></p>
                    <ul>
                        <li>De garder le silence</li>
                        <li>D'être assisté par un avocat désigné par vous ou commis d'office</li>
                        <li>De faire des déclarations ou de répondre aux questions qui vous sont posées</li>
                    </ul>
                    <p><strong>Tout ce que vous direz pourra être retenu contre vous.</strong></p>
                </div>
                
                <h3>Quand notifier les droits ?</h3>
                <ul>
                    <li><strong>Placement en garde à vue :</strong> Immédiatement</li>
                    <li><strong>Avant chaque audition :</strong> Rappel obligatoire</li>
                    <li><strong>Lors d'un contrôle d'identité :</strong> Si le contrôle précède une GAV</li>
                </ul>
                
                <h3>Conséquences du non-respect</h3>
                <p>La violation de l'obligation de notification des droits Miranda peut entraîner :</p>
                <ul>
                    <li>La nullité des aveux obtenus</li>
                    <li>La nullité de la garde à vue</li>
                    <li>L'irrecevabilité des preuves</li>
                </ul>
                
                <h3>Jurisprudence Miranda v. Arizona</h3>
                <p>La notification doit intervenir <strong>avant tout interrogatoire</strong> susceptible d'incriminer la personne.</p>
            `
        }
    };
    
    const proc = procedures[type];
    if (!proc) return;
    
    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2>${proc.title}</h2>
            <button onclick="document.getElementById('procedure-detail').style.display='none'" 
                    style="padding: 0.5rem 1rem; background: #E0E0E0; border: none; border-radius: 6px; cursor: pointer;">
                Fermer
            </button>
        </div>
        ${proc.content}
    `;
}
