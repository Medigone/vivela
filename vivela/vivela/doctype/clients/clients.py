# Copyright (c) 2024, Medigo and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Clients(Document):
    def before_save(self):
        self.nom_complet = f"{self.nom} {self.prenom}".upper()

