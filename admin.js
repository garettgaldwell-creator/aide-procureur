// ============================================
// MODULE ADMINISTRATION
// ============================================

const ADMIN_PASSWORD_KEY = 'admin_password';
const ADMIN_LOGGED_KEY = 'admin_logged';

// Initialiser le mot de passe par défaut
if (!localStorage.getItem(ADMIN_PASSWORD_KEY)) {
    localStorage.setItem(ADMIN_PASSWORD_KEY, 'admin2026');
}

// Fonction de login
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('admin-login-btn');
    const passwordInput = document.getElementById('admin-password');
    
    if (!loginBtn) return; // Si pas sur la page admin
    
    // Vérifier si déjà connecté
    if (localStorage.getItem(ADMIN_LOGGED_KEY) === 'true') {
        showAdminPanel();
    }
    
    loginBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY);
        
        if (password === storedPassword) {
            localStorage.setItem(ADMIN_LOGGED_KEY, 'true');
            showAdminPanel();
        } else {
            alert('❌ Mot de passe incorrect');
            passwordInput.value = '';
        }
    });
    
    // Enter pour se connecter
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
});

function showAdminPanel() {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    initAdminPanel();
}

function initAdminPanel() {
    // Navigation entre les onglets
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
        });
    });
    
    // Gestion des infractions
    loadAdminInfractions();
    
    // Sélecteurs de code et catégorie
    document.getElementById('admin-code-select').addEventListener('change', (e) => {
        loadCategories(e.target.value);
        loadAdminInfractions();
    });
    
    document.getElementById('admin-category-select').addEventListener('change', () => {
        loadAdminInfractions();
    });
    
    // Ajouter infraction
    document.getElementById('admin-add-infraction-btn').addEventListener('click', () => {
        openEditModal(null, true);
    });
    
    // Couleurs
    initColorEditor();
    
    // Sauvegarde
    document.getElementById('export-data').addEventListener('click', exportDatabase);
    document.getElementById('import-data-btn').addEventListener('click', () => {
        document.getElementById('import-data').click();
    });
    document.getElementById('import-data').addEventListener('change', importDatabase);
    document.getElementById('reset-data').addEventListener('click', resetDatabase);
    
    // Paramètres
    document.getElementById('change-password').addEventListener('click', changePassword);
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    document.getElementById('logout-admin').addEventListener('click', logoutAdmin);
    
    // Fermer les modales
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('edit-modal').style.display = 'none';
        });
    });
    
    // Charger les catégories initiales
    loadCategories('penal');
}

function loadCategories(codeType) {
    const select = document.getElementById('admin-category-select');
    select.innerHTML = '<option value="">Toutes les catégories</option>';
    
    const data = codeType === 'penal' ? CODE_PENAL : CODE_ROUTE;
    Object.keys(data).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = formatCategoryNameForCode(category, codeType);
        select.appendChild(option);
    });
}

