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

frappe.ui.form.on('Clients', {
    refresh(frm) {
        // Ajouter un bouton pour Dossier Santé
        frm.add_custom_button(__('Dossier Santé'), function() {
            frappe.new_doc('Dossier Sante', {
                // Pré-remplissage de quelques champs si nécessaire
                //prescripteur: frm.doc.name
            });
        }, __('Create'));

        // Ajouter un bouton pour Nouvelle Démarche Administrative
        frm.add_custom_button(__('Dossier Administratif'), function() {
            frappe.new_doc('Dossier Demarches Administratives', {
                // Pré-remplissage de quelques champs si nécessaire
                //prescripteur: frm.doc.name
            });
        }, __('Create'));

        // Ajouter un bouton pour Dossier Immobilier
        frm.add_custom_button(__('Dossier Immobilier'), function() {
            frappe.new_doc('Dossier Immobilier', {
                // Pré-remplissage de quelques champs si nécessaire
                //prescripteur: frm.doc.name
            });
        }, __('Create'));

        // Ajouter un bouton pour Dossier Immigration
        frm.add_custom_button(__('Dossier Immigration'), function() {
            frappe.new_doc('Dossier Immigration', {
                // Pré-remplissage de quelques champs si nécessaire
                //prescripteur: frm.doc.name
            });
        }, __('Create'));
    }
});
