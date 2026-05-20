/* =================================================================
   BASE DE DONNÉES PÉDAGOGIQUE (PREMIÈRE & TERMINALE)
   ================================================================= */

const coursesData = {
    
    // --- NIVEAU PREMIÈRE ---
    
    'rep-donnees': {
        title: "Représentation des Données",
        level: "Première",
        content: `
            <div class="note-box">
                <h5><i class="fa-solid fa-bullseye"></i> Objectifs</h5>
                <p>Comprendre comment l'ordinateur stocke les nombres et le texte avec des 0 et des 1.</p>
            </div>
            <h3>1. Les Bases</h3>
            <ul>
                <li><strong>Binaire (Base 2) :</strong> Composé uniquement de 0 et 1.</li>
                <li><strong>Hexadécimal (Base 16) :</strong> 0-9 et A-F. Utile pour simplifier l'écriture binaire.</li>
            </ul>
            <h3>2. Les Entiers Négatifs</h3>
            <p>On utilise le <strong>Complément à 2</strong>. On inverse les bits et on ajoute 1.</p>
            <h3>3. Les Flottants (Virgule)</h3>
            <div class="warning-box">
                <h5><i class="fa-solid fa-bomb"></i> Norme IEEE 754</h5>
                <p>Les calculs sur les nombres à virgule ne sont pas exacts ! <code>0.1 + 0.2</code> ne vaut pas exactement 0.3.</p>
            </div>
        `,
        exercises: [
            { title: "Conversion", difficulty: "easy", question: "Combien vaut l'octet <code>0000 1010</code> en décimal ?", answer: "8 + 2 = <strong>10</strong>." },
            { title: "Capacité", difficulty: "medium", question: "Combien de valeurs code-t-on sur 8 bits ?", answer: "2 puissance 8 = <strong>256</strong> valeurs." }
        ]
    },

    'python-base': {
        title: "Bases du Langage Python",
        level: "Première",
        content: `
            <h3>1. Types et Variables</h3>
            <pre><code class="language-python">age = 17        # int
prix = 19.99    # float
nom = "NSI"     # str
is_ok = True    # bool</code></pre>
            <h3>2. Structures Conditionnelles</h3>
            <p>L'indentation est cruciale en Python !</p>
            <pre><code class="language-python">if age >= 18:
    print("Majeur")
else:
    print("Mineur")</code></pre>
        `,
        exercises: [
            { title: "Opérateur", difficulty: "easy", question: "Que fait <code>10 % 3</code> ?", answer: "C'est le modulo (reste de la division). Il renvoie <strong>1</strong>." },
            { title: "Erreur Type", difficulty: "medium", question: "Peut-on faire <code>'Score: ' + 10</code> ?", answer: "Non, il faut convertir l'entier : <code>'Score: ' + str(10)</code>." }
        ]
    },

    'algo-tri': {
        title: "Algorithmique & Complexité",
        level: "Première",
        content: `
            <h3>1. La Complexité</h3>
            <p>On mesure l'efficacité d'un algo avec la notation <strong>O(n)</strong>.</p>
            <ul>
                <li>O(1) : Accès immédiat.</li>
                <li>O(n) : Parcours simple.</li>
                <li>O(n²) : Boucles imbriquées (Lent).</li>
            </ul>
            <h3>2. Tri par Insertion</h3>
            <p>Comme ranger des cartes dans sa main. On décale les éléments plus grands.</p>
        `,
        exercises: [
            { title: "Calcul", difficulty: "hard", question: "Si n=10 prend 1s en O(n²), combien prend n=100 ?", answer: "10 fois plus de données -> 10² = 100 fois plus de temps. Donc <strong>100 secondes</strong>." }
        ]
    },

    'web-intro': {
        title: "Web & Protocole HTTP",
        level: "Première",
        content: `
            <div class="note-box">
                <h5>Architecture</h5>
                <p>Le Web repose sur le modèle <strong>Client-Serveur</strong>.</p>
            </div>
            <h3>1. Requêtes HTTP</h3>
            <ul>
                <li><strong>GET</strong> : Demander une page.</li>
                <li><strong>POST</strong> : Envoyer un formulaire.</li>
            </ul>
            <h3>2. HTML & CSS</h3>
            <p>HTML pour le fond (structure), CSS pour la forme (style).</p>
        `,
        exercises: [
            { title: "Code 404", difficulty: "easy", question: "Signification de l'erreur 404 ?", answer: "<strong>Not Found</strong> : La ressource n'existe pas." }
        ]
    },

    'archi-os': {
        title: "Architecture & OS",
        level: "Première",
        content: `
            <h3>1. Modèle Von Neumann</h3>
            <p>CPU (Calcul) + Mémoire (Stockage) + Entrées/Sorties.</p>
            <h3>2. Linux</h3>
            <p>Le système gère les processus et les fichiers. Commandes de base : <code>ls</code>, <code>cd</code>, <code>chmod</code>.</p>
        `,
        exercises: [
            { title: "CPU", difficulty: "medium", question: "Que signifie UAL ?", answer: "Unité Arithmétique et Logique." }
        ]
    },

    // --- NIVEAU TERMINALE ---

    'poo': {
        title: "Programmation Orientée Objet",
        level: "Terminale",
        content: `
            <h3>1. Classes et Objets</h3>
            <p>Une Classe est un moule. Un Objet est une instance.</p>
            <pre><code class="language-python">class Chien:
    def __init__(self, nom):
        self.nom = nom  # Attribut</code></pre>
            <h3>2. Encapsulation</h3>
            <p>Protéger les données internes de l'objet.</p>
        `,
        exercises: [
            { title: "Vocabulaire", difficulty: "easy", question: "Qu'est-ce qu'une méthode ?", answer: "Une fonction définie à l'intérieur d'une classe." }
        ]
    },

    'struct-lin': {
        title: "Structures Linéaires",
        level: "Terminale",
        content: `
            <h3>1. Piles (Stack)</h3>
            <p>LIFO : Last In, First Out (Dernier entré, premier sorti). Comme une pile d'assiettes.</p>
            <h3>2. Files (Queue)</h3>
            <p>FIFO : First In, First Out. Comme une queue au cinéma.</p>
        `,
        exercises: [
            { title: "Choix", difficulty: "medium", question: "Structure pour 'Annuler' (Ctrl+Z) ?", answer: "Une <strong>Pile</strong> (LIFO)." }
        ]
    },

    'arbres': {
        title: "Arbres et Graphes",
        level: "Terminale",
        content: `
            <h3>1. Arbres Binaires</h3>
            <p>Chaque nœud a au max 2 enfants. Idéal pour hiérarchiser les données.</p>
            <h3>2. Arbre Binaire de Recherche (ABR)</h3>
            <p>Tout ce qui est à gauche est plus petit. Recherche très rapide.</p>
        `,
        exercises: [
            { title: "Taille", difficulty: "easy", question: "La taille d'un arbre ?", answer: "Le nombre total de nœuds." }
        ]
    },

    'sql-bdd': {
        title: "Bases de Données SQL",
        level: "Terminale",
        content: `
            <h3>1. Relationnel</h3>
            <p>Données en tables reliées par des Clés Primaires et Étrangères.</p>
            <h3>2. SQL</h3>
            <pre><code class="language-sql">SELECT nom FROM eleves WHERE classe = 'Terminale';</code></pre>
        `,
        exercises: [
            { title: "Liaison", difficulty: "medium", question: "Commande pour lier deux tables ?", answer: "<strong>JOIN ... ON ...</strong>" }
        ]
    },

    'recursivite': {
        title: "La Récursivité",
        level: "Terminale",
        content: `
            <div class="note-box">
                <h5>Définition</h5>
                <p>Une fonction qui s'appelle elle-même. Nécessite un <strong>Cas de Base</strong>.</p>
            </div>
            <pre><code class="language-python">def fact(n):
    if n == 0: return 1
    return n * fact(n-1)</code></pre>
        `,
        exercises: [
            { title: "Danger", difficulty: "hard", question: "Risque principal ?", answer: "<strong>Stack Overflow</strong> (Dépassement de pile) si pas de condition d'arrêt." }
        ]
    },

    'reseaux-secu': {
        title: "Réseaux & Sécurité",
        level: "Terminale",
        content: `
            <h3>1. Routage</h3>
            <p>Protocoles RIP (Distance) et OSPF (Vitesse) pour trouver le chemin.</p>
            <h3>2. Chiffrement</h3>
            <p>Symétrique (Même clé) vs Asymétrique (Clé Publique/Privée).</p>
        `,
        exercises: [
            { title: "Masque", difficulty: "hard", question: "A quoi sert le masque sous-réseau ?", answer: "Séparer la partie Réseau de la partie Machine dans l'IP." }
        ]
    }
};