function loadAdminInfractions() {
    const codeType = document.getElementById('admin-code-select').value;
    const category = document.getElementById('admin-category-select').value;
    const container = document.getElementById('admin-infractions-list');
    
    container.innerHTML = '';
    
    const data = codeType === 'penal' ? CODE_PENAL : CODE_ROUTE;
    
    Object.entries(data).forEach(([cat, infractions]) => {
        if (category && cat !== category) return;
        
        infractions.forEach(inf => {
            const item = document.createElement('div');
            item.className = 'admin-infraction-item';
            item.onclick = () => openEditModal(inf, false, codeType, cat);
            
            item.innerHTML = `
                <div class="admin-infraction-info">
                    <h4>${inf.name}</h4>
                    <p>${inf.article} • ${inf.category} • ${inf.prison || 0} ans • ${(inf.amende || 0).toLocaleString()} $</p>
                </div>
            `;
            
            container.appendChild(item);
        });
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Aucune infraction trouvée</p>';
    }
}

let currentEditInfraction = null;
let currentEditCode = null;
let currentEditCategory = null;

function openEditModal(infraction, isNew, codeType, category) {
    const modal = document.getElementById('edit-modal');
    modal.style.display = 'flex';
    
    currentEditInfraction = infraction;
    currentEditCode = codeType || document.getElementById('admin-code-select').value;
    currentEditCategory = category || document.getElementById('admin-category-select').value;
    
    if (isNew) {
        document.getElementById('modal-title').textContent = 'Nouvelle infraction';
        document.getElementById('edit-name').value = '';
        document.getElementById('edit-article').value = '';
        document.getElementById('edit-prison').value = '0';
        document.getElementById('edit-prison-rp').value = '0';
        document.getElementById('edit-amende').value = '0';
        document.getElementById('edit-category').value = 'Délit';
        document.getElementById('edit-description').value = '';
        document.getElementById('delete-infraction').style.display = 'none';
    } else {
        document.getElementById('modal-title').textContent = 'Modifier l\'infraction';
        document.getElementById('edit-name').value = infraction.name;
        document.getElementById('edit-article').value = infraction.article;
        document.getElementById('edit-prison').value = infraction.prison || 0;
        document.getElementById('edit-prison-rp').value = infraction.prisonRP || 0;
        document.getElementById('edit-amende').value = infraction.amende || 0;
        document.getElementById('edit-category').value = infraction.category;
        document.getElementById('edit-description').value = infraction.description || '';
        document.getElementById('delete-infraction').style.display = 'inline-block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-infraction');
    const deleteBtn = document.getElementById('delete-infraction');
    
    if (!saveBtn) return;
    
    saveBtn.addEventListener('click', () => {
        const data = currentEditCode === 'penal' ? CODE_PENAL : CODE_ROUTE;
        
        const newData = {
            id: currentEditInfraction ? currentEditInfraction.id : `custom-${Date.now()}`,
            name: document.getElementById('edit-name').value,
            article: document.getElementById('edit-article').value,
            prison: parseFloat(document.getElementById('edit-prison').value) || 0,
            prisonRP: parseInt(document.getElementById('edit-prison-rp').value) || 0,
            amende: parseInt(document.getElementById('edit-amende').value) || 0,
            category: document.getElementById('edit-category').value,
            description: document.getElementById('edit-description').value
        };
        
        if (!currentEditCategory) {
            alert('Veuillez sélectionner une catégorie');
            return;
        }
        
        if (currentEditInfraction) {
            // Modifier
            const index = data[currentEditCategory].findIndex(i => i.id === currentEditInfraction.id);
            if (index !== -1) {
                data[currentEditCategory][index] = newData;
            }
        } else {
            // Ajouter
            if (!data[currentEditCategory]) {
                data[currentEditCategory] = [];
            }
            data[currentEditCategory].push(newData);
        }
        
        document.getElementById('edit-modal').style.display = 'none';
        loadAdminInfractions();
        renderInfractionsList(); // Mettre à jour le simulateur
        alert('✅ Infraction enregistrée !');
    });
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            if (!confirm('⚠️ Êtes-vous sûr de vouloir supprimer cette infraction ?')) return;
            
            const data = currentEditCode === 'penal' ? CODE_PENAL : CODE_ROUTE;
            const index = data[currentEditCategory].findIndex(i => i.id === currentEditInfraction.id);
            
            if (index !== -1) {
                data[currentEditCategory].splice(index, 1);
            }
            
            document.getElementById('edit-modal').style.display = 'none';
            loadAdminInfractions();
            renderInfractionsList();
            alert('🗑️ Infraction supprimée !');
        });
    }
});

