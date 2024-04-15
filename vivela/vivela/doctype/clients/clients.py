# Copyright (c) 2024, Medigo and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Clients(Document):
	pass

class Clients(Document):
	def update_nom_complet(self):
		self.nom_complet = self.nom + " " + self.prenom
		self.save()