// DISC Data Definitions
const discData = [
    { D: "Durchsetzungsfähig", I: "Charismatisch", S: "Geduldig", G: "Analytisch" },
    { D: "Entschlossen", I: "Begeisternd", S: "Unterstützend", G: "Methodisch" },
    { D: "Wettbewerbsfähig", I: "Kontaktfreudig", S: "Zuverlässig", G: "Detailorientiert" },
    { D: "Unabhängig", I: "Überzeugend", S: "Ruhig", G: "Präzise" },
    { D: "Zielstrebig", I: "Gesellig", S: "Loyal", G: "Organisiert" },
    { D: "Kühn", I: "Inspirierend", S: "Verständnisvoll", G: "Systematisch" },
    { D: "Durchsetzungsstark", I: "Optimistisch", S: "Beständig", G: "Genau" },
    { D: "Selbstsicher", I: "Redselig", S: "Sanft", G: "Gründlich" },
    { D: "Entschlossen", I: "Energisch", S: "Zuverlässig", G: "Sorgfältig" },
    { D: "Befehlsgewaltig", I: "Freundlich", S: "Beruhigend", G: "Rigoros" },
    { D: "Entschlossen", I: "Engagiert", S: "Konsistent", G: "Vorsichtig" },
    { D: "Strategisch", I: "Lebhaft", S: "Vertrauenswürdig", G: "Genau" },
    { D: "Autoritär", I: "Gesellig", S: "Unterstützend", G: "Strukturiert" },
    { D: "Zielorientiert", I: "Überzeugend", S: "Anpassungsfähig", G: "Genau" },
    { D: "Direkt", I: "Begeisternd", S: "Ruhig", G: "Geplant" },
    { D: "Eindrucksvoll", I: "Gesellig", S: "Zuverlässig", G: "Systematisch" },
    { D: "Selbstbewusst", I: "Lebhaft", S: "Beständig", G: "Gründlich" },
    { D: "Unnachgiebig", I: "Aufgeschlossen", S: "Geduldig", G: "Konsistent" },
    { D: "Abenteuerlich", I: "Motivierend", S: "Freundlich", G: "Diszipliniert" },
    { D: "Zäh", I: "Ausdrucksstark", S: "Verständnisvoll", G: "Detailliert" },
    { D: "Dynamisch", I: "Warm", S: "Loyal", G: "Logisch" },
    { D: "Intuitiv", I: "Strahlend", S: "Gelassen", G: "Präzise" },
    { D: "Kühn", I: "Einladend", S: "Standhaft", G: "Detailliert" },
    { D: "Unkonventionell", I: "Lebhaft", S: "Stabil", G: "Gründlich" },
    { D: "Entschlossen", I: "Erregbar", S: "Vertrauend", G: "Genau" },
    { D: "Zielstrebig", I: "Animiert", S: "Zuverlässig", G: "Vorsichtig" },
    { D: "Befehlsgewaltig", I: "Überzeugend", S: "Anpassungsfähig", G: "Methodisch" },
    { D: "Durchsetzungsstark", I: "Begeisternd", S: "Geduldig", G: "Systematisch" }
];