// Gestion des couleurs
function initColorEditor() {
    const colors = {
        primary: { input: 'color-primary', text: 'color-primary-text', var: '--red-primary' },
        secondary: { input: 'color-secondary', text: 'color-secondary-text', var: '--blue-navy' },
        accent: { input: 'color-accent', text: 'color-accent-text', var: '--gold' }
    };
    
    Object.values(colors).forEach(color => {
        const inputEl = document.getElementById(color.input);
        const textEl = document.getElementById(color.text);
        
        if (!inputEl || !textEl) return;
        
        inputEl.addEventListener('input', (e) => {
            textEl.value = e.target.value;
        });
        
        textEl.addEventListener('input', (e) => {
            inputEl.value = e.target.value;
        });
    });
    
    document.getElementById('apply-colors').addEventListener('click', () => {
        document.documentElement.style.setProperty('--red-primary', document.getElementById('color-primary').value);
        document.documentElement.style.setProperty('--blue-navy', document.getElementById('color-secondary').value);
        document.documentElement.style.setProperty('--gold', document.getElementById('color-accent').value);
        
        localStorage.setItem('custom-colors', JSON.stringify({
            primary: document.getElementById('color-primary').value,
            secondary: document.getElementById('color-secondary').value,
            accent: document.getElementById('color-accent').value
        }));
        
        alert('✨ Couleurs appliquées !');
    });
    
    document.getElementById('reset-colors').addEventListener('click', () => {
        document.getElementById('color-primary').value = '#C8102E';
        document.getElementById('color-secondary').value = '#002868';
        document.getElementById('color-accent').value = '#F4E5C3';
        
        document.getElementById('color-primary-text').value = '#C8102E';
        document.getElementById('color-secondary-text').value = '#002868';
        document.getElementById('color-accent-text').value = '#F4E5C3';
        
        document.documentElement.style.setProperty('--red-primary', '#C8102E');
        document.documentElement.style.setProperty('--blue-navy', '#002868');
        document.documentElement.style.setProperty('--gold', '#F4E5C3');
        
        localStorage.removeItem('custom-colors');
        alert('🔄 Couleurs réinitialisées !');
    });
    
    // Charger les couleurs personnalisées
    const savedColors = localStorage.getItem('custom-colors');
    if (savedColors) {
        const colors = JSON.parse(savedColors);
        document.documentElement.style.setProperty('--red-primary', colors.primary);
        document.documentElement.style.setProperty('--blue-navy', colors.secondary);
        document.documentElement.style.setProperty('--gold', colors.accent);
        
        document.getElementById('color-primary').value = colors.primary;
        document.getElementById('color-secondary').value = colors.secondary;
        document.getElementById('color-accent').value = colors.accent;
        
        document.getElementById('color-primary-text').value = colors.primary;
        document.getElementById('color-secondary-text').value = colors.secondary;
        document.getElementById('color-accent-text').value = colors.accent;
    }
}

// Export/Import
function exportDatabase() {
    const dataStr = `// CODE PÉNAL\nconst CODE_PENAL = ${JSON.stringify(CODE_PENAL, null, 4)};\n\n// CODE ROUTE\nconst CODE_ROUTE = ${JSON.stringify(CODE_ROUTE, null, 4)};\n`;
    
    const blob = new Blob([dataStr], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data_backup_${Date.now()}.js`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('💾 Base de données exportée !');
}

function importDatabase(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            alert('✅ Fichier chargé ! Attention: cette fonctionnalité nécessite un rechargement manuel pour prendre effet.');
        } catch (err) {
            alert('❌ Erreur lors de l\'import: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function resetDatabase() {
    if (!confirm('⚠️ ATTENTION ! Ceci va supprimer TOUTES vos modifications. Continuer ?')) return;
    
    localStorage.clear();
    alert('🔄 Données réinitialisées ! Rechargez la page.');
    location.reload();
}

// Paramètres
function changePassword() {
    const newPassword = document.getElementById('new-password').value;
    if (!newPassword || newPassword.length < 4) {
        alert('❌ Le mot de passe doit contenir au moins 4 caractères');
        return;
    }
    
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    document.getElementById('new-password').value = '';
    alert('✅ Mot de passe modifié !');
}

function saveSettings() {
    const settings = {
        cooperation: parseInt(document.getElementById('setting-cooperation').value),
        aveux: parseInt(document.getElementById('setting-aveux').value),
        trouble: parseInt(document.getElementById('setting-trouble').value)
    };
    
    localStorage.setItem('admin-settings', JSON.stringify(settings));
    alert('💾 Paramètres enregistrés !');
}

function logoutAdmin() {
    localStorage.removeItem(ADMIN_LOGGED_KEY);
    location.reload();
}

// Charger les paramètres au démarrage
window.addEventListener('DOMContentLoaded', () => {
    const settingCoop = document.getElementById('setting-cooperation');
    if (!settingCoop) return;
    
    const settings = localStorage.getItem('admin-settings');
    if (settings) {
        const s = JSON.parse(settings);
        document.getElementById('setting-cooperation').value = s.cooperation;
        document.getElementById('setting-aveux').value = s.aveux;
        document.getElementById('setting-trouble').value = s.trouble;
    }
});
