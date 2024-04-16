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
        frm.add_custom_button(__('Dossier Médical'), function () {
            // Logique pour créer une nouvelle commande client
            frappe.new_doc('Dossier Medical', {
                // Pré-remplissage de quelques champs si nécessaire
                //prescripteur: frm.doc.name // Pré-remplir le nom du client dans la nouvelle commande client
                // Vous pouvez ajouter d'autres champs ici
            });
        }, __('Create'));
    }
});