const typeDescriptions = {
    D: "<strong>Dominant:</strong> Der dominante Persönlichkeitstyp ist durch Entschlossenheit, Durchsetzungsvermögen und einen Fokus auf Ergebnisse gekennzeichnet. Menschen mit einer dominanten Persönlichkeit sind oft direkt, selbstbewusst und übernehmen die Initiative. Sie sind natürliche Führungspersönlichkeiten und haben keine Angst davor, die Kontrolle zu übernehmen. Im Arbeitsumfeld gedeihen Menschen mit einem dominanten Persönlichkeitstyp in Rollen, die Führung, Entscheidungsfindung und die Fähigkeit erfordern, die Kontrolle zu übernehmen. Sie sind oft strategisch und zielorientiert und konzentrieren sich darauf, Ergebnisse zu erzielen.",
    I: "<strong>Initiativ:</strong> Der Einfluss-Persönlichkeitstyp ist durch Geselligkeit, Begeisterung und einen Fokus auf den Aufbau von Beziehungen gekennzeichnet. Menschen mit einer einflussreichen Persönlichkeit sind oft kontaktfreudig, optimistisch und genießen den Austausch mit anderen. Sie sind natürliche Netzwerker und in der Lage, diejenigen um sich herum zu motivieren und zu inspirieren. Im Arbeitsumfeld zeichnen sich Menschen mit einem einflussreichen Persönlichkeitstyp in Rollen aus, die soziale Fähigkeiten erfordern, wie Vertrieb, Marketing und Kundenservice. Sie sind oft kreativ und gedeihen in Umgebungen, die es ihnen ermöglichen, ihre Ideen auszudrücken und Verbindungen zu anderen aufzubauen.",
    S: "<strong>Stetig:</strong> Der stetige Persönlichkeitstyp ist durch Geduld, Empathie und einen Fokus auf Zusammenarbeit gekennzeichnet. Menschen mit einer stetigen Persönlichkeit sind oft unterstützend, zuverlässig und schätzen Harmonie in ihren Beziehungen. Sie sind gute Zuhörer und in der Lage, Vertrauen aufzubauen und in ihren Interaktionen mit anderen ein Gefühl der Sicherheit zu schaffen. Im Arbeitsumfeld zeichnen sich Menschen mit einem stetigen Persönlichkeitstyp in Rollen aus, die Teamarbeit, Empathie und ein ruhiges Händchen erfordern, wie in der Personalabteilung, Beratung oder administrativen Positionen. Sie sind oft gut darin, Konflikte zu lösen und eine positive Arbeitsumgebung zu schaffen.",
    G: "<strong>Gewissenhaft:</strong> Der gewissenhafte Persönlichkeitstyp ist durch Präzision, Organisation und einen Fokus auf Qualität gekennzeichnet. Menschen mit einer gewissenhaften Persönlichkeit sind oft detailorientiert, analytisch und schätzen Genauigkeit in ihrer Arbeit. Sie sind gründlich und methodisch in ihrem Ansatz und streben nach Exzellenz in allem, was sie tun. Im Arbeitsumfeld zeichnen sich Menschen mit einem gewissenhaften Persönlichkeitstyp in Rollen aus, die Detailgenauigkeit erfordern, wie Buchhaltung, Forschung oder Projektmanagement. Sie sind oft in der Lage, Prozesse und Standards zu entwickeln und einzuhalten, wodurch sichergestellt wird, dass die Arbeit auf höchstem Qualitätsniveau erledigt wird."
};

class DiscQuickTest {
    constructor() {
        this.pairs = [];
        this.currentIndex = 0;
        this.answers = []; // Array of { groupIndex, winnerType, loserType }
        
        this.totalSeconds = 0;
        this.microSeconds = 3;
        this.globalTimerId = null;
        this.microTimerId = null;

        this.init();
    }

    init() {
        this.generatePairs();
        this.loadSession();
        this.bindEvents();
    }

    // Save state to URL hash
    saveSession() {
        const state = {
            i: this.currentIndex,
            a: this.answers.map(ans => `${ans.winnerType}${ans.loserType}${ans.groupIndex}`)
        };
        const encoded = btoa(JSON.stringify(state));
        window.history.replaceState(null, null, "#" + encoded);
    }

    // Load state from URL hash
    loadSession() {
        if (window.location.hash) {
            try {
                const encoded = window.location.hash.substring(1);
                const state = JSON.parse(atob(encoded));
                this.currentIndex = state.i;
                this.answers = state.a.map(str => ({
                    winnerType: str[0],
                    loserType: str[1],
                    groupIndex: parseInt(str.substring(2))
                }));

                // Handle auto-resume if data exists
                if (this.currentIndex > 0) {
                    window.addEventListener('load', () => {
                        document.getElementById('instruction-screen').classList.add('hidden');
                        document.getElementById('question-screen').classList.remove('hidden');
                        this.updateUI();
                        this.startTimers();
                    });
                }
            } catch (e) {
                console.error("Session resume failed", e);
            }
        }
    }

