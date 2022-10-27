
export default {
  updateImporterDB: function(pwndoc_template_id) {
    return fetch(`/import_automator/templates/update_db/${pwndoc_template_id}`);
  },
}
