document.addEventListener('DOMContentLoaded', () => {
    const notes = document.querySelectorAll('.sticky-note');
    const peelSound = document.getElementById('peel-sound');

    notes.forEach(note => {
        const button = note.querySelector('.action-button');
        button.addEventListener('click', () => {
            if (!note.classList.contains('expanded')) {
                // Entferne die "expanded"-Klasse von allen Zetteln
                notes.forEach(n => {
                    n.classList.remove('expanded');
                    n.querySelector('.action-button').textContent = 'Ansehen'; // Setze Button-Text zurück
                });
                // Füge die "expanded"-Klasse zur angeklickten Note hinzu
                note.classList.add('expanded');
                button.textContent = 'Zurück'; // Ändere Button-Text zu "Zurück"
                // Spiele das Abziehgeräusch ab
                peelSound.play();
            } else {
                // Falls der Zettel bereits expandiert ist, schließe ihn
                note.classList.remove('expanded');
                button.textContent = 'Ansehen'; // Ändere Button-Text zurück zu "Ansehen"
            }
        });
    });
});