    generatePairs() {
        // For each group of 4, we have 6 combinations:
        // D-I, D-S, D-G, I-S, I-G, S-G
        discData.forEach((group, gIdx) => {
            const types = Object.keys(group); // [D, I, S, G]
            for (let i = 0; i < types.length; i++) {
                for (let j = i + 1; j < types.length; j++) {
                    // Randomize left/right presentation
                    const flip = Math.random() > 0.5;
                    this.pairs.push({
                        groupIndex: gIdx,
                        leftType: flip ? types[j] : types[i],
                        rightType: flip ? types[i] : types[j],
                        leftText: flip ? group[types[j]] : group[types[i]],
                        rightText: flip ? group[types[i]] : group[types[j]]
                    });
                }
            }
        });
        // Global shuffle for dynamic experience
        this.pairs.sort(() => Math.random() - 0.5);
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startTest());
        document.getElementById('choice-left').addEventListener('click', () => this.handleChoice('left'));
        document.getElementById('choice-right').addEventListener('click', () => this.handleChoice('right'));
        document.getElementById('back-btn').addEventListener('click', () => this.undo());
        document.getElementById('export-btn').addEventListener('click', () => window.print());

        // Keyboard support
        window.addEventListener('keydown', (e) => {
            if (document.getElementById('question-screen').classList.contains('hidden')) return;
            if (e.key === 'ArrowLeft') this.handleChoice('left');
            if (e.key === 'ArrowRight') this.handleChoice('right');
        });

