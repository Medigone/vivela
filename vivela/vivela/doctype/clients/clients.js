// Copyright (c) 2024, Medigo and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Clients", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Clients", {
    refresh: function(frm) {
        frm.set_value("nom_complet", frm.doc.nom + " " + frm.doc.prenom);
    }
});