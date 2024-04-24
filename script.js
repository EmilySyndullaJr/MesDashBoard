document.addEventListener("DOMContentLoaded", function() {
    // Function to load sticky note from local storage
    function loadStickyNote() {
        const stickyNote = localStorage.getItem("stickyNote");
        if (stickyNote) {
            document.getElementById("sticky-note").value = stickyNote;
        }
    }

    // Function to save sticky note to local storage
    function saveStickyNote() {
        const stickyNoteText = document.getElementById("sticky-note").value;
        localStorage.setItem("stickyNote", stickyNoteText);
    }

    // Call the update functions initially
    loadStickyNote();

    // Save sticky note whenever it's changed
    document.getElementById("sticky-note").addEventListener("input", saveStickyNote);
});