        // Basic Swipe support
        let touchStartX = 0;
        window.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, false);
        window.addEventListener('touchend', (e) => {
            if (document.getElementById('question-screen').classList.contains('hidden')) return;
            let touchEndX = e.changedTouches[0].screenX;
            let diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 50) {
                // Swipe Right -> Select Left card
                if (diff > 0) this.handleChoice('left');
                // Swipe Left -> Select Right card
                else this.handleChoice('right');
            }
        }, false);
    }

    startTest() {
        document.getElementById('instruction-screen').classList.add('hidden');
        document.getElementById('question-screen').classList.remove('hidden');
        this.updateUI();
        this.startTimers();
    }

    startTimers() {
        // Global Timer
        this.globalTimerId = setInterval(() => {
            this.totalSeconds++;
            const mins = Math.floor(this.totalSeconds / 60).toString().padStart(2, '0');
            const secs = (this.totalSeconds % 60).toString().padStart(2, '0');
            document.getElementById('total-timer').textContent = `${mins}:${secs}`;
        }, 1000);

        // Micro Timer
        this.microTimerId = setInterval(() => {
            this.microSeconds--;
            if (this.microSeconds <= 0) {
                document.getElementById('micro-timer-container').classList.add('alert');
                document.getElementById('micro-timer').textContent = "0";
            } else {
                document.getElementById('micro-timer-container').classList.remove('alert');
                document.getElementById('micro-timer').textContent = this.microSeconds;
            }
        }, 1000);
    }

    handleChoice(side) {
        const currentPair = this.pairs[this.currentIndex];
        const winner = side === 'left' ? currentPair.leftType : currentPair.rightType;
        const loser = side === 'left' ? currentPair.rightType : currentPair.leftType;

        this.answers.push({
            groupIndex: currentPair.groupIndex,
            winnerType: winner,
            loserType: loser
        });

        this.currentIndex++;
        this.microSeconds = 3; // Reset
        document.getElementById('micro-timer').textContent = "3";
        document.getElementById('micro-timer-container').classList.remove('alert');

        this.saveSession();

        if (this.currentIndex >= this.pairs.length) {
            this.finishTest();
        } else {
            this.updateUI();
        }
    }

    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.answers.pop();
            this.microSeconds = 3;
            this.saveSession();
            this.updateUI();
        }
    }

    updateUI() {
        const progress = (this.currentIndex / this.pairs.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;

        const pair = this.pairs[this.currentIndex];
        document.getElementById('adj-left').textContent = pair.leftText;
        document.getElementById('adj-right').textContent = pair.rightText;

        // Back button visibility
        if (this.currentIndex > 0) document.getElementById('back-btn').classList.remove('hidden');
        else document.getElementById('back-btn').classList.add('hidden');
    }

    finishTest() {
        clearInterval(this.globalTimerId);
        clearInterval(this.microTimerId);

        document.getElementById('question-screen').classList.add('hidden');
        document.getElementById('test-header').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');

        this.calculateResults();
    }

    calculateResults() {
        // We have 28 groups. For each group, we count wins for D, I, S, G.
        // Each type can have max 3 wins per group.
        const groupWins = Array.from({ length: 28 }, () => ({ D: 0, I: 0, S: 0, G: 0 }));
        
        this.answers.forEach(ans => {
            groupWins[ans.groupIndex][ans.winnerType]++;
        });

        // Translate wins to points (1-4 scale)
        // 3 wins = 1 point (Best)
        // 2 wins = 2 points
        // 1 win  = 3 points
        // 0 wins = 4 points (Worst)
        const finalScores = { D: 0, I: 0, S: 0, G: 0 };
        groupWins.forEach(wins => {
            finalScores.D += (4 - wins.D);
            finalScores.I += (4 - wins.I);
            finalScores.S += (4 - wins.S);
            finalScores.G += (4 - wins.G);
        });

        this.renderChart(finalScores);
        this.renderDescriptions(finalScores);
    }

    renderChart(scores) {
        // Find primary type index for bolding
        const types = ['D', 'I', 'S', 'G'];
        let primaryType = 'D';
        let lowest = scores.D;
        types.forEach(t => {
            if (scores[t] < lowest) {
                lowest = scores[t];
                primaryType = t;
            }
        });
        const primaryIndex = types.indexOf(primaryType);

        const ctx = document.getElementById('discChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['D (Dominant)', 'I (Initiativ)', 'S (Stetig)', 'G (Gewissenhaft)'],
                datasets: [{
                    label: 'Punktzahl (niedriger ist stärker)',
                    data: [scores.D, scores.I, scores.S, scores.G],
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.7)',  // Red for D
                        'rgba(241, 196, 15, 0.7)', // Yellow for I
                        'rgba(46, 204, 113, 0.7)', // Green for S
                        'rgba(52, 152, 219, 0.7)'  // Blue for G
                    ],
                    borderColor: [
                        '#c0392b', '#f39c12', '#27ae60', '#2980b9'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: { 
                        beginAtZero: true,
                        max: 112,
                        title: { display: true, text: 'Punkte' }
                    },
                    y: {
                        ticks: {
                            font: {
                                weight: (context) => (context.index === primaryIndex ? 'bold' : 'normal'),
                                size: (context) => (context.index === primaryIndex ? 14 : 12)
                            }
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        document.getElementById('score-details').innerHTML = `
            <span style="color:#c0392b">D: ${scores.D}</span>
            <span style="color:#f39c12">I: ${scores.I}</span>
            <span style="color:#27ae60">S: ${scores.S}</span>
            <span style="color:#2980b9">G: ${scores.G}</span>
        `;
    }

    renderDescriptions(scores) {
        // Determine primary type (lowest score)
        let primaryType = 'D';
        let lowest = scores.D;
        for (const [type, val] of Object.entries(scores)) {
            if (val < lowest) {
                lowest = val;
                primaryType = type;
            }
        }

        document.getElementById('primary-type-description').innerHTML = `
            <h3>Ihr primärer Typ: ${primaryType}</h3>
            ${typeDescriptions[primaryType]}
        `;

        // Render all other descriptions
        let html = '';
        Object.entries(typeDescriptions).forEach(([type, desc]) => {
            html += `<div class="desc-item" style="margin-bottom:20px; opacity:0.8">${desc}</div>`;
        });
        document.getElementById('all-descriptions').innerHTML = html;
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new DiscQuickTest();
});