/* =================================================================
   LOGIQUE D'AFFICHAGE & NAVIGATION
   ================================================================= */

function showSection(sectionId) {
    // 1. Cacher toutes les sections
    document.querySelectorAll('.content-section').forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active-section');
    });
    
    // 2. Montrer la cible
    const target = document.getElementById(sectionId);
    if(target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active-section'), 10);
    }
    
    // 3. Mettre à jour le menu
    document.querySelectorAll('.navbar li').forEach(li => li.classList.remove('active'));
    const activeBtn = document.querySelector(`.navbar li[onclick*="${sectionId}"]`);
    if(activeBtn) activeBtn.classList.add('active');

    // 4. Si on quitte l'onglet cours, on ferme le viewer
    if(sectionId !== 'cours') closeCourse();
}

function openCourse(courseId) {
    const data = coursesData[courseId];
    if (!data) return alert("Contenu en cours de rédaction !");

    // Remplir les textes
    document.getElementById('course-title').textContent = data.title;
    const badge = document.getElementById('course-tag');
    badge.textContent = data.level;
    badge.className = `badge ${data.level === 'Première' ? 'premiere' : 'terminale'}`;

    // Remplir le HTML
    document.getElementById('course-content').innerHTML = data.content;

    // Remplir les exercices
    const exoContainer = document.getElementById('course-exercises');
    exoContainer.innerHTML = ""; 
    
    data.exercises.forEach(exo => {
        const div = document.createElement('div');
        div.className = 'exo-card';
        // Couleur point difficulté
        let dotClass = exo.difficulty === 'easy' ? 'easy' : (exo.difficulty === 'medium' ? 'medium' : 'hard');
        
        div.innerHTML = `
            <h4>${exo.title} <span class="difficulty-dot ${dotClass}" title="${exo.difficulty}"></span></h4>
            <p>${exo.question}</p>
            <details>
                <summary>Voir la Correction</summary>
                <div class="correction">${exo.answer}</div>
            </details>
        `;
        exoContainer.appendChild(div);
    });

    // Basculer la vue
    document.getElementById('course-list-container').style.display = 'none';
    document.getElementById('course-viewer').style.display = 'block';
    
    // Relancer la coloration syntaxique
    Prism.highlightAll();
    // Remonter en haut de page
    window.scrollTo(0,0);
}

