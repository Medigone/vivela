// Copyright (c) 2024, Medigo and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Clients", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Clients", {
    nom: function(frm) {
        updateNomComplet(frm);
    },
    prenom: function(frm) {
        updateNomComplet(frm);
    }
});

function updateNomComplet(frm) {
    let nom = frm.doc.nom || "";
    let prenom = frm.doc.prenom || "";

    let completeName = (nom + " " + prenom).trim().toUpperCase();
    frm.set_value("nom_complet", completeName || null);
}