function closeCourse() {
    document.getElementById('course-viewer').style.display = 'none';
    document.getElementById('course-list-container').style.display = 'block';
}

function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value;
    const body = document.getElementById('student-question').value;
    const currentCourse = document.getElementById('course-title').textContent;
    
    const subject = `[NSI] Question de ${name} sur : ${currentCourse}`;
    // Ouvre le client mail par défaut
    window.location.href = `mailto:prof@nsi.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* =================================================================
   ANIMATIONS VISUELLES
   ================================================================= */

// 1. Typewriter Effect
const txtElement = document.getElementById('typewriter');
const phrases = ["Comprendre le Monde Numérique !", "Maîtriser Python & le Web !", "Réussir son Bac NSI !"];
let pIdx = 0; let cIdx = 0; let isDeleting = false;

function type() {
    if(!txtElement) return;
    const fullTxt = phrases[pIdx];
    txtElement.textContent = isDeleting ? fullTxt.substring(0, cIdx-1) : fullTxt.substring(0, cIdx+1);
    cIdx = isDeleting ? cIdx-1 : cIdx+1;
    
    let speed = 100;
    if(isDeleting) speed = 50;
    if(!isDeleting && cIdx === fullTxt.length) { speed = 2000; isDeleting = true; }
    else if(isDeleting && cIdx === 0) { isDeleting = false; pIdx = (pIdx+1)%phrases.length; speed = 500; }
    
    setTimeout(type, speed);
}

// 2. Canvas Neural Network
const canvas = document.getElementById('neuralCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.size = Math.random() * 2;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(14, 165, 233, 0.4)';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill();
    }
}

function init() {
    particles = [];
    const n = (canvas.width * canvas.height) / 10000;
    for(let i=0; i<n; i++) particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<particles.length; i++) {
        particles[i].update(); particles[i].draw();
        for(let j=i; j<particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx*dx + dy*dy);
            if(d < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(14, 165, 233, ${1 - d/120})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
    init(); animate(); type(); showSection('accueil');
});